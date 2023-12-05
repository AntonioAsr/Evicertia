import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ label, variant, to, disabled, style }) {
  const variantClass = variant ? `btn-${variant}` : 'btn-primary';

  if (to) {
    return disabled ? (
      <span
        className={`btn ${variantClass}`}
        style={{
          height: '50px',
          width: '75px',
          pointerEvents: 'none',
          opacity: 0.5,
          textDecoration: 'none',
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...style
        }}
      >
        {label}
      </span>
    ) : (
      <Link 
          to={to} 
          className={`btn ${variantClass}`} 
          style={{ 
            height: '50px',
            width: '75px',
            textDecoration: 'none',
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...style
        }}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`btn ${variantClass}`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
