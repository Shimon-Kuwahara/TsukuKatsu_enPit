"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Recruitment } from "../../../types/recruitment";
import { Company } from "../../../types/company";
import { doesCookieExist } from "@/utils/cookieUtils";

interface RecruitmentWithCompany {
  recruitment: Recruitment;
  company: Company;
}

const RecruitmentDetailPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [data, setData] = useState<RecruitmentWithCompany | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}recruitments/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching recruitment:", error));
    }
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const { recruitment, company } = data;
  const image_num = (recruitment.id % 7) + 1; // Adjusted for image logic

  const applyForJob = async () => {
    if (!doesCookieExist("uid")) {
      router.push("/sign_in");
      return;
    }

    router.push(`/recruitments/${recruitment.id}/confirm`);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white overflow-hidden p-6 space-y-4 text-base">
      {/* Company Header */}
      <div className="flex items-center p-4 text-white bg-main-col rounded-lg">
        <div className="flex-grow text-2xl font-bold">{`${company.name}`}</div>
        <Link
          href={`/companies/${company.id}`}
          className="bg-white text-main-col px-4 py-2 rounded hover:bg-gray-100"
        >
          企業詳細
        </Link>
      </div>
      <div className="w-full mb-6">
        <Image
          src={`/test${image_num}.png`}
          alt="Company Logo"
          width={400}
          height={300}
          className="w-full object-cover"
        />
      </div>

      {/* Company Description */}
      <div className="mb-6 space-y-4">
        <p className="text-sm text-main-col">{recruitment.title}</p>
        <p className="">所在地: {company.location}</p>
        <Link
          href={company.website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {company.website_url}
        </Link>
      </div>

      {/* Description Section */}
      <div className="mb-4">
        <p className="text-sm">{recruitment.description}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold text-main-col mb-2">
          獲得できるスキル
        </h3>
        <p className="text-sm">{recruitment.skills_acquired}</p>
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-main-col mb-2">特徴</h3>
        <p className="text-sm">{recruitment.benefits}</p>
      </div>

      {/* Job Information */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-main-col mb-2">
          募集職種 / 給料
        </h3>
        <p className="">{recruitment.job_titles}</p>
        <p className="">{recruitment.wage}</p>
        <p className="">{recruitment.salary_notes}</p>
      </div>

      {/* Working Hours */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-main-col mb-2">勤務時間</h3>
        <p className="">{recruitment.min_work_hours}</p>
        <p className="">{recruitment.min_work_days}</p>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-main-col mb-2">勤務地</h3>
        <p className="">{recruitment.work_location}</p>
      </div>

      {/* Required Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-main-col mb-2">必須スキル</h3>
        <p className="">{recruitment.required_skills}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-main-col mb-2">歓迎スキル</h3>
        <p className="">{recruitment.welcome_skills}</p>
      </div>

      {/* Additional Information */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-main-col mb-2">その他情報</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li className="">交通費支給: {recruitment.commute_support}</li>
          <li className="">リモートポリシー: {recruitment.remote_policy}</li>
          <li className="">選考フロー: {recruitment.selection_flow}</li>
          <li className="">福利厚生: {recruitment.welfare_benefits}</li>
        </ul>
      </div>

      {/* Apply Button */}
      <div className="text-center">
        <button
          onClick={applyForJob}
          className="bg-main-col text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          応募して話を聞く
        </button>
      </div>
    </div>
  );
};

export default RecruitmentDetailPage;
