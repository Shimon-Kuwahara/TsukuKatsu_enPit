import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type InternHeaderProps = {
  onFilterClick: () => void;
  features: string[];
};

const InternHeader: React.FC<InternHeaderProps> = ({ onFilterClick, features }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 150; // 左にスクロールする量
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 150; // 右にスクロールする量
    }
  };

  return (
    <div className="sticky top-14 z-50 bg-white shadow-md flex items-center px-4 py-2">
      {/* 左矢印ボタン (PCのみ表示) */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full mr-2"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* タグ一覧 */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 px-2 py-1 bg-gray-100 rounded-lg flex-grow overflow-x-auto scrollbar-hide"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="whitespace-nowrap bg-main-col-light text-white px-3 py-1 rounded-full text-sm"
          >
            {feature}
          </div>
        ))}
      </div>

      {/* 右矢印ボタン (PCのみ表示) */}
      <button
        onClick={scrollRight}
        className="hidden md:flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full ml-2"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* フィルターボタン */}
      <button
        onClick={onFilterClick}
        className="ml-4 px-4 py-2 bg-main-col-mid text-sm text-white rounded-lg flex items-center gap-2 md:gap-2 md:px-4"
      >
        <FontAwesomeIcon icon={faSliders} />
      </button>
    </div>
  );
};

export default InternHeader;
