import type { PokemonAbilityDisplay } from "../types/pokemon";

interface PokemonAbilitiesProps {
  abilities: PokemonAbilityDisplay[];
}

export default function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
  return (
    <div>
      {abilities.length > 0 ? (
        abilities.map((ability) => (
          <p key={ability.name} className="mb-2">
            <span className="font-bold">{ability.name}</span>
            <span className="text-sm"> : {ability.flavorText}</span>
          </p>
        ))
      ) : (
        <p>???</p>
      )}
    </div>
  );
}
