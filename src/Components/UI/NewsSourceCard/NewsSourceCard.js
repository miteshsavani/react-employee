import React from 'react';
import classes from './NewsSourceCard.css';
import { Grid, CardContent, Typography, Paper } from "@material-ui/core";

const NewsSourceCard= (props) => (

         <Grid item>
                        <Paper className={classes.paper} onClick={props.clicked}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.name}
                                </Typography>
                                <Typography component="p">
                                    {props.description}
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Grid>
);

export default NewsSourceCard;