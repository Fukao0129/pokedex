import { POKEMON_TYPES } from "../constants/pokemonType";

interface TypeFilterProps {
  selectedType: string | null;
  onSelectType: (typeName: string) => void;
  onClearFilter: () => void;
  className?: string;
}

/** タイプでフィルタリングするボタン一覧
 * @param selectedType 選択中のタイプ英名
 * @param onSelectType タイプ選択時のハンドラ（引数はタイプ英名）
 * @param onClearFilter フィルター解除時のハンドラ
 * @param className 追加のクラス名
 */
export default function TypeFilter({
  selectedType,
  onSelectType,
  onClearFilter,
  className,
}: TypeFilterProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {Object.entries(POKEMON_TYPES).map(([typeName, type]) => (
        <button
          key={typeName}
          onClick={() => onSelectType(typeName)}
          className={`font-bold text-sm cursor-pointer px-2 py-1 rounded transition ${
            selectedType === typeName ? "ring-2 ring-offset-1 ring-gray-800" : ""
          }`}
          style={{
            backgroundColor: type.color.bg,
            color: type.color.text,
          }}
        >
          {type.name}
        </button>
      ))}

      {selectedType && (
        <button
          onClick={onClearFilter}
          className="font-bold text-sm cursor-pointer px-2 py-1 rounded transition bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          クリア
        </button>
      )}
    </div>
  );
}
