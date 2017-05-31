import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
    increment,
    incrementAsync
} from '../../redux/modules/home';

import './home.less';

class Home extends Component {
   
    render() {
        const {count, increment, incrementAsync,history} = this.props;

        return (
            <div>
                <h1 className="home-count">{count}</h1>
                <div className="tab">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
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
