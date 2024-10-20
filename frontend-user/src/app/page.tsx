"use server";

import CompanyCard from "@/components/elements/CompanyCard";
import HomeView from "@/components/elements/HomeView";
import { getAllCompanies } from "@/libs/fetchCompanies";
// import { useEffect, useState } from "react";

type Company = {
  image: string;
  name: string;
  student_name: string;
  student_info: string;
  description: string;
  detail_link: string;
};

export default async function Home() {
  const companies: Company[] = await getAllCompanies();
  console.log('Fetched Companies:', companies);
  // const [companies, setCompanies] = useState<Company[]>([]);
  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const response = await fetch('/api/companies');
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch companies");
  //       }
  //       const data = await response.json();
  //       setCompanies(data);
  //     } catch (error) {
  //       console.error("Error fetching companies:", error);
  //     }
  //   };

  //   fetchCompanies();
  // }, []);

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
              userName={company.student_name}
              userInfo={company.student_info}
              companyDescription={company.description}
              detailLink={company.detail_link}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
