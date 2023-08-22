

export function returnArrayDataAsString(array: any, key: string | null) {
  if (typeof array === "string") return array;
  if (!Array.isArray(array)) return "Unknown";
  var string = "";
  if (key) {
    array.forEach((item) => {
      string += `${item[key]}\n`;
    });
  } else {
    array.forEach((item) => {
      string += `${item}\n`;
    });
  }
  return string;
}

export function getArmorClassInfo(equipmentData: any) { // there is some issue recognizing typeof equipment
  let string = "";
  for (const [key, value] of Object.entries(
    equipmentData.armor_class
  )) {
    string += `${key}: ${value}, `;
  }
  return string;
}

export function getContentsInfo(equipmentData: any) { // there is some issue recognizing typeof equipment
  let string = "";
  for (const item of equipmentData.contents) {
    string += `${item.item.name}: ${item.quantity}\n`;
  }
  return string;
}

export function getAbilityBonuses(raceData: any) { // there is some issue recognizing typeof equipment
  let string = "";
  for (const item of raceData.ability_bonuses) {
    string += `${item.ability_score.name}: ${item.bonus}\n`;
  }
  return string;
}