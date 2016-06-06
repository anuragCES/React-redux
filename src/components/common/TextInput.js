import React, {PropTypes} from 'react';

const TextInput = ({name, placeholder, label, onChange, value, error}) => {
    "use strict";
    let wrapperClass = 'form-group';
    if(error && error.length > 0){
        wrapperClass += 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name} >{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    />
                {error && <div className="alert alert-message">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;