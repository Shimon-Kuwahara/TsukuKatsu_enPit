import React, { useEffect } from "react";
import { InternEnums } from "../types/InternEnums";

type InternFilterProps = {
  isOpen: boolean;
  enums: InternEnums;
  tempFilters: { industry: number[]; occupation: number[]; department: number[]; grade: number[] };
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onApply: () => void;
  onClose: () => void;
  onReset: () => void;
};

const InternFilter: React.FC<InternFilterProps> = ({
  isOpen,
  enums,
  tempFilters,
  handleCheckboxChange,
  onApply,
  onClose,
  onReset,
}) => {

    // モーダルが開いている間、背景のスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white p-2 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col"
        style={{
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "rgba(180, 180, 180, 0.7) transparent", // For Firefox
        }}
      >
        {/* モーダルヘッダー */}
        <div
          className="flex justify-between items-center mb-4 bg-white sticky top-0 z-10 p-4 border-b border-gray-300"
        >
          <h2 className="font-bold">フィルター</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-3xl focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* フィルターセクションを動的に生成 */}
        <div className="flex-grow overflow-y-auto px-4">
          {Object.keys(enums).map((filterKey) => {
            const key = filterKey as keyof InternEnums;
            const sectionTitle =
              key === "industry" ? "業界" : key === "occupation" ? "職種" : key === "department" ? "所属" : "学年";

            return (
              <div key={key} className="mb-4">
                <h3 className="font-bold p-2 pl-4 bg-main-col-mid text-white rounded">{sectionTitle}</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {enums[key].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center min-h-[30px]" // 高さを固定
                    >
                      <input
                        type="checkbox"
                        name={key}
                        value={option.value}
                        checked={tempFilters[key].includes(option.value)}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 rounded text-main-col-mid flex-shrink-0"
                      />
                      <span className="ml-3 text-sm leading-normal">{option.key}</span>
                    </label>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* モーダルフッター */}
        <div
          className="flex justify-between items-center bg-white p-4 border-t border-gray-300 sticky bottom-0 z-10"
        >
          <button
            onClick={onReset}
            className="text-sm px-4 py-2 bg-gray-300 text-gray-700 rounded"
          >
            リセット
          </button>

          <button
            onClick={onApply}
            className="text-sm px-4 py-2 bg-main-col text-white rounded"
          >
            適用
          </button>
        </div>
      </div>

      {/* Custom scrollbar for modern browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(180, 180, 180, 0.7);
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(140, 140, 140, 0.7);
        }
      `}</style>
    </div>
  );
};

export default InternFilter;
