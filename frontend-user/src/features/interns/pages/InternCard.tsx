import React from "react";
import Image from "next/image";
import { Intern } from "@/types/intern";
import Link from "next/link"; // Added Link import

type InternCardProps = {
  intern: Intern;
};

const InternCard: React.FC<InternCardProps> = ({ intern }) => {
  return (
    <Link href={`/interns/${intern.id}`}>
      <div className="bg-white shadow-lg rounded-[30px] p-6 w-[360px] h-[320px]">
        <div className="flex items-center gap-2">
          {/* アイコン */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={`https://api.dicebear.com/6.x/adventurer/png?seed=${intern.nickname}`}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            {/* キャッチフレーズ */}
            <div className="font-bold text-center mb-2">
              \ {intern.catchphrase} /
            </div>
            {/* 学生情報 */}
            <div className="bg-gray-200 rounded-full px-2 py-2 text-xs font-bold mb-4 w-full text-center">
              {intern.department} {intern.grade}
            </div>
            {/* タグ */}
            <div className="flex gap-2 w-full">
              <span className="bg-sub-col text-xs font-bold py-1 px-2 w-full rounded-full text-center flex-grow">
                {intern.industry}
              </span>
              <span className="bg-sub-col text-xs font-bold py-1 px-2 w-full rounded-full text-center flex-grow">
                {intern.occupation}
              </span>
            </div>
          </div>
        </div>
        {/* 企業情報 */}
        <div className="mt-2">
          <div className="font-bold line-clamp-2">{intern.intern_overview}</div>
          <div className="text-sm">{intern.company_name}</div>
        </div>
        {/* 条件 */}
        <div className="grid grid-cols-3 gap-2 text-center text-sm mt-2">
          <div className="bg-gray-200 rounded-[20px] px-2 py-4">
            <div className="text-sm">時給</div>
            <div className="font-bold mt-2">{intern.hourly_wage}円</div>
          </div>
          <div className="bg-gray-200 rounded-[20px] px-2 py-4">
            <div className="text-sm">週勤務時間</div>
            <div className="font-bold mt-2">週{intern.weekly_hours}時間</div>
          </div>
          <div className="bg-gray-200 rounded-[20px] px-2 py-4">
            <div className="text-sm">勤務期間</div>
            <div className="font-bold mt-2">
              {intern.work_duration >= 12
                ? "1年~"
                : `${intern.work_duration}ヶ月`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InternCard;
