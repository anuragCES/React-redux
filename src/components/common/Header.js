import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    "use strict";
    return (
        <nav>
            <Link to="/" activeClassName="active">Meeting Minutes</Link>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;