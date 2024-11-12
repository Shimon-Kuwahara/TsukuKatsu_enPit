"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Recruitment } from "@/types/recruitment";
import Cookies from "js-cookie";

export default function Create() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Recruitment>();

  const onSubmit: SubmitHandler<Recruitment> = async (data) => {
    try {
      const companyId = Cookies.get("id");

      if (!companyId) {
        alert("会社IDが見つかりません。ログインしてください。");
        return;
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}recruitments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recruitment: {
              ...data,
              company_id: parseInt(companyId, 10),
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create recruitment");
      }

      alert("求人が作成されました");
      reset();
    } catch (error) {
      console.error("Error creating recruitment:", error);
      alert("求人作成に失敗しました");
    }
  };

  return (
    <div className="p-12">
      <h2 className="font-bold text-xl mb-4">求人作成</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2">タイトル</label>
          <input
            type="text"
            {...register("title", { required: "タイトルは必須です" })}
            className="border p-2 w-full"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">説明</label>
          <textarea
            {...register("description", { required: "説明は必須です" })}
            className="border p-2 w-full"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">業界</label>
          <input
            type="text"
            {...register("industry", { required: "業界は必須です" })}
            className="border p-2 w-full"
          />
          {errors.industry && (
            <p className="text-red-500">{errors.industry.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">特性</label>
          <textarea
            {...register("benefits", { required: "特性は必須です" })}
            className="border p-2 w-full"
          ></textarea>
          {errors.benefits && (
            <p className="text-red-500">{errors.benefits.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">仕事内容</label>
          <textarea
            {...register("job_description", { required: "仕事内容は必須です" })}
            className="border p-2 w-full"
          ></textarea>
          {errors.job_description && (
            <p className="text-red-500">{errors.job_description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">職務タイトル</label>
          <input
            type="text"
            {...register("job_titles", { required: "職務タイトルは必須です" })}
            className="border p-2 w-full"
          />
          {errors.job_titles && (
            <p className="text-red-500">{errors.job_titles.message}</p>
          )}
        </div>

        {/* Boolean checkboxes for job roles */}
        <div className="mb-4">
          <label className="block mb-2">エンジニア職務</label>
          <input type="checkbox" {...register("job_engineer")} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">デザイナー職務</label>
          <input type="checkbox" {...register("job_designer")} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">セールス職務</label>
          <input type="checkbox" {...register("job_sales")} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">プランナー職務</label>
          <input type="checkbox" {...register("job_planning")} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">マーケティング職務</label>
          <input type="checkbox" {...register("job_marketing")} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">ライター職務</label>
          <input type="checkbox" {...register("job_writer")} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">その他の職務</label>
          <input type="checkbox" {...register("job_others")} />
        </div>

        <div className="mb-4">
          <label className="block mb-2">取得できるスキル</label>
          <input
            type="text"
            {...register("skills_acquired", {
              required: "取得できるスキルは必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.skills_acquired && (
            <p className="text-red-500">{errors.skills_acquired.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">給与</label>
          <input
            type="text"
            {...register("wage", { required: "給与は必須です" })}
            className="border p-2 w-full"
          />
          {errors.wage && <p className="text-red-500">{errors.wage.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2">給与ノート</label>
          <textarea
            {...register("salary_notes", { required: "給与ノートは必須です" })}
            className="border p-2 w-full"
          ></textarea>
          {errors.salary_notes && (
            <p className="text-red-500">{errors.salary_notes.message}</p>
          )}
        </div>

        {/* More text inputs */}
        <div className="mb-4">
          <label className="block mb-2">勤務地</label>
          <input
            type="text"
            {...register("work_location", { required: "勤務地は必須です" })}
            className="border p-2 w-full"
          />
          {errors.work_location && (
            <p className="text-red-500">{errors.work_location.message}</p>
          )}
        </div>

        {/* Additional fields (min_work_period, min_work_days, etc.) */}
        <div className="mb-4">
          <label className="block mb-2">最低勤務期間</label>
          <input
            type="text"
            {...register("min_work_period", {
              required: "最低勤務期間は必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.min_work_period && (
            <p className="text-red-500">{errors.min_work_period.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">最低勤務日数(/週)</label>
          <input
            type="text"
            {...register("min_work_days", {
              required: "最低勤務期間は必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.min_work_days && (
            <p className="text-red-500">{errors.min_work_days.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">最低勤務時間</label>
          <input
            type="text"
            {...register("min_work_hours", {
              required: "最低勤務時間は必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.min_work_hours && (
            <p className="text-red-500">{errors.min_work_hours.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">交通費</label>
          <input
            type="text"
            {...register("commute_support", { required: "交通費は必須です" })}
            className="border p-2 w-full"
          />
          {errors.commute_support && (
            <p className="text-red-500">{errors.commute_support.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">必要なスキル</label>
          <textarea
            {...register("required_skills", {
              required: "必要なスキルは必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.required_skills && (
            <p className="text-red-500">{errors.required_skills.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">歓迎するスキル</label>
          <textarea
            {...register("welcome_skills", {
              required: "歓迎するスキルは必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.welcome_skills && (
            <p className="text-red-500">{errors.welcome_skills.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">昇進制度</label>
          <input
            type="text"
            {...register("promotion_system", {
              required: "昇進制度は必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.promotion_system && (
            <p className="text-red-500">{errors.promotion_system.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">リモートポリシー</label>
          <input
            type="text"
            {...register("remote_policy", {
              required: "リモートポリシーは必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.remote_policy && (
            <p className="text-red-500">{errors.remote_policy.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">選考フロー</label>
          <textarea
            {...register("selection_flow", {
              required: "選考フローは必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.selection_flow && (
            <p className="text-red-500">{errors.selection_flow.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">締め切り</label>
          <input
            type="text"
            {...register("deadline", { required: "締め切りは必須です" })}
            className="border p-2 w-full"
          />
          {errors.deadline && (
            <p className="text-red-500">{errors.deadline.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">福利厚生</label>
          <input
            type="text"
            {...register("welfare_benefits", {
              required: "福利厚生は必須です",
            })}
            className="border p-2 w-full"
          />
          {errors.welfare_benefits && (
            <p className="text-red-500">{errors.welfare_benefits.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">応募URL</label>
          <input
            type="text"
            {...register("apply_url", { required: "応募URLは必須です" })}
            className="border p-2 w-full"
          />
          {errors.apply_url && (
            <p className="text-red-500">{errors.apply_url.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          作成
        </button>
      </form>
    </div>
  );
}
