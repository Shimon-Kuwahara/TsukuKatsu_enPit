"use client"
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Recruitment } from "@/types/recruitment";

export default function Recruitments() {
  const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
  const currnt_company_id = Cookies.get("id");

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}recruitments/by_company_id?id=${currnt_company_id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recruitments");
        }
        const data: Recruitment[] = await response.json();
        setRecruitments(data);
      } catch (error) {
        console.error("Error fetching recruitments:", error);
      }
    };

    if (currnt_company_id) {
      fetchRecruitments();
    }
  }, [currnt_company_id]);

  const handleDelete = async (recruitmentId: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}recruitments/${recruitmentId}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete recruitment');
      }

      // 成功したら、削除された求人をステートから除外
      setRecruitments(recruitments.filter((recruitment) => recruitment.id !== recruitmentId));
    } catch (error) {
      console.error('Error deleting recruitment:', error);
    }
  };

  return (
    <div>
      <div className="font-bold text-xl p-12">作成した求人</div>
      {recruitments.length > 0 ? (
        <ul>
          {recruitments.map((recruitment) => (
            <li key={recruitment.id}>
              <h2>{recruitment.title}</h2>
              <p>{recruitment.created_at}</p>
              {/* 削除ボタン */}
              <button
                onClick={() => handleDelete(recruitment.id!)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-700"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recruitments found.</p>
      )}
    </div>
  );
}
