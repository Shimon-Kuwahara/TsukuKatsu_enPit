"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  description: string;
  websiteUrl: string;
  location: string;
  email: string;
  phoneNumber: string;
  password: string;
};

const SignupCompany = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}auth_company`,
        {
          name: data.name,
          description: data.description,
          website_url: data.websiteUrl,
          location: data.location,
          email: data.email,
          phone_number: data.phoneNumber,
          password: data.password,
        }
      );
      
      Cookies.set("id", response.data.data.id);
      Cookies.set("client", response.headers["client"]);
      Cookies.set("access-token", response.headers["access-token"]);
      router.push("/"); // Redirect to homepage or another desired page
    } catch (error) {
      Cookies.remove("id");
      // Cookies.remove("uid");
      // Cookies.remove("client");
      // Cookies.remove("access-token");
      console.error("Company account creation failed:", error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center pt-4">会社登録</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-8 m-8"
      >
        <div className="mb-4">
          <label className="block text-gray-700">会社名</label>
          <input
            type="text"
            {...register("name", {
              required: "会社名を入力してください",
            })}
            className="w-full p-2 border rounded"
            placeholder="会社名を入力してください"
          />
          {errors.name && (
            <span className="text-red-500">
              {errors.name.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">説明</label>
          <textarea
            {...register("description", {
              required: "説明を入力してください",
            })}
            className="w-full p-2 border rounded"
            placeholder="会社の説明を入力してください"
          />
          {errors.description && (
            <span className="text-red-500">
              {errors.description.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">ウェブサイトURL</label>
          <input
            type="url"
            {...register("websiteUrl", {
              required: "ウェブサイトURLを入力してください",
            })}
            className="w-full p-2 border rounded"
            placeholder="ウェブサイトのURLを入力してください"
          />
          {errors.websiteUrl && (
            <span className="text-red-500">
              {errors.websiteUrl.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">所在地</label>
          <input
            type="text"
            {...register("location", {
              required: "所在地を入力してください",
            })}
            className="w-full p-2 border rounded"
            placeholder="所在地を入力してください"
          />
          {errors.location && (
            <span className="text-red-500">
              {errors.location.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">メールアドレス</label>
          <input
            type="email"
            {...register("email", {
              required: "メールアドレスを入力してください",
            })}
            className="w-full p-2 border rounded"
            placeholder="メールアドレスを入力してください"
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">電話番号</label>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "電話番号を入力してください",
            })}
            className="w-full p-2 border rounded"
            placeholder="電話番号を入力してください"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">
              {errors.phoneNumber.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">パスワード</label>
          <input
            type="password"
            {...register("password", {
              required: "パスワードを入力してください",
            })}
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <span className="text-red-500">
              {errors.password.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-main-col hover:bg-purple-700 text-white rounded hover:bg-blue-600"
          >
            登録
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupCompany;
