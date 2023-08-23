"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiativeResponse = void 0;
const discord_interactions_1 = require("discord-interactions");
const server_1 = require("../server");
function objectFromArray(arr) {
    return arr.reduce((acc, obj) => {
        acc[obj.name] = obj.value;
        return acc;
    }, {});
}
function sortedListData(data) {
    return Object.entries(data).sort((obj1, obj2) => {
        const value1 = parseInt(obj1[1]);
        const value2 = parseInt(obj2[1]);
        return value2 - value1;
    });
}
function getFormattedListDataWithCurrentPosition(listData, currentPosition) {
    let formattedList = Object.entries(listData)
        .sort((obj1, obj2) => {
        const value1 = parseInt(obj1[1]);
        const value2 = parseInt(obj2[1]);
        return value2 - value1;
    })
        .map(([key, value]) => {
        if (key == currentPosition) {
            return `${key} : ${value} - CURRENT`;
        }
        else
            return `${key} : ${value}`;
    });
    return formattedList.join("\n");
}
function getNextPosition(listData, currentPosition) {
    const sortedList = sortedListData(listData);
    let index = sortedList.findIndex(([key, _]) => key == currentPosition);
    index = (index + 1) % sortedList.length;
    return sortedList[index][0];
}
function handleListResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const redisKey = `${data.id}-initiative`;
        const currentPositionKey = `${redisKey}-currentPosition`;
        const listData = yield server_1.redisClient.hGetAll(redisKey);
        const currentPosition = yield server_1.redisClient.get(currentPositionKey);
        let content = getFormattedListDataWithCurrentPosition(listData, currentPosition);
        if (content == "")
            content = "List is empty";
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content,
            },
        });
    });
}
function handleAddResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const redisKey = `${data.id}-initiative`;
        const currentPositionKey = `${redisKey}-currentPosition`;
        const objectArrOptions = objectFromArray(data.options[0].options);
        const name = objectArrOptions.name;
        const value = objectArrOptions.value;
        yield server_1.redisClient.hSet(redisKey, {
            [name]: value,
        });
        const listData = yield server_1.redisClient.hGetAll(redisKey);
        let currentPosition = yield server_1.redisClient.get(currentPositionKey);
        const content = getFormattedListDataWithCurrentPosition(listData, currentPosition);
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content,
            },
        });
    });
}
function handleRemoveResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const redisKey = `${data.id}-initiative`;
        const currentPositionKey = `${redisKey}-currentPosition`;
        const itemToRemoveKey = data.options[0].options[0].value;
        yield server_1.redisClient.hDel(redisKey, itemToRemoveKey);
        const listData = yield server_1.redisClient.hGetAll(redisKey);
        const currentPosition = yield server_1.redisClient.get(currentPositionKey);
        const content = getFormattedListDataWithCurrentPosition(listData, currentPosition);
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: content,
            },
        });
    });
}
function handleNextResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const redisKey = `${data.id}-initiative`;
        const currentPositionKey = `${redisKey}-currentPosition`;
        let currentPosition = yield server_1.redisClient.get(currentPositionKey);
        const listData = yield server_1.redisClient.hGetAll(redisKey);
        const nextPosition = getNextPosition(listData, currentPosition);
        yield server_1.redisClient.set(currentPositionKey, nextPosition);
        const content = getFormattedListDataWithCurrentPosition(listData, nextPosition);
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content,
            },
        });
    });
}
function handleClearResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const redisKey = `${data.id}-initiative`;
        const currentPositionKey = `${redisKey}-currentPosition`;
        yield server_1.redisClient.del(redisKey);
        yield server_1.redisClient.del(currentPositionKey);
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: `Initiative list is now empty`,
            },
        });
    });
}
function initiativeResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "There was an error",
                        },
                    });
            }
        }
        catch (err) {
            console.log(err);
            return res.send({
                type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: "There was an error",
                },
            });
        }
    });
}
exports.initiativeResponse = initiativeResponse;
