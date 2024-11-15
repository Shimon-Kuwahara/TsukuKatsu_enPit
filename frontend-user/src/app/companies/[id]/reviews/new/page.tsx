"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const NewReviewPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [companyName, setCompanyName] = useState("");
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

  useEffect(() => {
    const fetchCompanyName = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}companies/${id}`
        );
        setCompanyName(response.data.company.name);
      } catch (error) {
        console.error("会社名の取得エラー:", error);
      }
    };
    fetchCompanyName();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      router.push(`/companies/${id}`);
    } catch (error) {
      console.error("口コミの投稿エラー:", error);
      setError("口コミの投稿に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg space-y-6">
      <h2 className="text-center text-xl font-bold">{companyName}</h2>
      <h1 className="text-2xl font-bold mb-4 text-center">口コミ投稿ページ</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-lg font-bold flex items-center">
            仕事内容
            <span className="text-red-500 text-sm ml-2">必須</span>
          </label>
          <textarea
            name="job_description"
            value={formData.job_description}
            onChange={handleChange}
            placeholder="仕事内容の詳細を入力してください"
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="text-lg font-bold">
            入社理由・入社後のギャップ
          </label>
          <textarea
            name="joining_reason_gap"
            value={formData.joining_reason_gap}
            onChange={handleChange}
            placeholder="入社理由とのギャップについて入力してください"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-lg font-bold">ワークライフバランス</label>
          <textarea
            name="work_life_balance"
            value={formData.work_life_balance}
            onChange={handleChange}
            placeholder="ワークライフバランスについて入力してください"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-lg font-bold">職場環境・設備</label>
          <textarea
            name="work_environment"
            value={formData.work_environment}
            onChange={handleChange}
            placeholder="職場環境について入力してください"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-lg font-bold">インターン選考のプロセス</label>
          <textarea
            name="selection_process"
            value={formData.selection_process}
            onChange={handleChange}
            placeholder="選考プロセスについて入力してください"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-lg font-bold">職場の雰囲気</label>
          <textarea
            name="work_atmosphere"
            value={formData.work_atmosphere}
            onChange={handleChange}
            placeholder="職場の雰囲気について入力してください"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-lg font-bold">インターン生同士の関係性</label>
          <textarea
            name="intern_relations"
            value={formData.intern_relations}
            onChange={handleChange}
            placeholder="インターンとの関係について入力してください"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-lg font-bold">指導体制・サポート</label>
          <textarea
            name="support"
            value={formData.support}
            onChange={handleChange}
            placeholder="サポート体制について入力してください"
            className="w-full border rounded p-2"
          />
        </div>

        {/* 投稿ボタン */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-sub-col hover:bg-blue-500 text-white p-3 rounded w-full"
          >
            投稿する
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReviewPage;
