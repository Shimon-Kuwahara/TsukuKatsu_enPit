import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signout from "../../utils/signout";

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signout();
    toggleMenu();
    router.push("/sign_in"); // ログインページにリダイレクト
  };

  if (!isMenuOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-30">
      <ul className="flex flex-col">
        <li>
          <Link href="/mypage">
            <div className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>
                マイページ
            </div>
          </Link>
          <Link href="/chat_rooms">
            <div className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>
                企業とのチャット
            </div>
          </Link>
        </li>
        <li>
          <button
            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
            onClick={handleLogout}
          >
            ログアウト
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
