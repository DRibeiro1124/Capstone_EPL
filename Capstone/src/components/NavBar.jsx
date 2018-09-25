import React, { Component } from 'react';
import styled from 'styled-components';


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

li {
    font-weight: 900;
    font-family: "Premier League", serif;
    
}

li:hover {
    color: yellow;
    animation: bounce 0.5s;
}

@keyframes bounce {
	0%, 20%, 60%, 100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-webkit-transform: translateY(-20px);
		transform: translateY(-20px);
	}

	80% {
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
	}
}




`

class NavBar extends Component {
    render() {
        return (
            <NavBarWrapper>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Teams</li>
                        {/* <li>Fixtures</li> */}
                        {/* <li>Current Stats</li> */}
                        {/* <li>Table</li> */}
                        {/* <li>Players</li> */}
                        {/* <li>Managers</li> */}
                    </ul>
                </div>

            </NavBarWrapper>
        );
    }
}

export default NavBar;
