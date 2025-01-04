import React from "react";
import Link from "next/link";
import InternCard from "../interns/pages/InternCard";
import { Intern } from "@/types/intern";

// 追加: 完全に最新データを取りたい場合は再検証オプション
export const revalidate = 0; 
// ↑ これで「常に最新のデータを取得 (＝ SSR)」になります
// あるいは下記 fetch のオプションに cache: 'no-store' を付けるのでもOK

// SSRでインターン一覧を取得する関数
async function getInterns(): Promise<Intern[]> {
  const res = await fetch(`${process.env.SERVER_API_URL}interns`, {
    cache: "no-store", // キャッシュを使わず、毎回リクエスト
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch interns. Status: ${res.status}`);
  }
  return res.json();
}

export default async function IndexInterns() {
  let interns: Intern[] = [];

  // サーバーサイドでデータ取得
  try {
    interns = await getInterns();
  } catch (error) {
    // fetch失敗やステータス不良時にエラー文を表示
    return <div>Error: {(error as Error).message}</div>;
  }

  // 画面描画
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">新着インターン情報</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {interns.length === 0 ? (
          <div className="col-span-full flex justify-center items-center h-40 text-center">
            新着のインターン情報がありません。
          </div>
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