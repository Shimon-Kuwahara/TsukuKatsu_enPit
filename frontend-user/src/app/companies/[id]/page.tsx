"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Company } from "../../../types/company"; // 型定義ファイルをインポート
import { Review } from "../../../types/review"; // 型定義ファイルをインポート
import Contents from "@/components/tab/wrapper/Contents";
import { TabContext } from "@/components/tab/context/TabContext";

interface CompanyWithReviews {
  company: Company;
  reviews: Review[];
}

const CompanyDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<CompanyWithReviews | null>(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}companies/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching company:", error));
    }
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const { company, reviews } = data;
  const image_num = (company.id % 7) + 1;
  return (
    <div className="max-w-2xl mx-auto bg-white overflow-hidden p-6 space-y-4 text-base">
      {/* Company Header */}
      <div className="flex items-center p-4 text-white bg-main-col rounded-lg">
        <div className="flex-grow text-2xl font-bold">{`${company.name}`}</div>
        <Link
          href={`/companies/${company.id}/reviews/new`}
          className="bg-sub-col text-white font-bold px-4 py-2 rounded"
        >
          口コミ投稿
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
      <p className="text-sm text-main-col font-bold">{company.description}</p>

      <TabContext.Provider value={{ tabIndex, setTabIndex, reviews }}>
        <Contents />
      </TabContext.Provider>
    </div>
  );
};

export default CompanyDetailPage;
