import React, {Component} from 'react';
import classes from './CountryBlock.css';
import { Grid, CardContent, Typography, Paper, CardMedia } from "@material-ui/core";


class CountryBlock extends Component {
    render() {

        let paperClass = [classes.paper];
        if (this.props.supported)
            paperClass.push(classes.avaibleCountry);

        return (
            <Grid item>
                <Paper className={paperClass.join(' ')} onClick={this.props.clicked} >
                    <CardMedia
                        className={classes.media}
                    image={`https://www.countryflags.io/${this.props.alpha2Code}/shiny/64.png`}
                    title={this.props.name}
                    />
                    <CardContent>
                        <Typography className={classes.countryName} component="p">
                            {this.props.name}
                        </Typography>
                    </CardContent>
                </Paper>
            </Grid>
        );
    }
}

export default CountryBlock;