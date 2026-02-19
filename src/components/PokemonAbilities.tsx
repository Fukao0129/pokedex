import type { PokemonAbilityDisplay } from "../types/pokemon";

interface PokemonAbilitiesProps {
  abilities: PokemonAbilityDisplay[];
}

export default function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
  return (
    <div>
      <p className="font-bold border-b border-gray-300">特性</p>
      {abilities.length > 0 ? (
        abilities.map((ability) => (
          <div key={ability.name}>
            <p className="font-bold">{ability.name}</p>
            <p>{ability.flavorText}</p>
          </div>
        ))
      ) : (
        <p>???</p>
      )}
    </div>
  );
}
