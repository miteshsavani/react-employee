import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/aAux';
import Layout from '../../components/Layout/Layout';
import classes from './Dashboard.css';

import NewsBlock from '../../components/UI/NewsBlock/NewsBlock';


class Dashboard extends Component {

    state = {
        NewsData: [
            {
                title: 'test 1'
            },
            {
                title: 'test 2'
            },
            {
                title: 'test 3'
            },
            {
                title: 'test 4'
            }, 
            {
                title: 'test 5'
            }
        ]
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd94682fa1b24ff5b9316a250c504b17')
            .then(response => {
                this.setState({
                    NewsData: response.data.articles
                })
                console.log('set data');
            })
    }
    render() {
        return (
            <Aux>
                <Layout>
                    <h3> News Feeds </h3>
                    <div className={classes.Dashboard}>
                        {
                            this.state.NewsData.filter(news => news.urlToImage !== null).map(news => {
                                return <NewsBlock 
                                    title={news.title} 
                                    key={news.title}
                                    imgsrc={news.urlToImage}
                                    descryption= {news.description} />
                            })
                        }
                    </div>
                </Layout>
            </Aux>
        )
    }
}



export default Dashboard;