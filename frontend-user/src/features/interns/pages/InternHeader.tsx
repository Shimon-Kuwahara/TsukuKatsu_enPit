import React, { useRef, useLayoutEffect } from "react";
import { Sliders, ChevronLeft, ChevronRight, Search } from "lucide-react";

type InternHeaderProps = {
  onFilterClick: () => void;
  features: { id: number; name: string }[];
  selectedFeature: number | null;
  onFeatureSelect: (featureId: number | null) => void; // null を許容
};

const InternHeader: React.FC<InternHeaderProps> = ({
  onFilterClick,
  features,
  selectedFeature,
  onFeatureSelect,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedButtonRef = useRef<HTMLButtonElement>(null); // 選択中のボタンを参照

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 150;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 150;
    }
  };

  useLayoutEffect(() => {
    if (scrollContainerRef.current && selectedButtonRef.current) {
      const container = scrollContainerRef.current;
      const button = selectedButtonRef.current;

      // ボタンの中心をスクロールコンテナの中心にする
      const containerWidth = container.offsetWidth;
      const buttonOffsetLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;

      const scrollTo = buttonOffsetLeft + buttonWidth / 2 - containerWidth / 2;
      container.scrollTo({
        left: scrollTo,
        behavior: "smooth", // スムーズスクロール
      });
    }
  }, [selectedFeature]);

  return (
    <div
      className="sticky z-50 bg-white shadow-md flex items-center px-4 py-2"
      style={{ top: '56px' }} // 上部のヘッダーの高さを指定
    >
      {/* 左矢印ボタン */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full mr-2"
      >
        <ChevronLeft size={20} />
      </button>
  
      {/* タグ一覧 */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 px-2 py-1 bg-white border border-gray-300 rounded-lg flex-grow overflow-x-auto scrollbar-hide"
      >
        {/* "すべて" タグ */}
        <button
          ref={selectedFeature === null ? selectedButtonRef : null} // "すべて" が選択中なら参照
          onClick={() => onFeatureSelect(null)} // null にリセット
          className={`relative px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap border transition-all ${
            selectedFeature === null
              ? "bg-white text-main-col-mid border-purple-500 font-bold"
              : "bg-gray-200 text-gray-600 border-transparent hover:border-gray-400"
          }`}
        >
          <span className="inline-flex items-center mt-1 gap-1">
            <Search size={16} /> すべて
          </span>
        </button>
  
        {/* 動的に生成されるタグ */}
        {features.map((feature) => (
          <button
            key={feature.id}
            ref={selectedFeature === feature.id ? selectedButtonRef : null} // 選択中のボタンを参照
            onClick={() => onFeatureSelect(feature.id)}
            className={`relative px-4 text-xs font-bold rounded-full whitespace-nowrap border transition-all ${
              selectedFeature === feature.id
                ? "bg-white text-main-col-mid border-purple-500 font-bold"
                : "bg-gray-200 text-gray-600 border-transparent hover:border-gray-400"
            }`}
          >
            <span className="inline-flex items-center mt-1 gap-1">
              <Search size={16} /> {feature.name}
            </span>
          </button>
        ))}
      </div>
  
      {/* 右矢印ボタン */}
      <button
        onClick={scrollRight}
        className="hidden md:flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full ml-2"
      >
        <ChevronRight size={20} />
      </button>
  
      {/* フィルターボタン */}
      <button
        onClick={onFilterClick}
        className="ml-4 px-4 py-2 bg-main-col-mid text-white rounded-lg flex items-center gap-2"
      >
        <Sliders size={20} />
      </button>
    </div>
  );  
};

export default InternHeader;
