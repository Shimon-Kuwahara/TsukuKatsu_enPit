import { User } from "../../types/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type UserExperienceCardProps = {
  user: User;
  onEdit: () => void;
};
  
const UserExperienceCard: React.FC<UserExperienceCardProps> = ({ user, onEdit }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
			<div className="flex justify-between items-start mb-4">
				<h2 className="text-xl font-bold text-gray-700">経験</h2>
				<button
					className="rounded-full border border-gray-200 shadow-xl w-10 h-10"
					onClick={onEdit}
				>
					<FontAwesomeIcon icon={faPen} className="text-gray-500" />
				</button>
			</div>
			<div className="space-y-4">
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">プログラミング経験</span>
					<span className="text-sm text-gray-700">{user.programing_experience}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-400 w-32">デザイン経験</span>
					<span className="text-sm text-gray-700">{user.design_experience}</span>
				</div>
        <div className="flex items-center border-b pb-2">
          <span className="text-sm text-gray-400 w-32">インターン経験</span>
          <span className="text-sm text-gray-700">{user.internship_experience}</span>
        </div>
        <div className="flex items-center border-b pb-2">
          <span className="text-sm text-gray-400 w-32">実績の分かるURL</span>
          <span className="text-sm text-gray-700">{user.achievment_url}</span>
        </div>
        <div className="flex items-center border-b pb-2">
          <span className="text-sm text-gray-400 w-32">資格など</span>
          <span className="text-sm text-gray-700">{user.qualification}</span>
        </div>
			</div>
		</div>
	);
};
  
export default UserExperienceCard;
  