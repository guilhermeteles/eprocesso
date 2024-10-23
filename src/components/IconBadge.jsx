import PropTypes from 'prop-types';

const IconBadge = ({ text, icon, color }) => {
  // Determine background and text colors based on the provided color
  const colorClasses = {
    default: 'bg-gray-100 text-gray-600',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-800',
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    purple: 'bg-purple-100 text-purple-700',
    pink: 'bg-pink-100 text-pink-700',
  };

  const iconColorClasses = {
    default: 'stroke-gray-700/50 group-hover:stroke-gray-700/75',
    red: 'stroke-red-700/50 group-hover:stroke-red-700/75',
    yellow: 'stroke-yellow-800/50 group-hover:stroke-yellow-800/75',
    green: 'stroke-green-800/50 group-hover:stroke-green-800/75',
    blue: 'stroke-blue-800/50 group-hover:stroke-blue-800/75',
    indigo: 'stroke-indigo-700/50 group-hover:stroke-indigo-700/75',
    purple: 'stroke-purple-700/50 group-hover:stroke-purple-700/75',
    pink: 'stroke-pink-800/50 group-hover:stroke-pink-800/75',
  };

  return (
    <span className={`inline-flex items-center gap-x-0.5 rounded-sm ${colorClasses[color] || colorClasses.default} px-2 py-1 text-xs w-fit`}>
      
      <button type="button" className={`group relative -ml-1 px-1 py-0 text-xs rounded-xs hover:${color}-600/20`}>
        {icon && (
          <svg viewBox="0 0 14 14" className={`h-3 w-3 ${iconColorClasses[color] || iconColorClasses.default}`}>
            {icon}
          </svg>
        )}
        <span className="absolute -inset-1" />
      </button>
      {text}
    </span>
  );
};

// PropTypes validation
IconBadge.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element, // This allows passing any React element as the icon
  color: PropTypes.oneOf(['default', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']),
};

// Default props
IconBadge.defaultProps = {
  icon: null, // Default value for icon
  color: 'default', // Default color
};

export default IconBadge;
