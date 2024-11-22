"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Company } from "../../../types/company"; // 型定義ファイルをインポート
import { Review } from "../../../types/review"; // 型定義ファイルをインポート
import { Recruitment } from "../../../types/recruitment"; // 型定義ファイルをインポート
import Contents from "@/components/tab/wrapper/Contents";
import { TabContext } from "@/components/tab/context/TabContext";
import axios from "axios";
import Cookies from "js-cookie";

interface CompanyWithReviews {
  company: Company;
  recruitments: Recruitment[];
  reviews: Review[];
}

const CompanyDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<CompanyWithReviews | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}companies/${id}`,
            {
              headers: {
                "access-token": Cookies.get("access-token"),
                client: Cookies.get("client"),
                uid: Cookies.get("uid"),
              },
            }
          );
          setData(response.data); // APIから取得したデータをstateにセット
        }
      } catch (error) {
        console.error("企業情報の取得に失敗しました:", error);
      }
    };

    fetchCompanyData();
  }, [id, refreshTrigger]);
  if (!data) {
    return <p>Loading...</p>;
  }

  const { company, recruitments, reviews } = data;
  const image_num = (company.id % 7) + 1;
  return (
    <div className="max-w-2xl mx-auto bg-white overflow-hidden p-6 space-y-4 text-base">
      {/* Company Header */}
      <div className="flex items-center p-4 text-white bg-main-col rounded-lg">
        <div className="flex-grow text-2xl font-bold">{`${company.name}`}</div>
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

      <TabContext.Provider
        value={{
          tabIndex,
          setTabIndex,
          setRefreshTrigger,
          recruitments,
          reviews,
        }}
      >
        <Contents />
      </TabContext.Provider>
    </div>
  );
};

export default CompanyDetailPage;
