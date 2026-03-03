import { useState } from "react";
import BaseModal from "./BaseModal";
import type { PokemonDisplay } from "../types/pokemon";
import {
  formatHeightToMeters,
  formatWeightToKilograms,
} from "../utils/formatBodySize";
import TypeBadge from "./TypeBadge";
import BaseImage from "./BaseImage";
import PokemonDescription from "./PokemonDescription";
import PokemonAbilities from "./PokemonAbilities";
import PokemonStats from "./PokemonStats";
import BaseTab from "./BaseTab";
import { usePokemonAbilities } from "../hooks/usePokemonAbilities";

interface PokemonModalProps {
  pokemonData: PokemonDisplay;
  isOpen: boolean;
  onClose: () => void;
}

export default function PokemonModal({
  pokemonData,
  isOpen,
  onClose,
}: PokemonModalProps) {
  const { abilities } = usePokemonAbilities(pokemonData.abilities);
  const [isShiny, setIsShiny] = useState(false); // 色違い表示フラグ

  // タブ
  const tabs = [
    {
      label: "能力値",
      content: <PokemonStats stats={pokemonData.stats} />,
    },
    {
      label: "特性",
      content: <PokemonAbilities abilities={abilities} />,
    },
  ];

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="font-bold text-2xl">{pokemonData.name}</h2>
      <p> {pokemonData.genus}</p>

      {/** 画像 */}
      <BaseImage
        src={isShiny ? pokemonData.shinyImage : pokemonData.image}
        alt={pokemonData.name}
        className="m-auto"
        width={250}
        height={250}
        onClick={() => setIsShiny(!isShiny)}
      />

      <div className="flex flex-col gap-3 mt-2 mb-4">
        {/** タイプ */}
        <div className="flex gap-2">
          {pokemonData.types.map((type) => (
            <TypeBadge key={type} typeName={type} />
          ))}
        </div>

        {/** 高さと重さ */}
        <p>
          高さ: {formatHeightToMeters(pokemonData.height)} / 重さ:{" "}
          {formatWeightToKilograms(pokemonData.weight)}
        </p>

        {/** 説明 */}
        <PokemonDescription description={pokemonData.description} />
      </div>

      {/** タブ */}
      <BaseTab tabs={tabs} />
    </BaseModal>
  );
}
