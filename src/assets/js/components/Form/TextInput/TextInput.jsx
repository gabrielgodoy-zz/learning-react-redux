import React, { PropTypes } from 'react';
import '../Form.scss';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div styleName={wrapperClass}>
      <form>
        <div styleName="field">
          <label htmlFor={name}>{label}
            <input
              type="text"
              name={name}
              id={name}
              styleName="form-control"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </label>
          {error && <div styleName="alert alert-danger">{error}</div>}
        </div>
      </form>
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

export default TextInput;
