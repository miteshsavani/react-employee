import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) {

        case 'input':
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
    return (
        <div className='input'>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;