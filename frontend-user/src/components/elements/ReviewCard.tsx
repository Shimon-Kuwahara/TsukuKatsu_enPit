"use client";
import React from "react";
import { Review } from "../../types/review";
import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import { TabContext } from "@/components/tab/context/TabContext";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { user } = review;
  const { setRefreshTrigger } = useContext(TabContext);

  const handleDelete = async () => {
    if (!window.confirm("この口コミを削除しますか？")) {
      return;
    }

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}reviews/${review.id}`,
        {
          headers: {
            "access-token": Cookies.get("access-token"),
            client: Cookies.get("client"),
            uid: Cookies.get("uid"),
          },
        }
      );

      if (response.status === 200) {
        alert("口コミを削除しました");
        setRefreshTrigger((prev) => !prev);
      } else {
        alert("削除に失敗しました");
      }
    } catch (error) {
      console.error("削除中にエラーが発生しました:", error);
      alert("削除に失敗しました");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 m-4 w-[400px] h-auto flex flex-col text-xs">
      <div className="flex-grow">
        {/* 投稿ユーザー情報の表示 */}
        {user && (
          <div className="mb-6">
            <p className="text-gray-800 text-lg font-bold">
              {user.last_name} {user.first_name} さん
            </p>
            <p className="text-gray-600 font-semibold">
              {user.university} / {user.department}
            </p>
          </div>
        )}

        {/* 必ず表示する項目 */}
        <h2 className="font-bold mb-2">仕事内容</h2>
        <p className="text-gray-800 mb-4 overflow-hidden line-clamp-3">
          {review.job_description}
        </p>

        {/* 各項目は null でない場合にのみ表示 */}
        {review.joining_reason_gap && (
          <>
            <h2 className="font-bold">入社理由とのギャップ</h2>
            <p className="text-gray-800 mb-2">{review.joining_reason_gap}</p>
          </>
        )}

        {review.work_life_balance && (
          <>
            <h2 className="font-bold">ワークライフバランス</h2>
            <p className="text-gray-800 mb-2">{review.work_life_balance}</p>
          </>
        )}

        {review.work_environment && (
          <>
            <h2 className="font-bold">職場環境</h2>
            <p className="text-gray-800 mb-2">{review.work_environment}</p>
          </>
        )}

        {review.selection_process && (
          <>
            <h2 className="font-bold">選考フロー</h2>
            <p className="text-gray-800 mb-2">{review.selection_process}</p>
          </>
        )}

        {review.work_atmosphere && (
          <>
            <h2 className="font-bold">社内の雰囲気</h2>
            <p className="text-gray-800 mb-2">{review.work_atmosphere}</p>
          </>
        )}

        {review.intern_relations && (
          <>
            <h2 className="font-bold">インターン生の関係</h2>
            <p className="text-gray-800 mb-2">{review.intern_relations}</p>
          </>
        )}

        {review.support && (
          <>
            <h2 className="font-bold">サポート体制</h2>
            <p className="text-gray-800 mb-2">{review.support}</p>
          </>
        )}
      </div>

      {/* is_author が true の場合に削除ボタンを表示 */}
      {review.is_author && (
        <div className="mt-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            削除
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
