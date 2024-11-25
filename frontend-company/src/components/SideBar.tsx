import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-main-col subpixel-antialiased text-white fixed">
      <div className="p-8 font-bold">つくかつ 企業様管理画面</div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link href="/recruitments" className="block w-full h-full p-6 hover:bg-purple-500">
              作成した求人
            </Link>
          </li>
          <li>
            <Link href="/create" className="block w-full h-full p-6 hover:bg-purple-500">
              求人を作成する
            </Link>
          </li>
          <li>
            <Link href="/students" className="block w-full h-full p-6 hover:bg-purple-500">
              つくばの学生一覧
            </Link>
          </li>
          <li>
            <Link href="/applications" className="block w-full h-full p-6 hover:bg-purple-500">
              応募者一覧
            </Link>
          </li>
          <li>
            <Link href="/chats" className="block w-full h-full p-6 hover:bg-purple-500">
              チャット一覧
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
