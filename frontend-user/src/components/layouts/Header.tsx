"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AuthButton from "./AuthButton";
import Menu from "./Menu";
import { doesCookieExist } from "../../utils/cookieUtils";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUidPresent, setIsUidPresent] = useState(false);

  useEffect(() => {
    const handleUidChange = () => {
      setIsUidPresent(doesCookieExist("uid"));
    };

    handleUidChange();

    // cookieが更新されたタイミングでhandleUidChangeを実行するイベントリスナーを登録
    window.addEventListener("cookieUpdated", handleUidChange);

    return () => {
      window.removeEventListener("cookieUpdated", handleUidChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-300 z-50">
      <Link className="text-3xl font-light text-blue-700" href="/">
        つくかつ
      </Link>
      <div className="flex items-center space-x-2">
        {!isUidPresent && <AuthButton />}
        {isUidPresent && (
          <div className="relative">
            <button
              className="flex flex-col items-center justify-center focus:outline-none"
              onClick={toggleMenu}
            >
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black"></div>
              <span className="text-xs mt-1">メニュー</span>
            </button>
            <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
