import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
