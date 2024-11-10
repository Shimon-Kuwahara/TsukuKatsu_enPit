"use client"
import React from "react";
import Cookies from "js-cookie";

export default function Recruitments() {
  const currnt_company_id = Cookies.get("uid");
  return (
    <>
      <div className="font-bold text-xl p-12">作成した求人</div>
      {currnt_company_id}
    </>
  );
}
