import { POKEMON_TYPES } from "../constants/pokemonType";

/**
 * タイプ名を日本語に変換する
 * @param type - タイプの英語名
 * @returns - 日本語のタイプ名
 */
export const getJapaneseTypeName = (type: string): string => {
  return POKEMON_TYPES[type.toLowerCase()]?.name || type;
};

/** 各タイプに応じた色を返す
 * @param type - タイプの英語名
 * @returns - 背景色と文字色
 */
export const getTypeColor = (type: string): { bg: string; text: string } => {
  return POKEMON_TYPES[type.toLowerCase()]?.color || { bg: "#E5E7EB", text: "#374151" };
};
