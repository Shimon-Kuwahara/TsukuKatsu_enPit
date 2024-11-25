
export interface User {
  id: number;
  name: string | null;
  nickname: string | null;
  image: string | null;
  email: string;
  last_name: string;
  first_name: string;
  last_name_kana: string;
  first_name_kana: string;
  gender: string;
  university: string;
  department: string;
  grade: string;
  graduation_year: number;
  graduation_month: string;
  prefecture: string | null;
  birth_date: string | null;
  past_efforts: string | null;
  future_goals: string | null;
  programing_experience: string | null;
  design_experience: string | null;
  internship_experience: string | null;
  achievment_url: string | null;
  qualification: string | null;
  desired_location: string[];
  desired_company_size: string[];
  desired_job: string[];
  desired_industry: string[];
}
