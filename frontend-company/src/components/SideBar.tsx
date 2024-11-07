// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-main-col subpixel-antialiased text-white fixed">
      <div className="p-8 font-bold">つくかつ 企業様管理画面</div>
      <nav className="mt-4">
        <ul>
          <li className="p-6 hover:bg-purple-500">
            <Link href="/">作成した求人</Link>
          </li>
          <li className="p-6 hover:bg-purple-500">
            <Link href="/">求人を作成する</Link>
          </li>
          <li className="p-6 hover:bg-purple-500">
            <Link href="/">つくばの学生一覧</Link>
          </li>
          <li className="p-6 hover:bg-purple-500">
            <Link href="/">応募者一覧</Link>
          </li>
          <li className="p-6 hover:bg-purple-500">
            <Link href="/">チャット一覧</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
