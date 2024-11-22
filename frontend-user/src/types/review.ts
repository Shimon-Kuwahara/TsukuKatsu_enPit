export interface UserForReview {
  last_name: string;
  first_name: string;
  university: string;
  department: string;
}

export interface Review {
  id: number;
  user_id: number;
  company_id: number;
  job_description: string;
  joining_reason_gap: string | null;
  work_life_balance: string | null;
  work_environment: string | null;
  selection_process: string | null;
  work_atmosphere: string | null;
  intern_relations: string | null;
  support: string | null;
  user: UserForReview;
  is_author: boolean;
  created_at: string;
  updated_at: string;
}
