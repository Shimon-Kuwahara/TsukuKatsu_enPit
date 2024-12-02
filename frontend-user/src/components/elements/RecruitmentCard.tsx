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

  return (
    <div className="rounded-lg shadow-md overflow-hidden w-[400px] h-[340px] mx-4 my-2 flex flex-col">
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
        <div className="flex-grow p-4">
          {/* Display user information */}
          {user && (
            <div className="font-bold">
              <p className="text-sm">{user.department} {user.grade}</p>
              <p className="text-sm">{user.last_name} {user.first_name} さんが勤務中</p>
              <p>{company.name}</p>
            </div>
          )}
          {/* <h2 className="font-bold text-sm">時給：{recruitment.wage}円〜</h2> */}
          <h2 className="font-bold text-sm">{recruitment.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default RecruitmentCard;
