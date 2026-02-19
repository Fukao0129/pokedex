import { useState, useEffect } from "react";
import type { PokemonAbilityDisplay } from "../types/pokemon";
import { getAbility } from "../api/pokeapi";
import { formatAbility } from "../utils/formatAbility";

/**
 * 特性の詳細を取得するカスタムフック
 * @param abilityNames 特性の英語名の配列
 * @returns 特性の詳細情報の配列
 */
export const usePokemonAbilities = (abilityNames: string[]) => {
  const [abilities, setAbilities] = useState<PokemonAbilityDisplay[]>([]);

  /** 特性の詳細を取得する */
  useEffect(() => {
    if (!abilityNames || abilityNames.length === 0) return;

    const fetchAbilities = async () => {
      const abilities = await Promise.all(
        abilityNames.map(async (abilityName) => {
          return await getAbility(abilityName);
        }),
      );
      setAbilities(abilities.map(formatAbility));
    };

    fetchAbilities();
  }, [abilityNames]);

  return { abilities };
};
