import { Recruitment } from "@/types/recruitment";

type RecruitmentDetailsProps = {
  recruitment: Recruitment;
};

export default function RecruitmentDetails({ recruitment }: RecruitmentDetailsProps) {
  // company が存在する場合のみ表示
  const company = recruitment.company;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>求人情報</h2>
      <p>ID: {recruitment.id}</p>
      <p>求人タイトル: {recruitment.title}</p>
      <p>仕事内容: {recruitment.description}</p>
      <p>掲載開始日: {recruitment.created_at}</p>
      <p>掲載更新日: {recruitment.updated_at}</p>
      <p>会社ID: {recruitment.company_id}</p>
      <p>その他情報: {recruitment.other_informations}</p>
      <p>習得できるスキル: {recruitment.skills_acquired}</p>
      <p>時給: {recruitment.hourly_wage}</p>
      <p>給与についての補足: {recruitment.salary_notes}</p>
      <p>働き方: {recruitment.work_style}</p>
      <p>最低勤務月数: {recruitment.min_month}</p>
      <p>最低勤務日数(週): {recruitment.min_days}</p>
      <p>最低勤務時間(1日あたり): {recruitment.min_hours}</p>
      <p>必須スキル: {recruitment.required_skills}</p>
      <p>歓迎スキル: {recruitment.welcome_skills}</p>
      <p>選考フロー: {recruitment.selection_flow}</p>
      <p>職種: {recruitment.occupation}</p>
      <p>画像1: {recruitment.image1}</p>
      <p>画像2: {recruitment.image2}</p>
      <p>画像3: {recruitment.image3}</p>
      <p>ステータス(公開/非公開): {recruitment.status ? "公開" : "非公開"}</p>

      {company && (
        <div style={{ marginTop: "2rem" }}>
          <h3>会社情報</h3>
          <p>会社ID: {company.id}</p>
          <p>会社名: {company.name}</p>
          <p>会社の説明: {company.description}</p>
          <p>Webサイト: {company.website_url}</p>
          <p>所在地: {company.location}</p>
          <p>Email: {company.email}</p>
          <p>電話番号: {company.phone_number}</p>
          <p>ロゴURL: {company.logo_url}</p>
          <p>会社画像URL: {company.picture_url}</p>
          <p>事業内容: {company.business_description}</p>
          <p>社風: {company.culture}</p>
          <p>アピールポイント: {company.appeal}</p>
          <p>業界: {company.industry}</p>
          <p>会社情報作成日: {company.created_at}</p>
          <p>会社情報更新日: {company.updated_at}</p>
        </div>
      )}
    </div>
  );
}
