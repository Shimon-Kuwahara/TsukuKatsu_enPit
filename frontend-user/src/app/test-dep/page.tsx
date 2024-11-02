"use client"
import React, { useEffect, useRef, useState } from 'react';
import { redirect } from "next/navigation";

const DeployTestPage: React.FC = () => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recruitments`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
  }

  return (
    <div className='bg-red-100'>
      <h1>Data from Backend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <form
        ref={ref}
        action={ async (formData) => {
          await createPost(formData)
          ref.current?.reset()
        }}
      >
        <div>
          <label htmlFor="title">タイトル</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div>
          <label htmlFor="description">内容</label>
          <textarea name="description" id="description" required />
        </div>
        <button>投稿</button>
      </form>
    </div>
  );
};

const createPost = async (formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recruitments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ recruitment: { title, description } }),
  });

  redirect("/test-dep");
}

export default DeployTestPage;