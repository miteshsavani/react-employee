import React, { Component } from 'react';
import Aux from '../../hoc/aAux';
import Layout from '../../components/Layout/Layout';
import classes from './News.css';

import * as actions from '../../store/actions';
import { connect } from 'react-redux';

import NewsBlock from '../../components/UI/NewsBlock/NewsBlock';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";



class News extends Component {

    state = {
        modalShow: false,
        newsDetails: {
            title: null,
            description: null,
            author: null,
            urlToImage: null,
            content: null,
            publishedAt: null,
            url: null
        },
        channelName: 'BBC News'
    }

    componentDidMount() {
        console.log('type of ', typeof this.props.location.state)
        if (this.props.location.state === null || typeof this.props.location.state === 'undefined') {
            console.log('location empty');
            this.props.onFetchNews('bbc-news');
        } else {
            console.log(this.props.location.state.channelName);
            this.setState({ channelName: this.props.location.state.channelName });
            this.props.onFetchNews(this.props.location.state.id);
        }
    }

    modalClosedHandler = () => {
        return this.setState({ modalShow: false });
    }

    modalDialogOpen = (news) => {
        console.log(news);
        return this.setState({
            modalShow: true,
            newsDetails: news
        });
    }

    modifiedContent = (content) => {
        if (content) {
            content = content.replace(content.substr(content.indexOf('[')), '');
        }
        return content;
    }

    addAnchorInContent = (content, url) => {
        if (content) {
            content = <a href={url} target='_blank' rel='noopener noreferrer'>{content.substr(content.indexOf('['))}</a>;
        }
        return content;
    }

    modifiedPublishedDate = (date) => {
        if (date) {
            let dd = new Date(date);
            date = String(dd.getDate()) + '-' + String(dd.getMonth() + 1) + '-' + dd.getFullYear();
        }
        return date;
    }

    render() {

        let newsBoard = (
            <Grid
                container
                justify="center"
                spacing={16} >
                {
                    this.props.NewsData.filter(news => news.urlToImage !== null).map(news => {
                        return <NewsBlock
                            title={news.title}
                            key={news.title}
                            imgsrc={news.urlToImage}
                            description={news.description}
                            clicked={() => this.modalDialogOpen(news)} />
                    })
                }
            </Grid>
        );

        if (this.props.loading) {
            newsBoard = <Spinner />;
        }

        return (
            <Aux>
                <Layout title={this.state.channelName}>
                    <Modal show={this.state.modalShow} modalClosed={this.modalClosedHandler}>
                        <div>
                            <div className={classes.newsHeader}>
                                <CardMedia
                                    className={classes.image}
                                    image={this.state.newsDetails.urlToImage} />
                                <div className={classes.topBlock}>
                                    <span className={classes.title}>{this.state.newsDetails.title}</span>
                                    <span className={classes.desc}>{this.state.newsDetails.description}</span>
                                </div>
                            </div>
                            <hr />
                            <div className={classes.content}>
                                <span>
                                    {this.modifiedContent(this.state.newsDetails.content)}
                                    {this.addAnchorInContent(this.state.newsDetails.content, this.state.newsDetails.url)}
                                </span>
                            </div>
                            <hr />
                            <div className={classes.newsFooter}>
                                <b> Published by </b> <span>{this.state.newsDetails.author} </span>
                                <b> Published at </b> <span> {this.modifiedPublishedDate(this.state.newsDetails.publishedAt)} </span>
                            </div>
                            <hr />
                        </div>
                    </Modal>
                    {newsBoard}
                </Layout>
            </Aux>
        )
    }
}


const mapStateToProps = state => {
    return {
        NewsData: state.fetchNews.allNews,
        loading: state.fetchNews.loading
    }
}

const mapStateToDispatch = dispatch => {
    return {
        onFetchNews: (newsId) => dispatch(actions.fetchAllNews(newsId))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(News);