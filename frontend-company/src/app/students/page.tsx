// app/students/page.tsx (例) - サーバーコンポーネント
import React from "react";
import { User } from "@/types/user";
import UserCard from "@/components/UserCard"; // この中で 'use client' が必要であれば書く

// 追加: ISR/SSG ではなく常にSSRしたい場合には
export const revalidate = 0; // 常に最新データを取得する (＝ no-store 相当)

async function getUsers(): Promise<User[]> {
  // SSRで毎回リクエストを行いたい場合
  const response = await fetch(`${process.env.SERVER_API_URL}users`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return data;
}

export default async function Students() {
  const users = await getUsers();

  return (
    <div>
      <div className="font-bold text-xl p-12">アクティブユーザー</div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
