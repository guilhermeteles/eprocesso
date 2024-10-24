import PropTypes from 'prop-types';

const IconBadge = ({ icon, text, color }) => {
  return (
    <div 
      className="flex items-center gap-2 px-2 pb-0.5 rounded-md text-sm"
      style={{ backgroundColor: color }}
    >
      <span className="text-gray-700">{icon}</span>
      <span className="text-gray-700 text-xs">{text}</span>
    </div>
  );
};

IconBadge.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default IconBadge;