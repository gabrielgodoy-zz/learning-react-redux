import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Form.scss';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div styleName={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div styleName="field">
        <input
          type="text"
          name={name}
          styleName="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div styleName="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: 'Type text here',
  value: '',
  error: '',
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default CSSModules(TextInput, styles);
