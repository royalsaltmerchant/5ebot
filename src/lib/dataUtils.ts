export function returnArrayDataAsString(array: any, key: string | null) {
  if (typeof array === "string") return array;
  if (!Array.isArray(array)) return "Unknown";
  if (key) {
    return array.map((item: any) => item[key]).join(", ");
  } else {
    return array.map((item: any) => String(item)).join(", ");
  }
}

export function getArmorClassInfo(equipmentData: any) {
  return Object.entries(equipmentData.armor_class)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
}

export function getContentsInfo(equipmentData: any) {
  return equipmentData.contents
    .map((item: any) => `${item.item.name}: ${item.quantity}`)
    .join(", ");
}

export function getAbilityBonuses(raceData: any) {
  return raceData.ability_bonuses
    .map((item: any) => `${item.ability_score.name}: ${item.bonus}`)
    .join(", ");
}

export function getChooseFromOptions(data: any) {
  const fromData = data.from.options.map((option: any) => option.item.name);
  return `Choose ${data.choose} from: ${fromData.join(", ")}`;
}

export function getMonsterArmorClassInfo(monsterData: any) {
  return monsterData.armor_class
    .map((item: any) => `${item.type}: ${item.value}`)
    .join(", ");
}

export function getSensesInfo(monsterData: any) {
  return Object.entries(monsterData.senses)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
}
