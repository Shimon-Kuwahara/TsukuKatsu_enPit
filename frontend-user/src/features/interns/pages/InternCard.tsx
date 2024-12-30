import React from "react";
import Image from "next/image";
import { Intern } from "../types/Intern";

type InternCardProps = {
  intern: Intern;
};

const InternCard: React.FC<InternCardProps> = ({ intern }) => {
  return (
    <div className="bg-white shadow-lg rounded-[30px] p-6 w-[360px] h-[300px]">
      <div className="flex items-center gap-4">
        {/* アイコン */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/default_profile.png" // プロフィール画像のパス
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          {/* キャッチフレーズ */}
          <div className="text-sm font-bold text-gray-600 mb-2">
            {intern.catchphrase}
          </div>
          {/* 学生情報 */}
          <div className="bg-gray-100 rounded-lg px-4 py-2 text-base font-bold text-gray-800 mb-2 w-full text-center">
            {intern.department} {intern.grade} {intern.nickname} さん
          </div>
          {/* タグ */}
          <div className="flex gap-2 w-full">
            <span className="bg-main-col-light text-white text-xs font-bold py-1 px-3 rounded-full text-center flex-grow">
              {intern.industry}
            </span>
            <span className="bg-main-col-light text-white text-xs font-bold py-1 px-3 rounded-full text-center flex-grow">
              {intern.occupation}
            </span>
          </div>
        </div>
      </div>

      {/* 企業情報 */}  
      <div className="mt-2">
        <div className="text-sm text-gray-600">{intern.company_name}</div>
        <div className="text-lg font-semibold text-gray-800">{intern.intern_overview}</div>
      </div>
      {/* 条件 */}
      <div className="grid grid-cols-3 gap-2 text-center text-sm text-gray-700 mt-2">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="text-xs text-gray-800">時給</div>
          <div className="text-sm font-bold text-gray-600">{intern.hourly_wage}円</div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="text-xs text-gray-800">週勤務日数</div>
          <div className="font-bold text-gray-600">{intern.weekly_hours}日</div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="text-xs text-gray-800">勤務期間</div>
          <div className="font-bold text-gray-600">{intern.work_duration}年</div>
        </div>
      </div>
    </div>
  );
};

export default InternCard;
