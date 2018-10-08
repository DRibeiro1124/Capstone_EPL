import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const NavBarWrapper = styled.div`
ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: auto;
    background: #32063A;
    color: white;
    list-style-type: none;
    margin: 15px;
    border-radius: 15px 75px;
    
}

a {
    color: white;
    text-decoration: none;
    font-weight: 900;
    font-family: "Premier League", serif;
}

li {
    font-weight: 900;
    font-family: "Premier League", serif;
    
}

li:hover {
    // background: yellow;
    color: yellow;
}

/* unvisited link */
a:link {
    color: red;
}

/* visited link */
a:visited {
    color: white;
}

/* mouse over link */
a:hover {
    color: yellow;
}

/* selected link */
a:active {
    color: blue;
}

`

class NavBar extends Component {
    render() {
        return (
            <NavBarWrapper>
                <div>
                    <ul>
                        <nav className="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li>
                                    <a href="#">
                                        <span className="icon is-small">
                                            <i className="fas fa-home" aria-hidden="true"></i>
                                        </span>
                                        <Link to="/">Home</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon is-small">
                                        <i className="far fa-futbol" aria-hidden="true"></i>
                                        </span>
                                        <Link to="/teams">Teams</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon is-small">
                                        <i className="fas fa-users" aria-hidden="true"></i>
                                        </span>
                                        <Link to="/players">Players</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon is-small">
                                        <i className="fas fa-male" aria-hidden="true"></i>
                                        </span>
                                        <Link to="/managers">Managers</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon is-small">
                                        <i className="fas fa-drum-steelpan" aria-hidden="true"></i>
                                        </span>
                                        <Link to="/stadiums">Stadiums</Link>
                                    </a>
                                </li>
                                
                            </ul>
                        </nav>
                    </ul>
                </div>

            </NavBarWrapper>
        );
    }
}

export default NavBar;
