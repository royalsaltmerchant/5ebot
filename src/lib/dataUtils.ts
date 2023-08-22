export function returnArrayDataAsString(array: any, key: string | null) {
  if (typeof array === "string") return array;
  if (!Array.isArray(array)) return "Unknown";
  var string = "";
  if (key) {
    array.forEach((item) => {
      string += `${item[key]}, `;
    });
  } else {
    array.forEach((item) => {
      string += `${item}, `;
    });
  }
  return string;
}

export function getArmorClassInfo(equipmentData: any) {
  // there is some issue recognizing typeof equipment
  let string = "";
  for (const [key, value] of Object.entries(equipmentData.armor_class)) {
    string += `${key}: ${value}, `;
  }
  return string;
}

export function getContentsInfo(equipmentData: any) {
  // there is some issue recognizing typeof equipment
  let string = "";
  for (const item of equipmentData.contents) {
    string += `${item.item.name}: ${item.quantity}, `;
  }
  return string;
}

export function getAbilityBonuses(raceData: any) {
  // there is some issue recognizing typeof equipment
  let string = "";
  for (const item of raceData.ability_bonuses) {
    string += `${item.ability_score.name}: ${item.bonus}, `;
  }
  return string;
}

export function getChooseFromOptions(data: any) {
  // there is some issue recognizing typeof equipment
  let string = "";
  const fromData = data.from.options.map((option: any) => option.item.name);

  string += `Choose ${data.choose} from: ${fromData.join(", ")}`;

  return string;
}

export function getMonsterArmorClassInfo(monsterData: any) {
  // there is some issue recognizing typeof equipment
  let string = "";
  for (const item of monsterData.armor_class) {
    string += `${item.type}: ${item.value}, `;
  }
  return string;
}

export function getSensesInfo(monsterData: any) {
  // there is some issue recognizing typeof equipment
  let string = "";
  for (const [key, value] of Object.entries(monsterData.senses)) {
    string += `${key}: ${value}, `;
  }
  return string;
}
