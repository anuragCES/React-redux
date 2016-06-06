import React, {PropTypes} from 'react';

const Selectinput = ({name, defaultOption, label, onChange, value, error, options}) => {
    "use strict";
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                    >
                    <option value="">{defaultOption}</option>
                    {
                        options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                    }
                </select>
                {error && <div className="alert alert-message">{error}</div>}
            </div>
        </div>
    );
};

Selectinput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    defaultOption: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default Selectinput;