import { User } from "../../types/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type UserSelfPRCardProps = {
  user: User;
  onEdit: () => void;
};
  
const UserSelfPRCard: React.FC<UserSelfPRCardProps> = ({ user, onEdit }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
			<div className="flex justify-between items-start mb-4">
				<h2 className="text-xl font-bold text-gray-700">自己PR</h2>
				<button
					className="rounded-full border border-gray-200 shadow-xl w-10 h-10"
					onClick={onEdit}
				>
					<FontAwesomeIcon icon={faPen} className="text-gray-500" />
				</button>
			</div>
			<div className="space-y-4">
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">これまでに力を入れたこと</span>
					<span className="text-sm text-gray-700">{user.past_efforts}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">これからやりたいこと</span>
					<span className="text-sm text-gray-700">{user.future_goals}</span>
				</div>
			</div>
		</div>
	);
};
  
export default UserSelfPRCard;
  