import { useContext } from "react";
import { TabContext } from "@/components/tab/context/TabContext";

export default function Menu() {
  const { tabIndex, setTabIndex } = useContext(TabContext);
  return (
    <div className="flex">
      <div
        onClick={() => setTabIndex(0)}
        className={`flex-1 text-center px-2 ${
          tabIndex === 0 ? "font-bold underline" : ""
        }`}
      >
        求人
      </div>
      <div
        onClick={() => setTabIndex(1)}
        className={`flex-1 text-center px-2 ${
          tabIndex === 1 ? "font-bold underline" : ""
        }`}
      >
        口コミ
      </div>
      <div
        onClick={() => setTabIndex(2)}
        className={`flex-1 text-center px-2 ${
          tabIndex === 2 ? "font-bold underline" : ""
        }`}
      >
        ブログ
      </div>
    </div>
  );
}
