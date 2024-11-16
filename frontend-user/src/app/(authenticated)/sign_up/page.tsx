"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";

type FormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  gender: string;
  university: string;
  department: string;
  grade: string;
  graduationYear: string;
  graduationMonth: string;
};

const Signup = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const formattedData = {
      ...data,
      gender: parseInt(data.gender, 10),
      university: parseInt(data.university, 10),
      grade: parseInt(data.grade, 10),
      graduationYear: parseInt(data.graduationYear, 10),
      graduationMonth: parseInt(data.graduationMonth, 10),
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}auth`,
        {
          email: formattedData.email,
          password: formattedData.password,
          password_confirmation: formattedData.passwordConfirmation,
          last_name: formattedData.lastName,
          first_name: formattedData.firstName,
          last_name_kana: formattedData.lastNameKana,
          first_name_kana: formattedData.firstNameKana,
          gender: formattedData.gender,
          university: formattedData.university,
          department: formattedData.department,
          grade: formattedData.grade,
          graduation_year: formattedData.graduationYear,
          graduation_month: formattedData.graduationMonth,
        }
      );
      console.log("Account created successfully:", response.data);
      Cookies.set("uid", response.headers["uid"]);
      Cookies.set("client", response.headers["client"]);
      Cookies.set("access-token", response.headers["access-token"]);
      window.dispatchEvent(new Event("cookieUpdated")); // cookie更新時にカスタムイベントを発火
      router.push("/"); // 登録に成功したらマイページに遷移するように変更する
    } catch (error) {
      Cookies.remove("uid");
      Cookies.remove("client");
      Cookies.remove("access-token");
      window.dispatchEvent(new Event("cookieUpdated")); // cookie更新時にカスタムイベントを発火
      console.error("Account creation failed:", error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center pt-4">新規登録</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-8 m-8">
        <div className="mb-4">
          <label className="block text-gray-700">大学のメールアドレス</label>
          <input
            type="email"
            {...register("email", {
              required: "メールアドレスを入力してください",
              pattern: {
                value: /^[^@\s]+@[^@\s]+$/,
                message: "正しいの形式のメールアドレスを入力してください",
              },
            })}
            className="w-full p-2 border rounded"
            placeholder="大学のメールアドレスを入力してください"
            />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">パスワード</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "パスワードを入力してください",
                minLength: {
                  value: 6,
                  message: "パスワードは6文字以上で入力してください",
                },
              })}
              className="w-full p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-600"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          {errors.password && (
            <span className="text-red-500">
              {errors.password.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">パスワード (確認用)</label>
          <div className="relative">
            <input
              type="password"
              {...register("passwordConfirmation", {
                required: "パスワード (確認用) を入力してください",
                minLength: {
                  value: 6,
                  message: "パスワードは6文字以上で入力してください",
                },
                validate: (value) =>
                  value === watch("password") || "パスワードが一致しません",
              })}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
              className="absolute right-2 top-2 text-gray-600"
            >
              <FontAwesomeIcon icon={showPasswordConfirmation ? faEyeSlash : faEye} />
            </button>
          </div>
          {errors.passwordConfirmation && (
            <span className="text-red-500">
              {errors.passwordConfirmation.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">姓</label>
            <input
              type="text"
              {...register("lastName", { required: "姓を入力してください" })}
              className="w-full p-2 border rounded"
              />
            {errors.lastName && (
              <span className="text-red-500">
                {errors.lastName.message as React.ReactNode}
              </span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">名</label>
            <input
              type="text"
              {...register("firstName", { required: "名を入力してください" })}
              className="w-full p-2 border rounded"
              />
            {errors.firstName && (
              <span className="text-red-500">
                {errors.firstName.message as React.ReactNode}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">姓 (カタカナ)</label>
            <input
              type="text"
              {...register("lastNameKana", {
                required: "姓 (カタカナ) を入力してください",
              })}
              className="w-full p-2 border rounded"
              />
            {errors.lastNameKana && (
              <span className="text-red-500">
                {errors.lastNameKana.message as React.ReactNode}
              </span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">名 (カタカナ)</label>
            <input
              type="text"
              {...register("firstNameKana", {
                required: "名 (カタカナ) を入力してください",
              })}
              className="w-full p-2 border rounded"
              />
            {errors.firstNameKana && (
              <span className="text-red-500">
                {errors.firstNameKana.message as React.ReactNode}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">性別</label>
          <select
            {...register("gender", { required: "性別を選択してください" })}
            className="w-full p-2 border rounded"
            >
            <option value="">選択してください</option>
            <option value="0">男性</option>
            <option value="1">女性</option>
            <option value="2">その他</option>
          </select>
          {errors.gender && (
            <span className="text-red-500">
              {errors.gender.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">大学/大学院</label>
          <select
            {...register("university", {
              required: "大学/大学院を選択してください",
            })}
            className="w-full p-2 border rounded"
            >
            <option value="">選択してください</option>
            <option value="0">筑波大学</option>
            <option value="1">筑波大学大学院</option>
            <option value="2">筑波技術大学</option>
          </select>
          {errors.university && (
            <span className="text-red-500">
              {errors.university.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">学群/学類/専攻 (例：情報学群情報科学類)</label>
          <input
            type="text"
            {...register("department", {
              required: "学群/学類/専攻を入力してください",
            })}
            className="w-full p-2 border rounded"
            />
          {errors.department && (
            <span className="text-red-500">
              {errors.department.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">学年</label>
          <select
            {...register("grade", { required: "学年を選択してください" })}
            className="w-full p-2 border rounded"
            >
            <option value="">選択してください</option>
            <option value="0">学部1年</option>
            <option value="1">学部2年</option>
            <option value="2">学部3年</option>
            <option value="3">学部4年</option>
            <option value="4">修士1年</option>
            <option value="5">修士2年</option>
            <option value="6">博士1年</option>
            <option value="7">博士2年</option>
            <option value="8">博士3年</option>
          </select>
          {errors.grade && (
            <span className="text-red-500">
              {errors.grade.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">卒業予定年度</label>
          <select
            {...register("graduationYear", {
              required: "卒業予定年度を選択してください",
            })}
            className="w-full p-2 border rounded"
            >
            <option value="">選択してください</option>
            <option value="2024">2024年</option>
            <option value="2025">2025年</option>
            <option value="2026">2026年</option>
            <option value="2027">2027年</option>
            <option value="2028">2028年</option>
            <option value="2029">2029年</option>
          </select>
          {errors.graduationYear && (
            <span className="text-red-500">
              {errors.graduationYear.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">卒業予定月</label>
          <select
            {...register("graduationMonth", {
              required: "卒業予定月を選択してください",
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">選択してください</option>
            <option value="1">1月</option>
            <option value="2">2月</option>
            <option value="3">3月</option>
            <option value="4">4月</option>
            <option value="5">5月</option>
            <option value="6">6月</option>
            <option value="7">7月</option>
            <option value="8">8月</option>
            <option value="9">9月</option>
            <option value="10">10月</option>
            <option value="11">11月</option>
            <option value="12">12月</option>
          </select>
          {errors.graduationMonth && (
            <span className="text-red-500">
              {errors.graduationMonth.message as React.ReactNode}
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

export default Signup;
