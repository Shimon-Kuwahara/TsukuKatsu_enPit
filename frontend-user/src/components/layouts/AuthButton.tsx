"use client";
import React from "react";
import Link from "next/link";

export default function AuthButton() {

  return (
    <div className="space-x-1">
      <>
        <Link
          href="/sign_in"
          className="bg-main-col hover:bg-purple-700 text-white py-2 px-2 rounded"
        >
          ログイン
        </Link>
        <Link
          href="/sign_up"
          className="border border-main-col hover:bg-gray-100 py-2 px-2 rounded"
        >
          会員登録
        </Link>
      </>
    </div>
  );
}
