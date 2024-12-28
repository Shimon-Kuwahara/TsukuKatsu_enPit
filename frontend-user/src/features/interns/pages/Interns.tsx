'use client';
import React, { useEffect, useState } from "react";
import InternCard from "../pages/InternCard";
import { Intern } from "../types/Intern";

export default function IndexInterns() {
  const [interns, setInterns] = useState<Intern[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filters, setFilters] = useState<{ industry?: number; occupation?: number; department?: number; }>({});

  useEffect(() => {
    async function fetchInterns() {
      try {
        setLoading(true);

        // クエリを作成する
        const query = new URLSearchParams({
          page: page.toString(),
          ...(filters.industry && { industry: filters.industry.toString() }),
          ...(filters.occupation && { occupation: filters.occupation.toString() }),
          ...(filters.department && { department: filters.department.toString() }),
        }).toString();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}paginated_interns?${query}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch interns. Status: ${res.status}`);
        }
        const { data, total, per_page } = await res.json();
        setInterns(data);
        setTotalPages(Math.ceil(total / per_page));
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchInterns();
  }, [page, filters]);

  // フィルターの変更
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value || undefined }));
    setPage(1);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-20">
            {/* 絞り込みフォーム */}
            <div className="flex justify-center gap-4 mb-6">
        <select
          name="industry"
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded"
        >
          <option value="">業界を選択</option>
          <option value="1">Technology</option>
          <option value="2">Education</option>
          <option value="3">Finance</option>
        </select>
        <select
          name="occupation"
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded"
        >
          <option value="">職種を選択</option>
          <option value="1">Developer</option>
          <option value="2">Designer</option>
          <option value="3">Marketer</option>
        </select>
        <select
          name="department"
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded"
        >
          <option value="">学部を選択</option>
          <option value="1">Engineering</option>
          <option value="2">Business</option>
          <option value="3">Science</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {interns.length === 0 ? (
          <div>新着のインターン情報がありません。</div>
        ) : (
          interns.map((intern) => <InternCard key={intern.id} intern={intern} />)
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 my-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          前へ
        </button>
        <span>
          ページ {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          次へ
        </button>
      </div>
    </div>
  );
}
