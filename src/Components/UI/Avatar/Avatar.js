import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return(
        <img src={props.avatarSrc} alt={props.avatarAlt} className={props.class} />
    );
}

export default Avatar;