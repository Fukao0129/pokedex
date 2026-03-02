import type { PokemonStatsDisplay } from "../types/pokemon";

interface PokemonStatsProps {
  stats: PokemonStatsDisplay[];
}

export default function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <div>
      {stats.length > 0 ? (
        stats.map((stat) => (
          <div key={stat.name}>
            <p>
              {stat.name} : {stat.value}
            </p>
          </div>
        ))
      ) : (
        <p>???</p>
      )}
    </div>
  );
}
