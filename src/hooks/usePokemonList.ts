import { useState, useEffect } from "react";
import { fetchPokemonData, fetchPokemonDataByType } from "../api/pokeapi";
import type { PokemonDisplay } from "../types/pokemon";
import { LIMIT } from "../constants";

const initialList: null[] = Array(LIMIT).fill(null); // 読み込み中のダミー表示用

/**
 * ポケモン一覧を取得するカスタムフック
 * タイプ未選択時はページネーション、選択時はそのタイプを全件取得する
 * @param offset 取得開始位置（ページネーション用）
 * @param selectedType 選択中のタイプ英名（未選択時は null）
 * @returns ポケモン一覧・総件数・読み込み状態
 */
export const usePokemonList = (offset: number, selectedType: string | null) => {
  const [pokemonList, setPokemonList] = useState<(PokemonDisplay | null)[]>(
    initialList,
  );
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const loadPokemon = async () => {
      setPokemonList(initialList);
      const { pokemonData, count } = selectedType
        ? await fetchPokemonDataByType(selectedType)
        : await fetchPokemonData(LIMIT, offset);
      setPokemonList(pokemonData);
      setTotalCount(count);
    };
    loadPokemon();
  }, [offset, selectedType]);

  /** 読み込み中かどうか */
  const isLoading = pokemonList.some((pokemon) => pokemon === null);

  return { pokemonList, totalCount, isLoading } as const;
};
