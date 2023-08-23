import { InteractionResponseType } from "discord-interactions";
import { Response } from "express";
import { DataObject } from "../api/interactionController";
import { redisClient } from "../server";

type HGetAllResult = Record<string, string>;

function objectFromArray(arr: any[]): any {
  return arr.reduce((acc, obj) => {
    acc[obj.name] = obj.value;
    return acc;
  }, {});
}

function sortedListData(data: HGetAllResult) {
  return Object.entries(data).sort((obj1, obj2) => {
    const value1 = parseInt(obj1[1]);
    const value2 = parseInt(obj2[1]);
    return value2 - value1;
  });
}

function getFormattedListDataWithCurrentPosition(
  listData: HGetAllResult,
  currentPosition: string | null
) {
  let formattedList = Object.entries(listData)
    .sort((obj1, obj2) => {
      const value1 = parseInt(obj1[1]);
      const value2 = parseInt(obj2[1]);
      return value2 - value1;
    })
    .map(([key, value]) => {
      if (key == currentPosition) {
        return `${key} : ${value} - CURRENT`;
      } else return `${key} : ${value}`;
    });
  return formattedList.join("\n");
}

function getNextPosition(
  listData: HGetAllResult,
  currentPosition: string | null
) {
  const sortedList = sortedListData(listData);
  let index = sortedList.findIndex(([key, _]) => key == currentPosition);
  index = (index + 1) % sortedList.length;
  return sortedList[index][0];
}

async function handleListResponse(data: DataObject, res: Response) {
  const redisKey = `${data.id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;

  redisClient.connect();
  // get
  const listData = await redisClient.hGetAll(redisKey);
  const currentPosition = await redisClient.get(currentPositionKey);
  // format
  let content = getFormattedListDataWithCurrentPosition(
    listData,
    currentPosition
  );

  if (content == "") content = "List is empty";

  redisClient.quit();
  // send
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content,
    },
  });
}

async function handleAddResponse(data: DataObject, res: Response) {
  const redisKey = `${data.id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;

  const objectArrOptions = objectFromArray(data.options[0].options);
  const name = objectArrOptions.name;
  const value = objectArrOptions.value;

  redisClient.connect();
  // set
  await redisClient.hSet(redisKey, {
    [name]: value,
  });
  // get
  const listData = await redisClient.hGetAll(redisKey);
  let currentPosition = await redisClient.get(currentPositionKey);
  // format
  const content = getFormattedListDataWithCurrentPosition(
    listData,
    currentPosition
  );

  redisClient.quit();
  // send
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content,
    },
  });
}

async function handleRemoveResponse(data: DataObject, res: Response) {
  const redisKey = `${data.id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;
  const itemToRemoveKey = data.options[0].options[0].value;

  redisClient.connect();
  // set
  await redisClient.hDel(redisKey, itemToRemoveKey);

  // get
  const listData = await redisClient.hGetAll(redisKey);
  const currentPosition = await redisClient.get(currentPositionKey);
  // format
  const content = getFormattedListDataWithCurrentPosition(
    listData,
    currentPosition
  );

  redisClient.quit();
  // send
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: content,
    },
  });
}

async function handleNextResponse(data: DataObject, res: Response) {
  const redisKey = `${data.id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;

  redisClient.connect();
  // get
  let currentPosition = await redisClient.get(currentPositionKey);
  const listData = await redisClient.hGetAll(redisKey);
  // set
  const nextPosition = getNextPosition(listData, currentPosition);
  await redisClient.set(currentPositionKey, nextPosition);
  // format
  const content = getFormattedListDataWithCurrentPosition(
    listData,
    nextPosition
  );

  redisClient.quit();

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content,
    },
  });
}

async function handleClearResponse(data: DataObject, res: Response) {
  const redisKey = `${data.id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;

  redisClient.connect();

  await redisClient.del(redisKey);
  await redisClient.del(currentPositionKey);

  redisClient.quit();

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Initiative list is now empty`,
    },
  });
}

async function initiativeResponse(data: DataObject, res: Response) {
  try {
    switch (data.options[0].name) {
      case "list":
        handleListResponse(data, res);
        return;
      case "add":
        handleAddResponse(data, res);
        return;
      case "remove":
        handleRemoveResponse(data, res);
        return;
      case "next":
        handleNextResponse(data, res);
        return;
      case "clear":
        handleClearResponse(data, res);
        return;
      default:
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: "There was an error",
          },
        });
    }
  } catch (err) {
    console.log(err);
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "There was an error",
      },
    });
  }
}

export { initiativeResponse };
