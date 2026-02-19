import BaseModal from "./BaseModal";
import type { PokemonDisplay } from "../types/pokemon";
import {
  convertHeightToMeters,
  convertWeightToKilograms,
} from "../utils/convertBodySize";
import TypeBadge from "./TypeBadge";
import BaseImage from "./BaseImage";
import PokemonDescription from "./PokemonDescription";
import PokemonAbilities from "./PokemonAbilities";
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

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="font-bold text-2xl">{pokemonData.name}</h2>
      <p> {pokemonData.genus}</p>

      {/** 画像 */}
      <BaseImage
        src={pokemonData.image}
        alt={pokemonData.name}
        className="max-w-xs m-auto"
      />

      <div className="flex flex-col gap-3 mb-4">
        {/** タイプ */}
        <p className="flex gap-2">
          {pokemonData.types.map((type) => (
            <TypeBadge key={type} typeName={type} />
          ))}
        </p>

        {/** 高さと重さ */}
        <p>
          高さ: {convertHeightToMeters(pokemonData.height)} / 重さ:{" "}
          {convertWeightToKilograms(pokemonData.weight)}
        </p>

        {/** 説明 */}
        <PokemonDescription description={pokemonData.description} />
      </div>

      {/** 特性 */}
      <PokemonAbilities abilities={abilities} />
    </BaseModal>
  );
}
