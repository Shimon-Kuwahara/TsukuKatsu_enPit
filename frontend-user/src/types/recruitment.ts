import { Company } from "./company"; // Company型を定義したファイルをインポート

export type Recruitment = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  company_id: number;
  other_informations: string;
  skills_acquired: string;
  hourly_wage: number;
  salary_notes: string;
  work_style: string;
  min_month: string;
  min_days: string;
  min_hours: string;
  required_skills: string;
  welcome_skills: string;
  selection_flow: string;
  occupation: string;
  image1?: string;
  image2?: string;
  image3?: string;
  status: boolean;
  company: Company;
};
