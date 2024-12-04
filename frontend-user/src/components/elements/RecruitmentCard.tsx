"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Recruitment } from "../../types/recruitment";

interface RecruitmentCardProps {
  recruitment: Recruitment;
}

const RecruitmentCard: React.FC<RecruitmentCardProps> = ({ recruitment }) => {
  const image_num = (recruitment.id % 7) + 1; // 画像のアップロードを作成して消す
  const { user, company } = recruitment; // Destructure user from recruitment

  // 職種のタグを作成
  const jobTags = [
    { key: "job_engineer", label: "エンジニア" },
    { key: "job_designer", label: "デザイナー" },
    { key: "job_sales", label: "営業" },
    { key: "job_planning", label: "企画" },
    { key: "job_marketing", label: "マーケティング" },
    { key: "job_writer", label: "ライター" },
    { key: "job_others", label: "その他" },
  ];

  // 有効な職種をフィルタリング
  const activeJobTags = jobTags.filter((job) => recruitment[job.key as keyof Recruitment]);

  return (
    <div className="rounded-lg shadow-md overflow-hidden w-[400px] h-[400px] mx-4 my-2 flex flex-col">
      <Link href={`/recruitments/${recruitment.id}`}>
        <div className="h-48 w-full">
          <Image
            src={`/test${image_num}.png`}
            alt="Company Group"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-grow p-2">
          {/* Display user information */}
          {user && (
            <div className="font-bold">
              {/* 職種のタグ */}
              <div className="flex flex-wrap gap-2 mb-1">
                {activeJobTags.map((job, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {job.label}
                  </span>
                ))}
              </div>
              {/* 学生情報のタグ */}
              <div className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                {user.department} {user.grade} Aさんが勤務中
              </div>
            </div>
          )}
          {/* <h2 className="font-bold text-sm">時給：{recruitment.wage}円〜</h2> */}
          <h2 className="font-bold text-sm mt-1">{recruitment.title}</h2>
          <p className='text-gray-500'>{company.name}</p>
          {/* 情報ボックス */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            {/* 時給 */}
            <div className="bg-gray-100 text-gray-700 text-xs p-2 rounded-lg shadow">
              <p className="font-bold">時給</p>
              <p>{recruitment.wage}</p>
            </div>
            {/* 週の働く時間 */}
            <div className="bg-gray-100 text-gray-700 text-xs p-2 rounded-lg shadow">
              <p className="font-bold">週の働く時間</p>
              <p>２～３日</p>
            </div>
            {/* 勤務期間 */}
            <div className="bg-gray-100 text-gray-700 text-xs p-2 rounded-lg shadow">
              <p className="font-bold">勤務期間</p>
              <p>８か月間</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecruitmentCard;
