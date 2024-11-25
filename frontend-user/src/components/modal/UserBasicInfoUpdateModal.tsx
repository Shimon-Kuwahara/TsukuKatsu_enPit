import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../../types/user";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type EnumOption = {
  key: string;
  value: number;
};

type UserBasicInfoUpdateModalProps = {
  user: User;
  onClose: () => void;
  onSave: (updatedData: Partial<User>) => void;
};

type FormValues = {
  last_name: string;
  first_name: string;
  last_name_kana: string;
  first_name_kana: string;
  gender: string;
  birth_date: string | null;
  prefecture: string | null;
};

const UserBasicInfoUpdateModal: React.FC<UserBasicInfoUpdateModalProps> = ({
  user,
  onClose,
  onSave,
}) => {
  const [genders, setGenders] = useState<EnumOption[]>([]);
  const [prefectures, setPrefectures] = useState<EnumOption[]>([]);

  // フォーム管理
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      last_name: user.last_name,
      first_name: user.first_name,
      last_name_kana: user.last_name_kana,
      first_name_kana: user.first_name_kana,
      gender: user.gender || "",
      birth_date: user.birth_date || "",
      prefecture: user.prefecture || "",
    },
  });

  // バックエンドから enum データを取得
  useEffect(() => {
    const fetchEnums = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}user_enums`
        );
        setGenders(response.data.gender);
        setPrefectures(response.data.prefecture);
      } catch (error) {
        console.error("Enum データの取得に失敗しました:", error);
      }
    };

    fetchEnums();
  }, []);

  // モーダル表示中に背景スクロールを無効化
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // フォーム送信処理
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSave(data); // 更新されたデータを親コンポーネントに渡す
    onClose(); // モーダルを閉じる
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-h-[70vh] max-w-md w-full overflow-y-auto relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">基本情報を編集</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 姓 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">姓</label>
            <input
              type="text"
              {...register("last_name", { required: "姓は必須です" })}
              className={`mt-1 p-2 border rounded w-full ${
                errors.last_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
            )}
          </div>
          {/* 名 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">名</label>
            <input
              type="text"
              {...register("first_name", { required: "名は必須です" })}
              className={`mt-1 p-2 border rounded w-full ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
            )}
          </div>
          {/* 姓(かな) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">姓 (かな)</label>
            <input
              type="text"
              {...register("last_name_kana", { required: "姓 (かな) は必須です" })}
              className={`mt-1 p-2 border rounded w-full ${
                errors.last_name_kana ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.last_name_kana && (
              <p className="text-red-500 text-sm mt-1">{errors.last_name_kana.message}</p>
            )}
          </div>
          {/* 名(かな) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">名 (かな)</label>
            <input
              type="text"
              {...register("first_name_kana", { required: "名 (かな) は必須です" })}
              className={`mt-1 p-2 border rounded w-full ${
                errors.first_name_kana ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.first_name_kana && (
              <p className="text-red-500 text-sm mt-1">{errors.first_name_kana.message}</p>
            )}
          </div>
          {/* TODO: 生年月日が入力しずらい */}
          {/* 生年月日 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">生年月日</label>
            <input
              type="date"
              {...register("birth_date")}
              className={`mt-1 p-2 border rounded w-full ${
                errors.birth_date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.birth_date && (
              <p className="text-red-500 text-sm mt-1">{errors.birth_date.message}</p>
            )}
          </div>
          {/* 性別 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">性別</label>
            <select
              {...register("gender", { required: "性別を選択してください" })}
              className={`mt-1 p-2 border rounded w-full ${
                errors.gender ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">選択してください</option>
              {genders.map((option) => (
                <option key={option.value} value={option.key}>
                  {option.key}
                </option>
              ))}
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
            )}
          </div>
          {/* 居住地 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">居住地</label>
            <select
              {...register("prefecture")}
              className={`mt-1 p-2 border rounded w-full ${
                errors.prefecture ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">選択してください</option>
              {prefectures.map((option) => (
                <option key={option.value} value={option.key}>
                  {option.key}
                </option>
              ))}
            </select>
            {errors.prefecture && (
              <p className="text-red-500 text-sm mt-1">{errors.prefecture.message}</p>
            )}
          </div>
          {/* ボタン */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={onClose}
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserBasicInfoUpdateModal;
