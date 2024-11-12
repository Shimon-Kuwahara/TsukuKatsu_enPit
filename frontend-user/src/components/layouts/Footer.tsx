import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-10 border-t">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-4">学生向け</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors">サービス紹介</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors">特徴</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors">掲載企業一覧</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">企業様向け</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors">求人を掲載する</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">サポート</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors">利用規約</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
