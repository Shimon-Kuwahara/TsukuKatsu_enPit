"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { InternFull } from "@/types/intern";
import InternDetails from "@/features/interns/id/components/InternDetails";
import RecruitmentDetails from "@/features/interns/id/components/RecruitmentDetails";

export default function InternPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // URLの最後の部分をIDとして取得

  const [intern, setIntern] = useState<InternFull | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return; // IDが存在しない場合は早期リターン

    const fetchInternData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}interns/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch intern data");
        }
        const data: InternFull = await res.json();
        setIntern(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchInternData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!intern) {
    return <p>No data available</p>;
  }

  return (
    <>
      {/* まずインターン情報を表示する */}
      <InternDetails intern={intern} />

      {/* インターンに紐づく求人情報・会社情報を表示する */}
      {intern.recruitment && (
        <RecruitmentDetails recruitment={intern.recruitment} />
      )}
    </>
  );
}
