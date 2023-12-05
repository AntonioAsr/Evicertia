import PropTypes from 'prop-types';

function Button({ label, onClick, variant, style }) {
  const variantClass = variant ? `btn-${variant}` : 'btn-primary';

  return (
    <button 
      type="button"
      className={`btn ${variantClass}`}
      style={{...style}}
      onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
