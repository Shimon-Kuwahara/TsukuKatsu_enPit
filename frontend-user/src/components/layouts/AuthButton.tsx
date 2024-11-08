"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { doesCookieExist } from "../../utils/cookieUtils";

export default function AuthButton() {
  const [isUidPresent, setIsUidPresent] = useState(false);
  useEffect(() => {
    setIsUidPresent(doesCookieExist("uid"));
  }, []);

  return (
    <div>
      {isUidPresent ? (
        <Link
          href="/"
          className="border border-main-col hover:bg-gray-100 py-1 px-2 rounded"
        >
          ログイン済
        </Link>
      ) : (
        <>
          <Link
            href="/sign_in"
            className="bg-main-col hover:bg-purple-700 text-white py-1 px-2 rounded"
          >
            ログイン
          </Link>
          <Link
            href="/sign_up"
            className="border border-main-col hover:bg-gray-100 py-1 px-2 rounded"
          >
            会員登録
          </Link>
        </>
      )}
    </div>
  );
}
