import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        "use strict";
        return (
              <div className="container-fluid">
                  <Header loading={this.props.loading}/>
                  {this.props.children}
              </div>
        );
    }
}

App.propTypes = {
     children: PropTypes.object.isRequired,
     loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProp) {
    return {
        loading: state.ajaxStatus > 0
    };
}

export default connect(mapStateToProps)(App);




