'use client';
import LPHead from "@/components/layouts/LP/LPHead";
import InternHeader from "@/features/interns/pages/InternHeader";
import InternFilter from "@/features/interns/pages/InternFilter";
import IndexInterns from "@/features/pages/IndexInterns";
import { InternEnums } from "@/features/interns/types/InternEnums";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function Home() {
  const [features, setFeatures] = useState<{ id: number; name: string }[]>([]);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [enums, setEnums] = useState<InternEnums>({
    industry: [],
    occupation: [],
    department: [],
    grade: [],
  });
  const [tempFilters, setTempFilters] = useState<{ industry: number[]; occupation: number[]; department: number[]; grade: number[] }>({
    industry: [],
    occupation: [],
    department: [],
    grade: [],
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [featuresRes, enumsRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}features`).then((res) => res.json()),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}intern_enums`).then((res) => res.json()),
        ]);
        setFeatures(featuresRes.map((f: { id: number; name: string }) => ({ id: f.id, name: f.name })));
        setEnums(enumsRes);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const applyFilters = () => {
    const query = new URLSearchParams();

    Object.entries(tempFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        query.append(key, values.join(","));
      }
    });

    setIsFilterModalOpen(false);
    router.push(`/interns?${query.toString()}`);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setTempFilters((prev) => {
      const currentValues = prev[name as keyof typeof tempFilters] as number[];
      return {
        ...prev,
        [name]: checked
          ? [...currentValues, Number(value)]
          : currentValues.filter((v) => v !== Number(value)),
      };
    });
  };

  const resetFilters = () => {
    setTempFilters({
      industry: [],
      occupation: [],
      department: [],
      grade: [],
    });
  };

  const handleFeatureSelect = (feature: number | null) => {
    if (feature === null) {
      return
    }
    setSelectedFeature(feature);
    const query = new URLSearchParams();
    query.set("feature", feature.toString());
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
    <div>
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
      <LPHead />
      <IndexInterns />
      {/* <LPBody /> */}
    </div>
  );
}
