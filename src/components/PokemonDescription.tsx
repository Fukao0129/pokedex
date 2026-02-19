export default function PokemonDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="border border-gray-300 rounded p-2 bg-gray-100">
      <p className="text-sm">{description}</p>
    </div>
  );
}
