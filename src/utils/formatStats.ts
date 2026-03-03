/** 各能力値の表示名を取得する */
export const formatStatsLabel = (stat: string): string => {
  switch (stat) {
    case "hp":
      return "HP";
    case "attack":
      return "攻撃";
    case "defense":
      return "防御";
    case "special-attack":
      return "特攻";
    case "special-defense":
      return "特防";
    case "speed":
      return "素早さ";
    default:
      return stat;
  }
};
