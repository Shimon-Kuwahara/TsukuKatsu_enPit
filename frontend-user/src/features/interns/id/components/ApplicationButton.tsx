"use client";
import React from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

type ApplicationButtonProps = {
  recruitment_id?: number; // number | undefined
  intern_id: number;
};

export default function ApplicationButton(ids: ApplicationButtonProps) {
  const [user, setUser] = useState<number>();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}mypage`,
          {
            withCredentials: true,
            headers: {
              "access-token": Cookies.get("access-token"),
              client: Cookies.get("client"),
              uid: Cookies.get("uid"),
            },
          }
        );
        console.log(response);
        setUser(response.data.id);
      } catch (error) {
        console.error("ユーザー情報の取得に失敗しました:", error);
      }
    };
    fetchUserData();
  }, []);

  function applyForJob() {
    console.log(ids);
    console.log(user);
    console.log("応募しました");
  }

  return (
    <div className="fixed bottom-10 w-full flex justify-center">
      <button
        onClick={applyForJob}
        className="bg-main-col text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        インターンに興味あり
      </button>
    </div>
  );
}
