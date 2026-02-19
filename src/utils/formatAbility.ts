import type {
  PokemonAbilityDetail,
  PokemonAbilityDisplay,
} from "../types/pokemon";
import { getJapanese } from "./index";

/** 特性を名前とフレーバーテキストにフォーマットする
 * @param ability 特性の詳細情報
 * @returns 日本語の特性名とフレーバーテキスト
 */
export const formatAbility = (
  ability: PokemonAbilityDetail,
): PokemonAbilityDisplay => {
  // 日本語の特性名を取得
  const name = getJapanese(ability.names, "name") || "不明な特性";

  // 日本語のフレーバーテキストを取得
  const flavorTextEntry = getJapanese(
    ability.flavor_text_entries,
    "flavor_text",
  );

  // フレーバーテキストの改行をスペースに置換
  const flavorText = flavorTextEntry
    ? flavorTextEntry.replace(/\n/g, " ")
    : "説明がありません。";

  return { name, flavorText };
};
