import { User } from "../../types/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type UserBasicInfoCardProps = {
  user: User;
  onEdit: () => void;
};
  
const UserBasicInfoCard: React.FC<UserBasicInfoCardProps> = ({ user, onEdit }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
			<div className="flex justify-between items-start mb-4">
				<h2 className="text-xl font-bold text-gray-700">基本情報</h2>
				<button
					className="rounded-full border border-gray-200 shadow-xl w-10 h-10"
					onClick={onEdit}
				>
					<FontAwesomeIcon icon={faPen} className="text-gray-500" />
				</button>
			</div>
			<div className="text-center mb-6">
				<p className="text-xl font-bold text-gray-700">
					{user.last_name} {user.first_name}
				</p>
				<p className="text-sm text-gray-500">
					{user.last_name_kana} {user.first_name_kana}
				</p>
			</div>
			<div className="space-y-4">
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">性別</span>
					<span className="text-sm text-gray-700">{user.gender}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">生年月日</span>
					<span className="text-sm text-gray-700">{user.birth_date}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">居住地</span>
					<span className="text-sm text-gray-700">{user.prefecture}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">メールアドレス</span>
					<span className="text-sm text-gray-700">{user.email}</span>
				</div>
			</div>
		</div>
	);
};
  
export default UserBasicInfoCard;
  