import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    increment,
    incrementAsync
} from '../../redux/modules/home';
import { hashHistory } from 'react-router';

class Home extends Component {

    render() {
        const {count, increment, incrementAsync} = this.props;

        return (
            <div>
                <h1 className="home-count">{count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={incrementAsync}>incrementAsync</button>
                <button onClick={() => hashHistory.push('/about')}>goAbout</button>
            </div>
        )
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


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
