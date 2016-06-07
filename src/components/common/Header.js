import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    "use strict";
    return (
        <nav>
            <Link to="/" activeClassName="active">Meeting Minutes</Link>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
            {loading}
            {loading && <LoadingDots interval={100} dots={5}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;