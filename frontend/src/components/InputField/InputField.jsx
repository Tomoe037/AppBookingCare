import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InputField.scss';

const InputField = ({ icon, type = 'text', placeholder = '', value, onChange , name}) => {
  return (
    <div className="input-field">
      <FontAwesomeIcon icon={icon} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default InputField;
