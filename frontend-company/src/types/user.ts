
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
  postal_code: string | null;
  prefecture_id: number | null;
  city: string | null;
  phone_number: string | null;
  birth_place: string | null;
  nationality: string | null;
  birth_date: string | null;
  achievement: string | null;
  experience: string | null;
  github: string | null;
  portfolio: string | null;
  qualification: string | null;
  desired_workplace: string | null;
  desired_company_size: string | null;
  desired_job: string | null;
}
