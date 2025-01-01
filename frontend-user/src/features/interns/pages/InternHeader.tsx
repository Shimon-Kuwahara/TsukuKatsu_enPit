import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type InternHeaderProps = {
  onFilterClick: () => void;
};

const InternHeader: React.FC<InternHeaderProps> = ({ onFilterClick }) => {
  return (
    <div className="flex justify-end my-4 mr-4">
      <button
        onClick={onFilterClick}
        className="px-4 py-2 bg-main-col-mid text-sm text-white rounded-lg flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        フィルター
      </button>
    </div>
  );
};

export default InternHeader;
