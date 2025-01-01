'use client';
import React, { useEffect, useState } from "react";
import InternCard from "../pages/InternCard";
import InternHeader from "./InternHeader";
import InternFilter from "./InternFilter";
import { Intern } from "../types/Intern";
import { InternEnums } from "../types/InternEnums";

export default function IndexInterns() {
  const [interns, setInterns] = useState<Intern[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const [tempFilters, setTempFilters] = useState<{ industry: number[], occupation: number[], department: number[], grade: number[] }>({
    industry: [],
    occupation: [],
    department: [],
    grade: [],
  });
  const [appliedFilters, setAppliedFilters] = useState<{ industry: number[], occupation: number[], department: number[], grade: number[] }>({
    industry: [],
    occupation: [],
    department: [],
    grade: [],
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  const [enums, setEnums] = useState<InternEnums>({
    industry: [],
    occupation: [],
    department: [],
    grade: [],
  });

    // enum　のデータを取得する
    useEffect(() => {
      async function fetchEnums() {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}intern_enums`);
          if (!res.ok) {
            throw new Error("Failed to fetch enums");
          }
          const data = await res.json();
          setEnums(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchEnums();
    }, []);

  // intern 一覧を取得する
  useEffect(() => {
    async function fetchInterns() {
      try {
        setLoading(true);

        // クエリを作成する
        const query = new URLSearchParams({
          page: page.toString(),
          ...(appliedFilters.industry.length > 0 && { industry: appliedFilters.industry.join(",") }),
          ...(appliedFilters.occupation.length > 0 && { occupation: appliedFilters.occupation.join(",") }),
          ...(appliedFilters.department.length > 0 && { department: appliedFilters.department.join(",") }),
          ...(appliedFilters.grade.length > 0 && { grade: appliedFilters.grade.join(",") }),
        }).toString();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}paginated_interns?${query}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch interns. Status: ${res.status}`);
        }
        const { data, total, per_page } = await res.json();
        setInterns(data);
        setTotalPages(Math.max(1, Math.ceil(total / per_page)));
        setTotalCount(total);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchInterns();
  }, [page, appliedFilters]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setTempFilters((prev) => {
      const currentValues = prev[name as keyof typeof tempFilters] as number[];
      if (checked) {
        return { ...prev, [name]: [...currentValues, Number(value)] };
      } else {
        return { ...prev, [name]: currentValues.filter((v) => v !== Number(value)) };
      }
    })
  }

  const applyFilters = () => {
    setAppliedFilters(tempFilters);
    setIsFilterModalOpen(false);
    setPage(1);
  }

  return (
    <>
      <InternHeader onFilterClick={() => setIsFilterModalOpen(true)} />
      <InternFilter
        isOpen={isFilterModalOpen}
        enums={enums}
        tempFilters={tempFilters}
        handleCheckboxChange={handleCheckboxChange}
        onApply={applyFilters}
        onClose={() => setIsFilterModalOpen(false)}
      />

      <div className="container mx-auto text-right mt-2 text-gray-600">
        総件数：{totalCount}件
      </div>
      <div className="container mx-auto p-4 mt-2">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {interns.length === 0 ? (
            <div className="col-span-full flex justify-center items-center h-40 text-center">該当するインターン情報がありません。検索条件を変更して下さい。</div>
          ) : (
            interns.map((intern) => <InternCard key={intern.id} intern={intern} />)
          )}
        </div>
        )}

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
    </>
  );
}
