'use client';
import React, { useEffect, useState } from "react";
import InternCard from "../interns/pages/InternCard";
import { Intern } from "../interns/types/Intern";
import Link from "next/link";

export default function IndexInterns() {
  const [interns, setInterns] = useState<Intern[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInterns() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}interns`);
        if (!res.ok) {
          throw new Error(`Failed to fetch interns. Status: ${res.status}`);
        }
        const data: Intern[] = await res.json();
        setInterns(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchInterns();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        新着インターン情報
      </h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {interns.length === 0 ? (
          <div className='col-span-full flex justify-center items-center h-40 text-center'>新着のインターン情報がありません。</div>
        ) : (
          interns.map((intern) => <InternCard key={intern.id} intern={intern} />)
        )}
      </div>
      <div className="text-center mt-4">
        <Link
          href="/interns"
          className="inline-block px-6 py-3 bg-main-col text-white rounded-full font-bold"
        >
          もっと見る
        </Link>
      </div>
    </div>
  );
}
