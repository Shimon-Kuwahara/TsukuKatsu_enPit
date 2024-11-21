import { User } from './user';
import { Company } from './company';

export interface Message {
  id: number;
  content: string;
  sender_type: 'User' | 'Company';
  sender_id: number;
  sender: User | Company;
  created_at: string;
}
