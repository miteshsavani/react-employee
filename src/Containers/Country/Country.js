import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Aux from '../../hoc/aAux';

import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions';
import { connect } from 'react-redux';

import CountryBlock from '../../components/UI/CountryBlock/CountryBlock';

import { Grid } from "@material-ui/core";
import Spinner from '../../components/UI/Spinner/Spinner';

class Country extends Component {

    state ={
        redirect: false,
        countryId: null,
        countryName: null,
        supportedCountry:['Argentina',
        'Australia',
        'Austria',
        'Belgium',
        'Brazil',
        'Bulgaria',
        'Canada',
        'China',
        'Colombia',
        'Cuba',
        'Czech Republic',
        'Egypt',
        'France',
        'Germany',
        'Greece',
        'Hong Kong',
        'Hungary',
        'India',
        'Indonesia',
        'Ireland',
        'Israel',
        'Italy',
        'Japan',
        'Latvia',
        'Lithuania',
        'Malaysia',
        'Mexico',
        'Morocco',
        'Netherlands',
        'New Zealand',
        'Nigeria',
        'Norway',
        'Philippines',
        'Poland',
        'Portugal',
        'Romania',
        'Russia',
        'Saudi Arabia',
        'Serbia',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'South Africa',
        'South Korea',
        'Sweden',
        'Switzerland',
        'Taiwan',
        'Thailand',
        'Turkey',
        'UAE',
        'Ukraine',
        'United Kingdom',
        'United States',
        'Venuzuela',
        'Australia']
    }

    componentDidMount() {
        if (this.props.countrySource) {
            this.props.onfetchAllCountry();
        }
    }

    onCountryBlockClickHandler = (countryId, coutryName) =>{
        this.setState({
            redirect: true,
            countryId: countryId,
            countryName: coutryName
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/newsSource',
                state: { id: this.state.countryId, countryName: this.state.countryName }
            }} />;
        }

        let countryBoard = (
            <Grid container justify="center" spacing={16} >
                        {
                            this.props.countrySource.map(country => {
                                return <CountryBlock
                                    name={country.name}
                                    alpha2Code = {country.alpha2Code}
                                    key={country.name}
                                    supported = {this.state.supportedCountry.includes(country.name)}
                                    clicked={() => this.onCountryBlockClickHandler(country.alpha2Code, country.name)}
                                />
                            })
                        }
                    </Grid>
        );

        if (this.props.loading) {
            countryBoard = <Spinner />
        }

        return (
            <Aux>
                <Layout title="Country">
                    {countryBoard}
                </Layout>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        countrySource: state.fetchCountry.countries,
        loading: state.fetchCountry.loading
    }
}

const mapStateToDispatch = dispatch => {
    return {
        onfetchAllCountry: () => dispatch(actions.fetchAllCountry())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Country);