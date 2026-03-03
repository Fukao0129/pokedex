import type { PokemonStatsDisplay } from "../types/pokemon";
import BarChart from "./BarChart";
import { formatStatsLabel } from "../utils/formatStats";

interface PokemonStatsProps {
  stats: PokemonStatsDisplay[];
}

export default function PokemonStats({ stats }: PokemonStatsProps) {
  // 合計種族値
  const total = stats.reduce((sum, stat) => sum + stat.value, 0);

  return (
    <>
      {stats.length > 0 ? (
        <BarChart
          data={{
            labels: stats.map((stat) => formatStatsLabel(stat.name)),
            datasets: [
              {
                data: stats.map((stat) => stat.value),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
              },
            ],
          }}
          options={{
            animation: {
              duration: 0,
            },
            plugins: {
              title: {
                display: true,
                text: `合計 : ${total}`,
                position: "bottom",
                color: "black",
                font: {
                  weight: "bold",
                  size: 16,
                },
              },
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
              datalabels: {
                color: "black",
                anchor: "end",
                align: "bottom",
                font: {
                  weight: "bold",
                },
              },
            },
          }}
        />
      ) : (
        <p>???</p>
      )}
    </>
  );
}
