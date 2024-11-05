import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="text-3xl font-light text-blue-500">つくかつ</div>

      <div className="flex items-center space-x-2">
        <Link href="/sign_in" className="bg-main-col text-white py-1 px-2 rounded">
          ログイン
        </Link>

        <Link href="/sign_up" className="border border-main-col py-1 px-2 rounded">
          会員登録
        </Link>

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
