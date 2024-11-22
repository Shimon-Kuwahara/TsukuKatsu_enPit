"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { User } from "../../types/user";

const MyPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}mypage`, {
          withCredentials: true, // クッキーを含むリクエスト
          headers: {
            "access-token": Cookies.get("access-token"),
            "client": Cookies.get("client"),
            "uid": Cookies.get("uid"),
          },
        });
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.error("ユーザー情報の取得に失敗しました:", error);
        router.push("/sign_in"); // 未認証の場合ログインページにリダイレクト
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (!user) {
    return <div>ユーザー情報が取得できません。</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* カード全体 */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        {/* ヘッダー */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-bold text-gray-700">基本情報</h2>
          {/* 編集ボタン */}
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.127 19.586a4.5 4.5 0 01-1.591 1.05l-3.017 1.206 1.206-3.017a4.5 4.5 0 011.05-1.591L16.862 3.487z"
              />
            </svg>
          </button>
        </div>

        {/* 名前 */}
        <div className="text-center mb-6">
          <p className="text-xl font-bold text-gray-700">
            {user.last_name} {user.first_name}
          </p>
          <p className="text-sm text-gray-500">
            {user.last_name_kana} {user.first_name_kana}
          </p>
        </div>

        {/* 大学名と卒業年 */}
        <div className="space-y-4">
          <div className="flex items-center border-b pb-2">
            <span className="text-sm text-gray-500 pr-16">大学名</span>
            <span className="text-sm text-gray-700">{user.university}</span>
          </div>
          <div className="flex items-center border-b pb-2">
            <span className="text-sm text-gray-500 pr-12">卒業年月</span>
            <span className="text-sm text-gray-700">{user.graduation_year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
