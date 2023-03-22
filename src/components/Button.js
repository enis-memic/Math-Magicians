import PropTypes from 'prop-types';
import './Calculator.css';

const Button = ({ value, className, calcClick }) => (
  <>
    <button
      type="button"
      className={className}
      onClick={() => calcClick(value)}
    >
      {value}
    </button>
  </>
);

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  calcClick: PropTypes.func.isRequired,
};
