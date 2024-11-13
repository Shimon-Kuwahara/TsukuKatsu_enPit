import RecruitmentCard from "@/components/elements/RecruitmentCard";
import { Recruitment } from "@/types/recruitment";

export default async function Recruitments() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}recruitments`,
    { cache: "no-store" } // 必要に応じてキャッシュ設定
  );
  if (!response.ok) {
    throw new Error("データの取得に失敗しました");
  }
  const recruitments: Recruitment[] = await response.json();

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {recruitments.length > 0 ? (
          recruitments.map((recruitment) => (
            <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
          ))
        ) : (
          <p>求人が見つかりませんでした。</p>
        )}
      </div>
    </>
  );
}
