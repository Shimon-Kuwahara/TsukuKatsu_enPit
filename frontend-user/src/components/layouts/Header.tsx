import React from "react";
import AuthButton from "./AuthButton";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="text-3xl font-light text-blue-500">つくかつ</div>
      <div className="flex items-center space-x-2">
        <AuthButton />
        <button className="flex flex-col items-center justify-center">
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black"></div>
          <span className="text-xs mt-1">メニュー</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
