"use client";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  gender: string;
  universityId: string;
  department: string;
  grade: string;
  graduationYear: string;
  graduationMonth: string;
};

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // `grade`, `graduationYear`, `graduationMonth` を整数型に変換
    const formattedData = {
      ...data,
      grade: parseInt(data.grade, 10),
      graduationYear: parseInt(data.graduationYear, 10),
      graduationMonth: parseInt(data.graduationMonth, 10),
    };

    try {
      const response = await axios.post("http://localhost:3000/auth", {
        email: formattedData.email,
        password: formattedData.password,
        last_name: formattedData.lastName,
        first_name: formattedData.firstName,
        last_name_kana: formattedData.lastNameKana,
        first_name_kana: formattedData.firstNameKana,
        gender: formattedData.gender,
        university_id: formattedData.universityId,
        department: formattedData.department,
        grade: formattedData.grade, // 整数として送信
        graduation_year: formattedData.graduationYear, // 整数として送信
        graduation_month: formattedData.graduationMonth, // 整数として送信
      });

      console.log("Account created successfully:", response.data);
      // 必要に応じてリダイレクトや成功メッセージの表示を追加
    } catch (error) {
      console.error("Account creation failed:", error);
      // エラーメッセージを表示するなどの処理を追加
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-8">
      {/* メールアドレス入力 */}
      <div className="mb-4">
        <label className="block text-gray-700">大学のメールアドレス</label>
        <input
          type="email"
          {...register("email", { required: "メールアドレスを入力してください" })}
          className="w-full p-2 border rounded"
          placeholder="大学のメールアドレスを入力してください"
        />
        {errors.email && <span className="text-red-500">{errors.email.message as React.ReactNode}</span>}
      </div>

      {/* パスワード入力 */}
      <div className="mb-4">
        <label className="block text-gray-700">パスワード</label>
        <input
          type="password"
          {...register("password", { required: "パスワードを入力してください" })}
          className="w-full p-2 border rounded"
        />
        {errors.password && <span className="text-red-500">{errors.password.message as React.ReactNode}</span>}
      </div>

      {/* 名前の入力 */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">姓</label>
          <input
            type="text"
            {...register("lastName", { required: "姓を入力してください" })}
            className="w-full p-2 border rounded"
          />
          {errors.lastName && <span className="text-red-500">{errors.lastName.message as React.ReactNode}</span>}
        </div>
        <div>
          <label className="block text-gray-700">名</label>
          <input
            type="text"
            {...register("firstName", { required: "名を入力してください" })}
            className="w-full p-2 border rounded"
          />
          {errors.firstName && <span className="text-red-500">{errors.firstName.message as React.ReactNode}</span>}
        </div>
      </div>

      {/* カタカナの名前入力 */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">姓 (カタカナ)</label>
          <input
            type="text"
            {...register("lastNameKana", { required: "姓 (カタカナ) を入力してください" })}
            className="w-full p-2 border rounded"
          />
          {errors.lastNameKana && <span className="text-red-500">{errors.lastNameKana.message as React.ReactNode}</span>}
        </div>
        <div>
          <label className="block text-gray-700">名 (カタカナ)</label>
          <input
            type="text"
            {...register("firstNameKana", { required: "名 (カタカナ) を入力してください" })}
            className="w-full p-2 border rounded"
          />
          {errors.firstNameKana && <span className="text-red-500">{errors.firstNameKana.message as React.ReactNode}</span>}
        </div>
      </div>

      {/* 性別選択 */}
      <div className="mb-4">
        <label className="block text-gray-700">性別</label>
        <select
          {...register("gender", { required: "性別を選択してください" })}
          className="w-full p-2 border rounded"
        >
          <option value="">選択してください</option>
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">その他</option>
        </select>
        {errors.gender && <span className="text-red-500">{errors.gender.message as React.ReactNode}</span>}
      </div>

      {/* 大学/大学院選択 */}
      <div className="mb-4">
        <label className="block text-gray-700">大学/大学院</label>
        <select
          {...register("universityId", { required: "大学/大学院を選択してください" })}
          className="w-full p-2 border rounded"
        >
          <option value="">選択してください</option>
          <option value="1">筑波大学</option>
          <option value="2">筑波大学大学院</option>
          <option value="3">筑波技術大学</option>
        </select>
        {errors.universityId && <span className="text-red-500">{errors.universityId.message as React.ReactNode}</span>}
      </div>

      {/* 学部/学科/専攻 */}
      <div className="mb-4">
        <label className="block text-gray-700">学部/学科/専攻</label>
        <input
          type="text"
          {...register("department", { required: "学部/学科/専攻を入力してください" })}
          className="w-full p-2 border rounded"
        />
        {errors.department && <span className="text-red-500">{errors.department.message as React.ReactNode}</span>}
      </div>

      {/* 学年 */}
      <div className="mb-4">
        <label className="block text-gray-700">学年</label>
        <select
          {...register("grade", { required: "学年を選択してください" })}
          className="w-full p-2 border rounded"
        >
          <option value="">選択してください</option>
          <option value="1">1年</option>
          <option value="2">2年</option>
          <option value="3">3年</option>
          <option value="4">4年</option>
        </select>
        {errors.grade && <span className="text-red-500">{errors.grade.message as React.ReactNode}</span>}
      </div>

      {/* 卒業予定年度 */}
      <div className="mb-4">
        <label className="block text-gray-700">卒業予定年度</label>
        <select
          {...register("graduationYear", { required: "卒業予定年度を選択してください" })}
          className="w-full p-2 border rounded"
        >
          <option value="">選択してください</option>
          <option value="2024">2024年</option>
          <option value="2025">2025年</option>
          <option value="2026">2026年</option>
          <option value="2027">2027年</option>
        </select>
        {errors.graduationYear && <span className="text-red-500">{errors.graduationYear.message as React.ReactNode}</span>}
      </div>

      {/* 卒業予定月 */}
      <div className="mb-4">
        <label className="block text-gray-700">卒業予定月</label>
        <select
          {...register("graduationMonth", { required: "卒業予定月を選択してください" })}
          className="w-full p-2 border rounded"
        >
          <option value="">選択してください</option>
          <option value="1">1月</option>
          <option value="2">2月</option>
          <option value="3">3月</option>
          <option value="4">4月</option>
        </select>
        {errors.graduationMonth && <span className="text-red-500">{errors.graduationMonth.message as React.ReactNode}</span>}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          登録
        </button>
      </div>
    </form>
  );
};

export default Signup;
