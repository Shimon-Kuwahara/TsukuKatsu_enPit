import { User } from "../../types/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type UserSchoolInfoCardProps = {
user: User;
  onEdit: () => void;
};
  
const UserSchoolInfoCard: React.FC<UserSchoolInfoCardProps> = ({ user, onEdit }) => {
  return (
  	<div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
    	<div className="flex justify-between items-start mb-4">
    		<h2 className="text-xl font-bold text-gray-700">学校情報</h2>
				<button
					className="rounded-full border border-gray-200 shadow-xl w-10 h-10"
					onClick={onEdit}
				>
        	<FontAwesomeIcon icon={faPen} className="text-gray-500" />
    		</button>
    	</div>
		<div className="space-y-4">
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-500 w-32">大学/大学院</span>
					<span className="text-sm text-gray-700">{user.university}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-500 w-32">学群/学類/専攻</span>
					<span className="text-sm text-gray-700">{user.department}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-500 w-32">学年</span>
					<span className="text-sm text-gray-700">{user.grade}</span>
				</div>
				<div className="flex items-center border-b pb-2">
					<span className="text-sm text-gray-500 w-32">卒業予定年月</span>
					<span className="text-sm text-gray-700">{user.graduation_year}年{user.graduation_month}月</span>
				</div>
			</div>
  	</div>
  );
};
  
export default UserSchoolInfoCard;