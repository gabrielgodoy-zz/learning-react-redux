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
              id={name}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              styleName="form-control"
              type="text"
              value={value}
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
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
