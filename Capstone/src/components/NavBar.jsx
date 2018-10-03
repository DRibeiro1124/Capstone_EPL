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
    padding: 2em;
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
                        <Link to="/">Home</Link>
                        <Link to="/teams">Teams</Link>
                        <Link to="/players">Players</Link>
                        <Link to="/managers">Managers</Link>
                    </ul>
                </div>

            </NavBarWrapper>
        );
    }
}

export default NavBar;
