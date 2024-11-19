import { useParams, useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { TabContext } from "@/components/tab/context/TabContext";
import ReviewCard from "@/components/elements/ReviewCard";
import axios from "axios";
import Cookies from "js-cookie";

export default function Review() {
  const { id } = useParams();
  const router = useRouter();
  const { reviews, setRefreshTrigger } = useContext(TabContext);
  const [showForm, setShowForm] = useState(false); // フォームの表示・非表示を管理
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

  // フォームデータの変更をハンドリング
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォームの送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const uid = Cookies.get("uid");
    const client = Cookies.get("client");
    const accessToken = Cookies.get("access-token");

    try {
      const response = await axios.post(
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
      if (response.status === 201) {
        setFormData({
          job_description: "",
          joining_reason_gap: "",
          work_life_balance: "",
          work_environment: "",
          selection_process: "",
          work_atmosphere: "",
          intern_relations: "",
          support: "",
        });
        setShowForm(false);
        setRefreshTrigger((prev) => !prev);
        router.push(`/companies/${id}`);
      } else {
        console.error("エラー: ステータスコード", response.status);
      }
    } catch (error) {
      console.error("口コミの投稿エラー:", error);
    }
  };

  return (
    <div className="space-y-6">
      {/* トグルボタン */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-sub-col text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "口コミ一覧に戻る" : "口コミを投稿する"}
        </button>
      </div>

      {/* 投稿フォームの表示 */}
      {showForm ? (
        <form onSubmit={handleSubmit} className="space-y-6 p-4 rounded">
          {/* 仕事内容 */}
          <div>
            <label className="text-lg font-bold flex items-center">
              仕事内容 <span className="text-red-500 text-sm ml-2">必須</span>
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

          {/* 入社理由・入社後のギャップ */}
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

          {/* ワークライフバランス */}
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

          {/* 職場環境・設備 */}
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

          {/* インターン選考のプロセス */}
          <div>
            <label className="text-lg font-bold">
              インターン選考のプロセス
            </label>
            <textarea
              name="selection_process"
              value={formData.selection_process}
              onChange={handleChange}
              placeholder="選考プロセスについて入力してください"
              className="w-full border rounded p-2"
            />
          </div>

          {/* 職場の雰囲気 */}
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

          {/* インターン生同士の関係性 */}
          <div>
            <label className="text-lg font-bold">
              インターン生同士の関係性
            </label>
            <textarea
              name="intern_relations"
              value={formData.intern_relations}
              onChange={handleChange}
              placeholder="インターン生同士の関係について入力してください"
              className="w-full border rounded p-2"
            />
          </div>

          {/* 指導体制・サポート */}
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

          {/* 送信ボタン */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-sub-col hover:bg-blue-500 text-white p-3 rounded w-full"
            >
              投稿する
            </button>
          </div>
        </form>
      ) : (
        // 口コミ一覧の表示
        <div className="flex flex-wrap justify-center">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <p>この会社の最初のレビューを書いてみませんか？</p>
          )}
        </div>
      )}
    </div>
  );
}
