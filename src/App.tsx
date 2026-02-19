import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import Pagination from "./components/Pagination";
import { fetchPokemonData } from "./api/pokeapi";
import type { PokemonDisplay } from "./types/pokemon";
import { usePaginationOffset } from "./hooks/usePaginationOffset";
import { LIMIT } from "./constants";

export default function App() {
  const [offset, setOffset] = usePaginationOffset(LIMIT); // 取得開始位置
  const [totalCount, setTotalCount] = useState(0); // 総件数
  const [pokemonList, setPokemonList] = useState<(PokemonDisplay | null)[]>([]); // ポケモン一覧
  const [isPokemonModalOpen, openPokemonModal] = useState(false); // モーダル制御
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDisplay | null>(
    null,
  ); // 選択中のポケモン

  /** ポケモン一覧を取得 */
  useEffect(() => {
    const loadPokemon = async () => {
      const initialList = Array(LIMIT).fill(null); // 初期表示時のダミー用
      setPokemonList(initialList);

      const data = await fetchPokemonData(LIMIT, offset);
      setPokemonList(data.pokemonData);
      setTotalCount(data.count);
    };
    loadPokemon();
  }, [offset]);

  /** 詳細モーダルを開く */
  const onClickPokemon = (pokemon: PokemonDisplay) => {
    setSelectedPokemon(pokemon);
    openPokemonModal(true);
  };

  /** 詳細モーダルを閉じる */
  const closeModal = () => {
    openPokemonModal(false);
    setSelectedPokemon(null);
  };

  /** ページネーション操作 */
  const onPrevPage = () => {
    const newOffset = Math.max(0, offset - LIMIT);
    setOffset(newOffset);
  };
  const onNextPage = () => {
    const newOffset = offset + LIMIT;
    setOffset(newOffset);
  };
  const onChangePage = (page: number) => {
    setOffset((page - 1) * LIMIT);
  };

  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Pokédex</h1>

        {/** ポケモン一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {pokemonList.map((pokemon, index) => (
            <PokemonCard
              pokemonData={pokemon}
              key={index}
              onClickCard={() => pokemon && onClickPokemon(pokemon)}
            />
          ))}
        </div>

        {/** ページネーション */}
        <Pagination
          offset={offset}
          limit={LIMIT}
          total={totalCount}
          onNext={onNextPage}
          onPrev={onPrevPage}
          onPageChange={onChangePage}
          loading={pokemonList.some((p) => p === null)}
        />
      </div>

      {/** モーダル */}
      {selectedPokemon && (
        <PokemonModal
          isOpen={isPokemonModalOpen}
          pokemonData={selectedPokemon}
          onClose={closeModal}
        />
      )}
    </>
  );
}
