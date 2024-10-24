import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function CollapsibleCard({ authorName, date, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-[#FFF5C2] p-4">
      <div className="flex justify-between items-center">
        {/* Author Name */}
        <div className="text-xs font-bold">{authorName}</div>

        {/* Date and Collapse Button */}
        <div className="flex items-center">
          <div className="text-xs mr-2">{date}</div>
          <button onClick={toggleCollapse} className="text-xs">
            <FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus} />
          </button>
        </div>
      </div>

      {/* Conditionally render the content based on the collapse state */}
      {!isCollapsed && (
        <div className="text-sm mt-2">
          {children}
        </div>
      )}
    </div>
  );
}

// PropTypes validation for the props
CollapsibleCard.propTypes = {
  authorName: PropTypes.string.isRequired, // Ensure that authorName is a string and is required
  date: PropTypes.string.isRequired, // Ensure that date is a string and is required
  children: PropTypes.node.isRequired, // Ensure children is a valid React node (string, element, etc.)
};

export default CollapsibleCard;
