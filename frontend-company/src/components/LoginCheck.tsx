"use client"
import React from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function LoginCheck() {
  const currnt_company_id = Cookies.get("id");

  return (
    <div className="flex justify-center text-xl p-12">
      {currnt_company_id ? (
        <div>
          <p>ログイン中のアカウントのid: {currnt_company_id}</p>
        </div>
      ) : (
        <div className="p-4">
          <Link href="/sign_in">
            <div className="mt-20 bg-main-col hover:bg-purple-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-center">
              すでにアカウントお持ちの企業様
            </div>
          </Link>
          <Link href="/sign_up">
            <div className="mt-20 bg-sub-col hover:bg-blue-300 text-white font-bold py-2 px-4 rounded cursor-pointer text-center">
              アカウントを作成する
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
