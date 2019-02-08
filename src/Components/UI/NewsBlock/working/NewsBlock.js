import React from 'react';
import classes from './NewsBlock.css';
import Aux from '../../../hoc/aAux';

const NewsBlock = (props) => (
    <Aux>
        <div className={classes.NewsBlock}>
            <img src={props.imgsrc} style={{ width: '150px', height: '150px', borderRadius:'5px' }} alt='img' />
            <div className={classes.title}>
                {props.title}
                <div style ={{ fontSize:'12px', paddingTop:'15px'}}>
                    {props.descryption}
                </div>
            </div>

        </div>
    </Aux>
);

export default NewsBlock;