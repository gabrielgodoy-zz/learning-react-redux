import React, { PropTypes } from 'react';
import '../Form.scss';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => (
  <div styleName="form-group">
    <label htmlFor={name}>{label}
      <div styleName="field">
        {
          /*
            O value é setado aqui ao invés de em option
            docs: https://facebook.github.io/react/docs/forms.html
           */
        }
        <select
          name={name}
          onChange={onChange}
          styleName="form-control"
          value={value}
        >
          <option value="">{defaultOption}</option>
          {
            options.map(option =>
              <option key={option.value} value={option.value}>{option.text}</option>)
          }
        </select>
        {error && <div styleName="alert alert-danger">{error}</div>}
      </div>
    </label>
  </div>
);

SelectInput.defaultProps = {
  options: [{}],
  value: '',
  error: '',
};

SelectInput.propTypes = {
  defaultOption: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
};

export default SelectInput;
