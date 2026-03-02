import { getJapaneseTypeName, getTypeColor } from "../utils/formatType";

export default function TypeBadge({ typeName }: { typeName: string }) {
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
