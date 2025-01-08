import React from "react";
import { notFound } from "next/navigation";
import { Intern } from "@/types/intern";
import InternDetails from "@/features/interns/id/components/InternDetails";
import RecruitmentDetails from "@/features/interns/id/components/RecruitmentDetails";

export const revalidate = 0; 

async function getIntern(id: string): Promise<Intern | null> {
  // SSRで毎回リクエストしたいなら cache: "no-store" を指定
  const res = await fetch(`${process.env.SERVER_API_URL}interns/${id}`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    // ステータスに応じて 404 を出すなり、エラーを投げるなり
    // 今回は notFound() を呼ぶと Next.js の 404 ページへ飛びます
    notFound();
  }

  const data: Intern = await res.json();
  return data;
}

type InternPageProps = {
  params: {
    id: string; // [id] から取得
  };
};

// --- サーバーコンポーネント (SSR) ---
export default async function InternPage({ params }: InternPageProps) {
  const { id } = params;

  if (!id) {
    // idがなければ 404 にする
    notFound();
  }

  // サーバーサイドで fetch
  const intern = await getIntern(id);
  if (!intern) {
    // 取得できなかったら 404
    notFound();
  }

  // 正常にデータ取得できたらレンダリング
  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 space-y-6">
      <InternDetails intern={intern} />
      {intern.recruitment && <RecruitmentDetails recruitment={intern.recruitment} />}
      {/* <ApplicationButton recruitment_id={intern.recruitment?.id} intern_id={intern.id}/> */}
    </div>
  );
}
