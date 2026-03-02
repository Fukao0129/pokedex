import { useState } from "react";

interface BaseTabProps {
  label: string;
  content: React.ReactNode;
}

export default function BaseTab({ tabs }: { tabs: BaseTabProps[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <>
      {/* ヘッダー */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 cursor-pointer border-b-2 ${
              activeIndex === index
                ? "border-blue-500 text-blue-500 font-bold"
                : "border-transparent text-gray-500"
            } transition-all duration-200`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <div className="p-3 sm:p-4">{tabs[activeIndex].content}</div>
    </>
  );
}
