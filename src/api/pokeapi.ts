import type {
  PokemonListResult,
  PokemonDetail,
  PokemonSpecies,
  PokemonDisplay,
  PokemonAbilityDetail,
} from "../types/pokemon";
import { formatPokemonDisplay } from "../utils/formatPokemonDisplay";
import { callApi } from "../utils/callApi";
import { BASE_URL } from "../constants";

/** ポケモンの表示用データを取得
 * @param limit 取得件数
 * @param offset 取得開始位置
 * @returns ポケモン表示用データの配列と総数
 */
export const fetchPokemonData = async (
  limit: number,
  offset: number,
): Promise<{ pokemonData: PokemonDisplay[]; count: number }> => {
  try {
    // 一覧APIで各ポケモンの詳細APIエンドポイントを取得する
    const listData = await callApi<{
      results: PokemonListResult[];
      count: number;
    }>(`${BASE_URL}/pokemon`, { params: { offset, limit } });

    const pokemonData = listData.results.map(async (item) => {
      // 各ポケモンの詳細APIを実行
      const detail = await callApi<PokemonDetail>(item.url);

      // 詳細APIで取得したデータに種族情報APIエンドポイントがあるので実行
      const species = await callApi<PokemonSpecies>(detail.species.url);

      // フォーマットして返却
      return formatPokemonDisplay(detail, species);
    });

    return {
      pokemonData: await Promise.all(pokemonData),
      count: listData.count,
    };
  } catch (error) {
    console.error("Error fetching pokemon data:", error);
    return { pokemonData: [], count: 0 };
  }
};

/** 特性の詳細を取得
 * @param name 特性名
 */
export const getAbility = async (name: string) => {
  const response = await callApi<PokemonAbilityDetail>(
    `${BASE_URL}/ability/${name}`,
  );
  return response;
};
