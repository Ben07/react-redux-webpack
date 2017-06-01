import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import {
    increment,
    incrementAsync
} from '../../redux/modules/home';

const Count = styled.h1`
    font-size:3em;
    display:flex;
`;

class Home extends Component {

    render() {
        const { count, increment, incrementAsync, history } = this.props;

        return (
            <div>
                <Count>{count}</Count>
                <button onClick={increment}>Increment</button>
                <button onClick={incrementAsync}>incrementAsync</button>
                <button onClick={() => history.push('/about')}>goAbout</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.home.count
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        increment,
        incrementAsync,
    }, dispatch);


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));
