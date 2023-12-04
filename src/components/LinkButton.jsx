import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ label, onClick, variant, to }) {
  const variantClass = variant ? `btn-${variant}` : 'btn-primary';

  return (
    <Link to={to} type="button" className={`btn ${variantClass}`} onClick={onClick}>
      {label}
    </Link>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
