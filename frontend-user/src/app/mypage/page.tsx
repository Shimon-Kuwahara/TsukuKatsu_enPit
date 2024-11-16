"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const MyPage = () => {
  const [user, setUser] = useState<any>(null);
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">マイページ</h1>
      <p className="text-lg">ようこそ、{user.last_name} {user.first_name} さん！</p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">アカウント情報</h2>
        <p>メールアドレス: {user.email}</p>
        <p>性別: {user.gender}</p>
        <p>大学: {user.university}</p>
        {/* 必要な情報を追加 */}
      </div>
    </div>
  );
};

export default MyPage;
