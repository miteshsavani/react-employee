import React from 'react';
import classes from './NewsBlock.css';
import Aux from '../../../hoc/aAux';

const NewsBlock = (props) => (
    <Aux>
        <div className={classes.NewsBlock}>
            <div className={classes.title}>
                {props.title}
            </div>
        </div>
    </Aux>
);

export default NewsBlock;