/** ポケモンのタイプ情報 */
export interface PokemonType {
  /** PokeAPIのタイプID */
  id: string;
  /** 日本語名 */
  name: string;
  /** タイプに応じた色（背景色・文字色） */
  color: { bg: string; text: string };
}

/** タイプの英語名をキーとしたタイプ情報のマッピング */
export const POKEMON_TYPES: Record<string, PokemonType> = {
  normal: { id: "1", name: "ノーマル", color: { bg: "#A8A878", text: "#FFFFFF" } },
  fighting: { id: "2", name: "かくとう", color: { bg: "#C03028", text: "#FFFFFF" } },
  flying: { id: "3", name: "ひこう", color: { bg: "#A890F0", text: "#FFFFFF" } },
  poison: { id: "4", name: "どく", color: { bg: "#A040A0", text: "#FFFFFF" } },
  ground: { id: "5", name: "じめん", color: { bg: "#E0C068", text: "#000000" } },
  rock: { id: "6", name: "いわ", color: { bg: "#b87238", text: "#FFFFFF" } },
  bug: { id: "7", name: "むし", color: { bg: "#A8B820", text: "#FFFFFF" } },
  ghost: { id: "8", name: "ゴースト", color: { bg: "#705898", text: "#FFFFFF" } },
  steel: { id: "9", name: "はがね", color: { bg: "#cbcbdd", text: "#000000" } },
  fire: { id: "10", name: "ほのお", color: { bg: "#f05630", text: "#FFFFFF" } },
  water: { id: "11", name: "みず", color: { bg: "#6890F0", text: "#FFFFFF" } },
  grass: { id: "12", name: "くさ", color: { bg: "#78C850", text: "#FFFFFF" } },
  electric: { id: "13", name: "でんき", color: { bg: "#F8D030", text: "#000000" } },
  psychic: { id: "14", name: "エスパー", color: { bg: "#F85888", text: "#FFFFFF" } },
  ice: { id: "15", name: "こおり", color: { bg: "#98D8D8", text: "#000000" } },
  dragon: { id: "16", name: "ドラゴン", color: { bg: "#7038F8", text: "#FFFFFF" } },
  dark: { id: "17", name: "あく", color: { bg: "#352b25", text: "#FFFFFF" } },
  fairy: { id: "18", name: "フェアリー", color: { bg: "#EE99AC", text: "#000000" } },
};
