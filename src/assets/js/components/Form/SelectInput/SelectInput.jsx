import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Form.scss';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => (
  <div styleName="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      {
        /* Note, value is set here rather than on the option -
         docs: https://facebook.github.io/react/docs/forms.html */
      }
      <select
        name={name}
        value={value}
        onChange={onChange}
        styleName="form-control"
      >
        <option value="">{defaultOption}</option>
        {
          options.map(option =>
            <option key={option.value} value={option.value}>{option.text}</option>)
        }
      </select>
      {error && <div styleName="alert alert-danger">{error}</div>}
    </div>
  </div>
);

SelectInput.defaultProps = {
  options: [{}],
  value: '',
  error: '',
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default CSSModules(SelectInput, styles);
