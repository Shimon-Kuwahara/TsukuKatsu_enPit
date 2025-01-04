'use client';
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import InternCard from "../pages/InternCard";
import InternHeader from "./InternHeader";
import InternFilter from "./InternFilter";
import { Intern } from "@/types/intern";
import { InternEnums } from "../types/InternEnums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Interns() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InternsContent />
    </Suspense>
  );
}

function InternsContent() {
  const [interns, setInterns] = useState<Intern[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [features, setFeatures] = useState<{ id: number; name: string }[]>([]);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [tempFilters, setTempFilters] = useState<{ industry: number[], occupation: number[], department: number[], grade: number[] }>({
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

  const router = useRouter();
  const searchParams = useSearchParams();

  // enum と feature のデータを取得する
  useEffect(() => {
    const fetchData = async () => {
      const [featuresRes, enumsRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}features`).then((res) => res.json()),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}intern_enums`).then((res) => res.json()),
      ]);
      setFeatures(featuresRes.map((f: { id: number; name: string }) => ({ id: f.id, name: f.name })));
      setEnums(enumsRes);
    };
    fetchData();
  }, []);

  // intern 一覧を取得する
  useEffect(() => {
    const fetchInterns = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams(searchParams.toString());
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
  }, [searchParams]);

  // クエリからフィルタの初期値と選択中の feature を設定
  useEffect(() => {
    const filtersFromQuery: typeof tempFilters = {
      industry: [],
      occupation: [],
      department: [],
      grade: [],
    };

    let selectedFeatureFromQuery: number | null = null;
    let selectedPageFromQuery: number = 1;

    searchParams.forEach((value, key) => {
      if (key in filtersFromQuery) {
        filtersFromQuery[key as keyof typeof tempFilters] = value.split(",").map(Number);
      } else if (key === "feature") {
        // feature クエリを数値としてパース
        selectedFeatureFromQuery = Number(value);
      } else if (key === "page") {
        selectedPageFromQuery = Number(value);
      }
    });

    setPage(selectedPageFromQuery);
    setTempFilters(filtersFromQuery);
    setSelectedFeature(selectedFeatureFromQuery); // feature をセット
  }, [searchParams]);


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setTempFilters((prev) => {
      const currentValues = prev[name as keyof typeof tempFilters] as number[];
      if (checked) {
        return { ...prev, [name]: [...currentValues, Number(value)] };
      } else {
        return { ...prev, [name]: currentValues.filter((v) => v !== Number(value)) };
      }
    });
  };

  const applyFilters = () => {
    const query = new URLSearchParams();
  
    Object.entries(tempFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        query.append(key, values.join(","));
      }
    });

    // feature パラメータを保持
    if (selectedFeature !== null) {
      query.set("feature", selectedFeature.toString());
    }
  
    const newQueryString = query.toString();
    const currentQueryString = searchParams.toString();
  
    // 条件が変更されていない場合
    if (newQueryString === currentQueryString) {
      setIsFilterModalOpen(false);
      return;
    }
  
    setPage(1);
    setIsFilterModalOpen(false);
    router.push(`/interns?${newQueryString}`);
  };

  const resetFilters = () => {
    setTempFilters({
      industry: [],
      occupation: [],
      department: [],
      grade: [],
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === page) {
      // ページが変わらない場合は何もしない
      return;
    }
    setPage(newPage); // ページ番号を更新
  
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString()); // 新しいページ番号を設定
    router.push(`/interns?${params.toString()}`); // 新しい URL に遷移
  };

  const handleFeatureSelect = (feature: number | null) => {
    setSelectedFeature(feature);
  
    const query = new URLSearchParams(searchParams.toString());
  
    if (feature === null) {
      // "すべて" を選択した場合は feature パラメータを削除
      query.delete("feature");
    } else {
      // 特定の feature を選択した場合はパラメータを設定
      query.set("feature", feature.toString());
    }
    
    query.delete("page");
    setPage(1);
    router.push(`/interns?${query.toString()}`);
  };
  
  
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <InternHeader 
        onFilterClick={() => setIsFilterModalOpen(true)}
        features={features}
        selectedFeature={selectedFeature}
        onFeatureSelect={handleFeatureSelect}
      />
      <InternFilter
        isOpen={isFilterModalOpen}
        enums={enums}
        tempFilters={tempFilters}
        handleCheckboxChange={handleCheckboxChange}
        onApply={applyFilters}
        onClose={() => setIsFilterModalOpen(false)}
        onReset={resetFilters}
      />

      <div className="container mx-auto text-right mt-4 px-10 text-gray-600">
        <span className="font-bold mr-2">{totalCount}</span>件
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {interns.length === 0 ? (
            <div className="col-span-full flex justify-center items-center h-40 text-center">
              該当するインターン情報がありません。検索条件を変更して下さい。
            </div>
          ) : (
            interns.map((intern) => <InternCard key={intern.id} intern={intern} />)
          )}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 my-6">
          <button
            onClick={() => handlePageChange(Math.max(page - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <span>
            ページ {page} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
}
