import type { PokemonDisplay } from "../types/pokemon";
import BaseImage from "./BaseImage";

interface PokemonCardProps {
  pokemonData: PokemonDisplay | null;
  onClickCard?: () => void;
}

export default function PokemonCard({
  pokemonData,
  onClickCard,
}: PokemonCardProps) {
  return (
    <div
      className="border border-gray-200 rounded px-2 flex flex-col justify-center items-center cursor-pointer shadow-sm hover:bg-gray-50 transition min-h-[11rem]"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClickCard?.();
        }
      }}
      onClick={onClickCard}
    >
      {!pokemonData ? (
        <div>データを取得中...</div>
      ) : (
        <>
          <p>No.{pokemonData.id}</p>
          <h2 className="font-bold">{pokemonData.name}</h2>

          <BaseImage
            src={pokemonData.image}
            alt={pokemonData.name}
            className="max-w-[5rem] mt-2"
          />
        </>
      )}
    </div>
  );
}
