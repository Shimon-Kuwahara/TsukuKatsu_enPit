'use client';
import React, { useState } from "react";
import InternHeader from "@/features/interns/pages/InternHeader";
import InternFilter from "@/features/interns/pages/InternFilter";
import { useRouter } from "next/navigation";
import { InternEnums } from "@/features/interns/types/InternEnums";

interface HomeHeaderProps {
  features: { id: number; name: string }[];
  enums: InternEnums;
}

export default function HomeHeader({ features, enums }: HomeHeaderProps) {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [tempFilters, setTempFilters] = useState<{
    industry: number[];
    occupation: number[];
    department: number[];
    grade: number[];
  }>({
    industry: [],
    occupation: [],
    department: [],
    grade: [],
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  const router = useRouter();

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
      return;
    }
    setSelectedFeature(feature);
    const query = new URLSearchParams();
    query.set("feature", feature.toString());
    router.push(`/interns?${query.toString()}`);
  };

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
    </>
  );
}
