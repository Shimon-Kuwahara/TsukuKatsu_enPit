import React, { useEffect } from "react";
import { InternEnums } from "../types/InternEnums";

type InternFilterProps = {
  isOpen: boolean;
  enums: InternEnums;
  tempFilters: { industry: number[]; occupation: number[]; department: number[]; grade: number[] };
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onApply: () => void;
  onClose: () => void;
};

const InternFilter: React.FC<InternFilterProps> = ({
  isOpen,
  enums,
  tempFilters,
  handleCheckboxChange,
  onApply,
  onClose,
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
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto"
        style={{
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "rgba(180, 180, 180, 0.7) transparent", // For Firefox
        }}
      >
        {/* モーダルヘッダー */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">フィルター</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-3xl focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* フィルターセクションを動的に生成 */}
        {Object.keys(enums).map((filterKey) => {
          const key = filterKey as keyof InternEnums;
          const sectionTitle =
            key === "industry" ? "業界" : key === "occupation" ? "職種" : key === "department" ? "所属" : "学年";

          return (
            <div key={key} className="mb-4">
              <h3 className="font-bold p-2 pl-4 bg-main-col-mid text-white rounded">{sectionTitle}</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {enums[key].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      name={key}
                      value={option.value}
                      checked={tempFilters[key].includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded text-main-col-mid"
                    />
                    <span className="ml-3 text-sm">{option.key}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}

        {/* モーダルフッター */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded focus:outline-none"
          >
            キャンセル
          </button>
          <button
            onClick={onApply}
            className="px-4 py-2 bg-main-col-mid text-white rounded focus:outline-none"
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
