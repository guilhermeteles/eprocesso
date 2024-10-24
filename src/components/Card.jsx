import PropTypes from 'prop-types';

const Card = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-[#3D4551]">{title}</h2>
      <p className="text-[#3D4551]">This is some content for {title}.</p>
    </div>
  );
};

// Add prop types validation
Card.propTypes = {
  title: PropTypes.string.isRequired, // title is a required string
};

export default Card;