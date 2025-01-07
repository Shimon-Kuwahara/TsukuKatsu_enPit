// src/types.ts

// User Interface
export interface User {
  id: number;
  name?: string;
  nickname?: string;
  image?: string;
  email: string;
  created_at: string;
  updated_at: string;
  last_name: string;
  first_name: string;
  last_name_kana: string;
  first_name_kana: string;
  gender: number;
  university: number;
  department: string;
  grade: number;
  graduation_year: number;
  graduation_month: number;
  prefecture?: number;
  birth_date?: string;
  qualification?: string;
  programing_experience?: string;
  design_experience?: string;
  internship_experience?: string;
  achievement_url?: string;
  past_efforts?: string;
  future_goals?: string;
}

// Recruitment Interface
export interface Recruitment {
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
  // ... include associations if necessary
}

// Intern Interface
export interface Intern {
  id: number;
  nickname: string;
  department: number;
  grade: number;
  labo?: string;
  club?: string;
  achievements?: string;
  experience?: string;
  company_name?: string;
  intern_detail: string;
  work_duration_description?: string;
  weekly_hours_description?: string;
  hourly_wage_description?: string;
  work_style?: string;
  application_reason?: string;
  acquired_skill?: string;
  appeal?: string;
  advise?: string;
  evaluation: number;
  evaluation_reason?: string;
  intern_overview: string;
  catchphrase: string;
  hourly_wage?: number;
  weekly_hours?: number;
  work_duration?: number;
  industry: number;
  occupation: number;
  recruitment_id?: number;
  created_at: string;
  updated_at: string;
  // ... include associations if necessary
}

// Application Interface
export interface Application {
  id: number;
  user_id: number;
  recruitment_id: number;
  interns_id: number;
  created_at: string;
  updated_at: string;
  user: User;
  recruitment: Recruitment;
  intern: Intern;
}
