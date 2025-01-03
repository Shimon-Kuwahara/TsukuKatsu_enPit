export type Company = {
  id: number;
  name: string;
  description: string;
  website_url: string;
  location: string;
  email: string;
  phone_number: string;
  logo_url: string;
  picture_url: string;
  business_description: string;
  culture: string;
  appeal: string;
  industry: string;
  created_at: string;         // Rails からは ISO8601 形式の文字列が来る想定
  updated_at: string;         // 同上
};