import CompanyCard from "@/components/elements/CompanyCard";
import HomeView from "@/components/elements/HomeView";

export default function Home() {
  return (
    <div>
      <HomeView/>
      <div className="p-4 text-2xl">
        <b className="px-2 underline">求人一覧</b>
        <b className="p-4 text-gray-400">口コミ一覧</b>
      </div>
      <div className="flex flex-wrap justify-center">
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
      </div>
    </div>
  );
}
