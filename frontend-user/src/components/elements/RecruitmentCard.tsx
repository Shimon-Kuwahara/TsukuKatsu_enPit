"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Recruitment } from "../../types/recruitment";

interface RecruitmentCardProps {
  recruitment: Recruitment;
}

const RecruitmentCard: React.FC<RecruitmentCardProps> = ({ recruitment }) => {
  const image_num = recruitment.id % 7 + 1; // 画像のアップロードを作成して消す
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 m-4 w-[400px] h-[450px] flex flex-col text-xs">
      <Link href={`/recruitments/${recruitment.id}`}>
        <div className="h-48 w-full mb-4">
          <Image
            src={`/test${image_num}.png`}
            alt="Company Group"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center mb-3">
            {/* <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div> */}
            <div className="flex-grow text-sm font-bold">
              <p className="">応募締め切り：{recruitment.deadline}</p>
              <p className="">{recruitment.wage}</p>
            </div>
          </div>
          <h2 className="font-bold mb-2">{recruitment.title}</h2>
          <p className="text-gray-800 mb-4 overflow-hidden line-clamp-3">
            {recruitment.description}
          </p>
        </div>
      </Link>

      <Link
        href={`/recruitments/${recruitment.id}`}
        className="bg-purple-600 text-white flex justify-center py-2 rounded mt-auto"
      >
        この求人について詳しく見る
      </Link>
    </div>
  );
};

export default RecruitmentCard;
