import PropTypes from 'prop-types';

const darkenColor = (hex, percent) => {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;

  return `#${(0x1000000 + (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 0 ? 0 : B) : 255)).toString(16).slice(1)}`;
};

export const IconButton = ({ icon, name, color, onClick, letter, textColor = '#FFFFFF'  }) => {
  const hoverColor = darkenColor(color, 5); // Darken by 5% for hover effect
  const activeColor = darkenColor(color, 15); // Darken by 15% for active effect

  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded focus:outline-none flex justify-center items-center"
      style={{ backgroundColor: color }} // Base color
      title={name}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor; // Change to hover color
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = color; // Revert to base color
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.backgroundColor = activeColor; // Change to active color
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor; // Change back to hover color on release
      }}
    >
      <i className={icon} style={{ color: textColor }}></i>
      <span  style={{ color: textColor }} className="text-sm">{letter}</span>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired, // Base color
  onClick: PropTypes.func,
  letter: PropTypes.string,
  textColor: PropTypes.string,
};


export const OutlinedIconButton = ({ icon, name, onClick }) => {
  const borderColor = '#DFE1E2'; // gray-50 in hex
  const iconColor = '#0050D8'; // blue-600 in hex
  const hoverBorderColor = darkenColor(borderColor, 5); // Darken by 5% for hover effect
  const activeBorderColor = darkenColor(borderColor, 15); // Darken by 15% for active effect

  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded text-white border focus:outline-none"
      style={{
        backgroundColor: 'white', // White background
        borderColor: borderColor, // Border color
        color: iconColor, // Icon color
      }}
      title={name}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = hoverBorderColor; // Change to hover border color
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = borderColor; // Revert to original border color
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.borderColor = activeBorderColor; // Change to active border color
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.borderColor = hoverBorderColor; // Change back to hover border color on release
      }}
    >
      <i className={icon} style={{ color: iconColor }}></i> {/* Icon color */}
    </button>
  );
};

OutlinedIconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
