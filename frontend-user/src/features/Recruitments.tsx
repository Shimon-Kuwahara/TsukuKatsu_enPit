"use client";
import React, { useEffect, useState } from "react";
import RecruitmentCard from "@/components/elements/RecruitmentCard";
import { Recruitment } from "@/types/recruitment";

export default function Recruitments() {
  const [recruitments, setRecruitments] = useState<Recruitment[]>([]);

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}recruitments`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: Recruitment[] = await response.json();
        setRecruitments(result);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    fetchRecruitments();
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold p-4">求人はこちら</h1>
      <div className="flex flex-wrap justify-center">
        {recruitments.length > 0 ? (
          recruitments.map((recruitment) => (
            <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
          ))
        ) : (
          <p>Loading recruitments...</p>
        )}
      </div>
    </>
  );
}
