import PropTypes from 'prop-types';

function Button({ label, onClick, variant }) {
  const variantClass = variant ? `btn-${variant}` : 'btn-primary';

  return (
    <button type="button" className={`btn ${variantClass}`} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default Button;
