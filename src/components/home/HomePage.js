/**
 * Created by anuragsharma on 6/5/16.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>This is React - Redux Demo</h1>
                <p>For demo purpose</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;