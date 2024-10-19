"use client";

import CompanyCard from "@/components/elements/CompanyCard";
import HomeView from "@/components/elements/HomeView";
import { useEffect, useState } from "react";

type Company = {
  image: string;
  name: string;
  student: {
    name: string;
    info: string;
  };
  description: string;
  detailLink: string;
};

export default function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    // APIからデータを取得する
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/companies'); // ここは実際のAPIのエンドポイントに変更
        if (!response.ok) {
          throw new Error("Failed to fetch companies");
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <HomeView />
      <div className="p-4 text-2xl">
        <b className="px-2 underline">求人一覧</b>
        <b className="p-4 text-gray-400">口コミ一覧</b>
      </div>
      <div className="flex flex-wrap justify-center">
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <CompanyCard
              key={index}
              companyImage={company.image}
              companyName={company.name}
              userName={company.student.name}
              userInfo={company.student.info}
              companyDescription={company.description}
              detailLink={company.detailLink}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
