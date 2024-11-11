import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ToggleExpandButton = ({ onContractAll, onExpandAll }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (isExpanded) {
      onContractAll();
    } else {
      onExpandAll();
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <button
      className="text-xs text-blue-500 underline hover:text-blue-700 flex items-center gap-1"
      onClick={handleToggle}
    >
      <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      {isExpanded ? 'Contrair Tudo' : 'Expandir Tudo'}
    </button>
  );
};

export default ToggleExpandButton;
