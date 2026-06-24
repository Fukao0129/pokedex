import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import Pagination from "./components/Pagination";
import TypeFilter from "./components/TypeFilter";
import type { PokemonDisplay } from "./types/pokemon";
import { usePaginationOffset } from "./hooks/usePaginationOffset";
import { useTypeFilter } from "./hooks/useTypeFilter";
import { usePokemonList } from "./hooks/usePokemonList";
import { LIMIT } from "./constants";

export default function App() {
  const { offset, goToPrev, goToNext, goToPage } = usePaginationOffset(LIMIT); // ページネーション制御
  const { selectedType, selectType, clearType } = useTypeFilter(); // タイプフィルター制御
  const { pokemonList, totalCount, isLoading } = usePokemonList(
    offset,
    selectedType,
  ); // ポケモン一覧取得

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDisplay | null>(
    null,
  ); // 選択中のポケモン

  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Pokédex</h1>

        {/** タイプフィルター */}
        <TypeFilter
          selectedType={selectedType}
          onSelectType={selectType}
          onClearFilter={clearType}
          className="mb-4"
        />

        {/** ポケモン一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {pokemonList.map((pokemon, index) => (
            <PokemonCard
              pokemonData={pokemon}
              key={index}
              onClickCard={() => pokemon && setSelectedPokemon(pokemon)}
            />
          ))}
        </div>

        {/** ページネーション */}
        {!selectedType && (
          <Pagination
            offset={offset}
            limit={LIMIT}
            total={totalCount}
            onNext={goToNext}
            onPrev={goToPrev}
            onPageChange={goToPage}
            loading={isLoading}
          />
        )}
      </div>

      {/** モーダル */}
      {selectedPokemon && (
        <PokemonModal
          isOpen={true}
          pokemonData={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </>
  );
}
