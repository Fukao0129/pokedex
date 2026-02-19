import { TYPE_TRANSLATIONS, TYPE_COLORS } from "../constants/pokemonType";

export default function PokemonModal({ typeName }: { typeName: string }) {
  /**
   * タイプ名を日本語に変換する
   * @param type - タイプの英語名
   * @returns - 日本語のタイプ名
   */
  const getJapaneseTypeName = (type: string): string => {
    return TYPE_TRANSLATIONS[type.toLowerCase()] || type;
  };

  /** 各タイプに応じた色を返す
   * @param type - タイプの英語名
   * @returns - 背景色と文字色
   */
  const getTypeColor = (type: string): { bg: string; text: string } => {
    return (
      TYPE_COLORS[type.toLowerCase()] || { bg: "#E5E7EB", text: "#374151" }
    );
  };

  return (
    <span
      className="py-1 px-2 rounded-full font-bold text-xs"
      style={{
        backgroundColor: getTypeColor(typeName).bg,
        color: getTypeColor(typeName).text,
      }}
    >
      {getJapaneseTypeName(typeName)}
    </span>
  );
}
