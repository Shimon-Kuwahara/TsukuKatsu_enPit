"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const NewReviewPage = () => {
  const { id } = useParams();
  const router = useRouter();

  // フォームの入力状態を管理（すべて文字列）
  const [formData, setFormData] = useState({
    job_description: "",
    joining_reason_gap: "",
    work_life_balance: "",
    work_environment: "",
    selection_process: "",
    work_atmosphere: "",
    intern_relations: "",
    support: "",
  });

  const [error, setError] = useState<string | null>(null);

  // フォームの入力が変更されたときのハンドラー
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // クッキーから各トークンを取得
    const uid = Cookies.get("uid");
    const client = Cookies.get("client");
    const accessToken = Cookies.get("access-token");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}reviews`,
        {
          review: {
            ...formData,
            company_id: id,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            uid: uid || "",
            client: client || "",
            "access-token": accessToken || "",
          },
        }
      );

      // 成功したら会社の詳細ページにリダイレクト
      router.push(`/companies/${id}`);
    } catch (error) {
      console.error("口コミの投稿エラー:", error);
      setError("口コミの投稿に失敗しました。もう一度お試しください。");
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg space-y-4">
      <h1 className="text-2xl font-bold mb-4">口コミを投稿する</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 各種フィールド */}
        <textarea
          name="job_description"
          value={formData.job_description}
          onChange={handleChange}
          placeholder="仕事内容の詳細"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="joining_reason_gap"
          value={formData.joining_reason_gap}
          onChange={handleChange}
          placeholder="入社理由とのギャップ"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="work_life_balance"
          value={formData.work_life_balance}
          onChange={handleChange}
          placeholder="ワークライフバランスに関する意見"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="work_environment"
          value={formData.work_environment}
          onChange={handleChange}
          placeholder="職場環境についての感想"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="selection_process"
          value={formData.selection_process}
          onChange={handleChange}
          placeholder="選考プロセスの感想"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="work_atmosphere"
          value={formData.work_atmosphere}
          onChange={handleChange}
          placeholder="職場の雰囲気について"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="intern_relations"
          value={formData.intern_relations}
          onChange={handleChange}
          placeholder="インターンとの関係について"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="support"
          value={formData.support}
          onChange={handleChange}
          placeholder="サポート体制について"
          className="w-full border rounded p-2"
          required
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          投稿する
        </button>
      </form>
    </div>
  );
};

export default NewReviewPage;
