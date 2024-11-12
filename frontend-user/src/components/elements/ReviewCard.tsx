"use client";
import React from "react";
import { Review } from "../../types/review";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { user } = review;
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
    </div>
  );
};

export default ReviewCard;
