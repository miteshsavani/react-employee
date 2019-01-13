import React from 'react';
import './input.css';

const Input = (props) => {
    switch (props.type) {

        case 'text':
        case 'password':
            return (
                <input 
                    value={props.value} 
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange = {props.changed}
                    />
            );
        case 'button':
        case 'submit':
            return (
                <button 
                    type={props.type} 
                    className={props.class}
                    onClick={props.click}>{props.label}</button>
            );
        case 'label':
            return (
                <label> <b>{props.value}</b>{props.children}</label>
            );
        default:
            return null;
    }
}

export default Input;