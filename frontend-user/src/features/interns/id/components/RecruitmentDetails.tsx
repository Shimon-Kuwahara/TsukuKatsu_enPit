import { Recruitment } from "@/types/recruitment";

type RecruitmentDetailsProps = {
  recruitment: Recruitment;  // 親コンポーネントから取得
};

export default function RecruitmentDetails({ recruitment }: RecruitmentDetailsProps) {
  // 企業情報がある場合にのみ表示 (company は Optional なので ? をつける)
  const company = recruitment.company;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>求人情報</h2>
      <p>求人タイトル: {recruitment.title}</p>
      <p>仕事内容: {recruitment.description}</p>
      {/* 他にも必要な求人情報を表示する */}
      {/* 例) <p>時給: {recruitment.hourly_wage}</p> など */}

      {company && (
        <div style={{ marginTop: "1rem" }}>
          <h3>会社情報</h3>
          <p>会社名: {company.name}</p>
          <p>所在地: {company.location}</p>
          {/* 他の会社情報も表示 */}
        </div>
      )}
    </div>
  );
}
