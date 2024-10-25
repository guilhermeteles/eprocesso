import PropTypes from 'prop-types';

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
};

const rgbToHsl = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h, s, l };
};

const hslToRgb = (h, s, l) => {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
};

const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`;
};

const darkenHexColor = (hex, amount) => {
  // Convert hex to RGB
  const { r, g, b } = hexToRgb(hex);

  // Convert RGB to HSL
  let { h, s, l } = rgbToHsl(r, g, b);

  // Darken the color by increasing the lightness
  l = Math.max(0, l - amount); // Ensure l stays within 0-1

  // Convert HSL back to RGB
  const rgb = hslToRgb(h, s, l);

  // Convert RGB back to hex
  return rgbToHex(rgb.r, rgb.g, rgb.b);
};


const IconBadge = ({ icon, text, color }) => {
  return (
    <div 
      className="flex items-center gap-2 px-2 pb-0.5 rounded-md text-sm"
      style={{ backgroundColor: color }}
    >
      <span style={{ color: darkenHexColor(color, 0.2) }}>{icon}</span>
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