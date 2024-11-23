"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import axios from "@/utils/axiosConfig";
import { Recruitment } from "@/types/recruitment";
import { Company } from "@/types/company";
import { User } from "@/types/user"; // 必要なら型を定義
import Cookies from "js-cookie";

interface RecruitmentWithCompany {
  recruitment: Recruitment;
  company: Company;
}

const ApplicationConfirmationPage = () => {
  const { id } = useParams(); // 求人ID
  const router = useRouter();
  const [data, setData] = useState<RecruitmentWithCompany | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchRecruitmentData = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}recruitments/${id}`
          );
          setData(response.data); // APIから取得したデータをstateにセット
        }
      } catch (error) {
        console.error("企業情報の取得に失敗しました:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}mypage`,
          {
            headers: {
              "access-token": Cookies.get("access-token"),
              client: Cookies.get("client"),
              uid: Cookies.get("uid"),
            },
          }
        );
        setUser(response.data); // APIから取得したデータをstateにセット
      } catch (error) {
        console.error("ユーザ情報の取得に失敗しました:", error);
      }
    };

    fetchUserData();
    fetchRecruitmentData();
  }, [id]);

  if (!data || !user) {
    return <p>Loading...</p>;
  }

  const { recruitment, company } = data;

  const handleConfirm = async () => {
    try {
      await axios.post(`/applications`, {
        recruitment_id: recruitment.id,
      });
      alert("応募が完了しました！");
      router.push("/applications"); // 適切なページに遷移
    } catch (error) {
      console.error("応募に失敗しました:", error);
      alert("応募に失敗しました。再度お試しください。");
    }
  };

  const handleBack = () => {
    router.back(); // 前のページに戻る
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-6 space-y-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-center">応募内容確認</h1>

      {/* 求人情報 */}
      <div className="p-4 bg-blue-50 border rounded">
        <h2 className="text-lg font-bold">{recruitment.title}</h2>
        <p className="text-sm text-gray-500">{company.name}</p>
        <div className="mt-2 flex gap-2">
          <span className="px-2 py-1 bg-gray-200 text-sm rounded">
            業界: {recruitment.industry}
          </span>
          <span className="px-2 py-1 bg-gray-200 text-sm rounded">
            職種: {recruitment.job_titles}
          </span>
        </div>
      </div>

      {/* 確認メッセージ */}
      <p className="text-sm text-gray-500 text-center">
        登録情報に間違いがないか、必ずご確認ください。
      </p>

      {/* プロフィール情報 */}
      <div className="p-4 bg-gray-50 border rounded space-y-2">
        <p>
          <strong>ID (メールアドレス):</strong> {user.email}
        </p>
        <p>
          <strong>姓:</strong> {user.last_name}
        </p>
        <p>
          <strong>名:</strong> {user.first_name}
        </p>
        <p>
          <strong>学校名:</strong> {user.university}
        </p>
        <p>
          <strong>卒業予定年:</strong> {user.graduation_year} 年
        </p>
        <p>
          <strong>卒業予定月:</strong> {user.graduation_month} 月
        </p>
      </div>

      {/* プロフィール編集リンク */}
      <div className="text-sm text-gray-700 bg-gray-100 border rounded p-4">
        <p>プロフィールが充実していると採用率が高くなります。</p>
        {/* TODO: リンク先を修正 */}
        <Link
          href="/hoge"
          className="text-blue-500 underline hover:text-blue-700"
        >
          プロフィールを編集する
        </Link>
      </div>

      {/* 自己PR */}
      <div className="p-4 bg-yellow-50 border rounded space-y-2">
        <h3 className="text-lg font-bold">自己PR</h3>
        <p>{user.achievement || "アピール内容は登録されていません。"}</p>
      </div>

      {/* ボタン */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          戻る
        </button>
        <button
          onClick={handleConfirm}
          className="bg-main-col text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          応募する
        </button>
      </div>
    </div>
  );
};

export default ApplicationConfirmationPage;
