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
        this.setState({
            redirect: false
        });

        if (this.props.countrySource) {
            this.props.onfetchAllCountry();
        }
        this.props.onResetNews();
    }

    onCountryBlockClickHandler = (countryId, coutryName) =>{
        this.props.onFetchNewsSource(countryId);
        this.setState({
            countryId: countryId,
            countryName: coutryName,
            redirect: true
        })
    }

    render() {

        if (this.props.isChannelFound && this.state.redirect) {
            return <Redirect to={{
                pathname: '/newsSource',
                state: { id: this.state.countryId, countryName: this.state.countryName  }
            }} />;
        }

        if (this.props.isTopHeadlinesFound && this.state.redirect) {
            return <Redirect to={{
                pathname: '/news',
                state: { id: this.state.countryId, channelName: this.state.countryName + "'s Top Headline"}
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

        if (this.props.loading || this.props.loadingNews) {
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
        loading: state.fetchCountry.loading,
        loadingNews: state.fetchNews.loading,
        isChannelFound: state.fetchNews.isChannelFound,
        isTopHeadlinesFound: state.fetchNews.isTopHeadlinesFound
    }
}

const mapStateToDispatch = dispatch => {
    return {
        onfetchAllCountry: () => dispatch(actions.fetchAllCountry()),
        onFetchNewsSource: (countryId) => dispatch(actions.fetchAllNewsSource(countryId)),
        onResetNews: () => dispatch(actions.resetNewsSourceandTopHeadline())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Country);