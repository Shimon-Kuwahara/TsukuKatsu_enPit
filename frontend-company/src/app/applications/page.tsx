"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "@/utils/axiosConfig";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Recruitment {
  id: number;
  title: string;
  industry: string;
}

interface Application {
  id: number;
  status: string;
  created_at: string;
}

interface ApplicationWithUser {
  application: Application;
  user: User;
  recruitment: Recruitment;
}

export default function ApplicationList() {
  const [applications, setApplications] = useState<ApplicationWithUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}applications`,
          {
            headers: {
              "access-token": Cookies.get("access-token"),
              client: Cookies.get("client"),
              uid: Cookies.get("uid"),
            },
          }
        );

        setApplications(response.data);
      } catch (error) {
        console.error("ページデータの取得に失敗しました:", error);
        setError("エラーが発生しました");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">応募一覧</h1>
      {applications.map((application) => (
        <div
          key={application.application.id}
          className="p-4 border rounded shadow bg-white"
        >
          <h2 className="text-lg font-bold">
            {application.recruitment.title} ({application.recruitment.industry})
          </h2>
          <p className="text-sm text-gray-700">
            <strong>応募者:</strong> {application.user.name} (
            {application.user.email})
          </p>
          <p className="text-sm text-gray-700">
            <strong>進行状況:</strong> {application.application.status}
          </p>
        </div>
      ))}
    </div>
  );
}
