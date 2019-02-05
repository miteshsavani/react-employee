import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Aux from '../../hoc/aAux';

class profile extends Component {

    render() {
        return (
            <Aux>
                <Layout>
                    <h3> I am Profile </h3>
                </Layout>
            </Aux>
        );
    }
}

export default profile;