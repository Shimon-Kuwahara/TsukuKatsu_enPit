"use client";
import React, { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

type FormData = {
  email: string;
  password: string;
};

const Login = (): ReactElement => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: FormData) => {
    const axiosInstance = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
      headers: {
        "content-type": "application/json",
      },
    });
    setIsError(false);
    setErrorMessage("");

    try {
      const response = await axiosInstance.post("auth/sign_in", {
        email: data.email,
        password: data.password,
      });
      // Cookieにトークンをセットしています
      Cookies.set("uid", response.headers["uid"]);
      Cookies.set("client", response.headers["client"]);
      Cookies.set("access-token", response.headers["access-token"]);
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Cookieからトークンを削除しています
        Cookies.remove("uid");
        Cookies.remove("client");
        Cookies.remove("access-token");
        setIsError(true);
        setErrorMessage(
          error.response?.data.errors[0] || "ログインに失敗しました"
        );
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold text-center mb-6">ログイン</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "メールアドレスを入力してください",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              パスワード
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "パスワードを入力してください",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ログイン
            </button>
          </div>
          {isError && (
            <div className="mt-4 text-red-500 text-sm">
              <p>{errorMessage}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
