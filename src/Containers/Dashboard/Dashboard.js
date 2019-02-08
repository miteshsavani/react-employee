import React, { Component } from 'react';
import Aux from '../../hoc/aAux';
import Layout from '../../components/Layout/Layout';
import classes from './Dashboard.css';

/* import * as actions from '../../store/actions';
import { connect } from 'react-redux'; */

import NewsBlock from '../../components/UI/NewsBlock/NewsBlock';
import Modal from '../../components/UI/Modal/Modal';

import Grid from "@material-ui/core/Grid";



class Dashboard extends Component {

    state = {
        NewsData: [{
            title: 'test1'
        }],
        modalShow: false,
        newsDescription:null
    }

   // componentDidMount() {
        /* axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd94682fa1b24ff5b9316a250c504b17')
            .then(response => {
                this.setState({
                    NewsData: response.data.articles
                })
                console.log('set data');
            }) */
           /*  if (this.props.NewsData.length === 0)
            this.props.onFetchNews(); */
    //}

    modalClosedHandler = () => {
        return this.setState({modalShow: false});
    }

    modalDialogOpen = (details) => {
        return this.setState({
                modalShow: true,
                newsDescription: details
            });
    }

    render() {
        return (
            <Aux>
                <Layout>
                    <h3> News Feeds </h3>
                    <Modal show={this.state.modalShow} modalClosed={this.modalClosedHandler}>
                        {this.state.newsDescription}
                    </Modal>
                    <Grid
                        container
                        className={classes.demo}
                        justify="center"
                        spacing={16} >
                        {
                            this.state.NewsData.filter(news => news.urlToImage !== null).map(news => {
                                return <NewsBlock
                                    title={news.title}
                                    key={news.title}
                                    imgsrc={news.urlToImage}
                                    description={news.description} 
                                    clicked ={() => this.modalDialogOpen(news.description)}/>
                            })
                        }
                    </Grid>
                </Layout>
            </Aux>
        )
    }
}


/* const mapStateToProps = state => {
    return {
        NewsData: state.news.allNews
    }
}

const mapStateToDispatch = dispatch => {
    return {
        onFetchNews: () => dispatch(actions.fetchAllNews())
    }
}  */

export default Dashboard;

//export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);