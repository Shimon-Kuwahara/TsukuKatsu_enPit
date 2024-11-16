import React from "react";
import Link from "next/link";

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
      <ul className="flex flex-col">
        <li>
          <Link href="/">
            <div className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>
                プロフィール編集
            </div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>
                ログアウト
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
