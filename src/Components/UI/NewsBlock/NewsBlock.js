import React from 'react';
import classes from './NewsBlock.css';
import Aux from '../../../hoc/aAux';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';

const NewsBlock = (props) => (
    <Aux>

        <Grid item>
            <Paper className={classes.paper} onClick={props.clicked}>
                <CardMedia
                    className={classes.image}
                    image={props.imgsrc}
                    title="Live from space album cover" />
                <CardContent className={classes.content}>
                    <Typography component="span" variant="subheading" className={classes.title}>
                        {props.title}
                    </Typography>
                </CardContent>
            </Paper>
        </Grid>
    </Aux>
);

export default NewsBlock;