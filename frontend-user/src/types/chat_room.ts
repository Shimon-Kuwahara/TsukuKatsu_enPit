import { Message } from './message';
import { Company } from './company';
import { User } from './user';
import { Recruitment } from './recruitment';

export interface ChatRoom {
  id: number;
  user_id: number;
  company_id: number;
  recruitment_id: number;
  messages: Message[];
  company: Company;
  user: User;
  recruitment: Recruitment;
}
