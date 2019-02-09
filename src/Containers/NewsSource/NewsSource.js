import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Aux from '../../hoc/aAux';

import { Redirect } from 'react-router-dom';
import classes from './NewsSource.css';

import * as actions from '../../store/actions';
import { connect } from 'react-redux';

import NewsSourceCard from '../../components/UI/NewsSourceCard/NewsSourceCard';
import Spinner from '../../components/UI/Spinner/Spinner';

import { Grid } from "@material-ui/core";


class newssource extends Component {

    state = {
        data: [
            {
                name: 'Test',
                description: 'The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.'
            },
            {
                name: 'Test1',
                description: 'Test desvcasfddcription here'
            },
            {
                name: 'Test 22 ',
                description: 'Test 34343 description here'
            },
            {
                name: 'Tes 43434t',
                description: 'Test description here'
            },
        ],
        redirect: false,
        newsId: null,
        channelName: null,
        countryId: 'us',
        countryName: 'United State'
    }

    componentDidMount() {

        console.log('type of ', typeof this.props.location.state)
        if (this.props.location.state === null || typeof this.props.location.state === 'undefined') {
            console.log('location empty');
            this.props.onFetchNewsSource(this.state.countryId);
        } else {
            console.log(this.props.location.state.countryName);
            this.setState({ countryName: this.props.location.state.countryName });
            this.props.onFetchNewsSource(this.props.location.state.id);
        }
    }

    getChannelNews = (id, name) => {
        this.setState({ redirect: true, newsId: id, channelName: name });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/news',
                state: { id: this.state.newsId, channelName: this.state.channelName }
            }} />;
        }

        let newsSourceBoard = (
            <Grid container className={classes.grid} spacing={16} >
                {
                    this.props.newsSource.map(news => {
                        return <NewsSourceCard
                            name={news.name}
                            key={news.name}
                            description={news.description}
                            clicked={() => this.getChannelNews(news.id, news.name)} />
                    })
                }
            </Grid>
        );

        if (this.props.loading) {
            newsSourceBoard = <Spinner />;
        } else if ( this.props.newsSource.length === 0) {
            newsSourceBoard = (<div className={classes.Notfound}> We don't have channels in this country </div>);
        }

        return (
            <Aux>
                <Layout title={`${this.state.countryName}'s Channels`}>
                    {newsSourceBoard}
                </Layout>

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        newsSource: state.fetchNews.allNewsSource,
        loading: state.fetchNews.loading
    }
}

const mapStateToDispatch = dispatch => {
    return {
        onFetchNewsSource: (countryId) => dispatch(actions.fetchAllNewsSource(countryId))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(newssource);