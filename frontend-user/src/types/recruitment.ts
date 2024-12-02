interface User {
  last_name: string;
  first_name: string;
  grade: number; // or string, depending on your data type
  department: string;
}

interface Company {
  name: string;
}

export type Recruitment = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  company_id: number;
  user: User;
  company: Company;
  industry: string;
  benefits: string;
  job_description: string;
  job_titles: string;
  job_engineer: boolean;
  job_designer: boolean;
  job_sales: boolean;
  job_planning: boolean;
  job_marketing: boolean;
  job_writer: boolean;
  job_others: boolean;
  skills_acquired: string;
  wage: string;
  salary_notes: string;
  work_location: string;
  min_work_period: string;
  min_work_days: string;
  min_work_hours: string;
  commute_support: string;
  required_skills: string;
  welcome_skills: string;
  promotion_system: string;
  remote_policy: string;
  selection_flow: string;
  deadline: string;
  welfare_benefits: string;
  apply_url: string;
};
