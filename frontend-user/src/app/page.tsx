import HomeHeader from "@/features/pages/HomeHeader";
import { InternEnums } from "@/features/interns/types/InternEnums";
import IndexInterns from "@/features/pages/IndexInterns";
import LPHead from "@/components/layouts/LP/LPHead";

// サーバー側でデータをフェッチ
async function fetchData() {
  const [featuresRes, enumsRes] = await Promise.all([
    fetch(`${process.env.SERVER_API_URL}features`, { cache: "no-store" }),
    fetch(`${process.env.SERVER_API_URL}intern_enums`, { cache: "no-store" }),
  ]);

  const features = await featuresRes.json();
  const enums: InternEnums = await enumsRes.json();

  return {
    features: features.map((f: { id: number; name: string }) => ({
      id: f.id,
      name: f.name,
    })),
    enums,
  };
}

export default async function Page() {
  const { features, enums } = await fetchData();

  return (
    <>
      <HomeHeader features={features} enums={enums} />
      <LPHead />
      <IndexInterns />
    </>
  )
}
