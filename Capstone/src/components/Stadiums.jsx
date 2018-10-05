import React, { Component } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import logo from '../images/EPL-Logo4.png';

const StadiumWrapper = styled.div`

.stadiums {
    display: flex;
    flex-direction: column;
}

.EPL-Logo {
    height: 8em;
    border: 1px solid #32063A;
    background-color: #75fa93;
    border-radius: 15px 75px;
    margin: 10px;
    box-shadow: 10px 10px;
}

img {
    height: 12em;
}

span {
    font-family: "Premier League", serif;
}

li {
    list-style: none;
}

.teams-info {
    border: 1px solid black;
}

.stadium-image {
    height: 200px;
    width: 50%;
}

.team-logo {
    height: 5em;
    border: 1px solid black;
    border-radius: 4em;
    padding: 0.5em;
}


`

class Stadiums extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stadiums: []
        }
    };

    componentDidMount() {
        fetch(`http://localhost:3000/teams.json`)
            .then(resp => resp.json())
            .then(stadiums => {
                // console.log(stadiums)
                this.setState({
                    stadiums: stadiums
                })
            })
    }


    render() {
        return (
            <StadiumWrapper>
                <NavBar />
                <img src={logo} className="EPL-Logo" alt="logo" />
                <div className='stadiums'>
                    <ul>
                        {this.state.stadiums.map((stadium, i) => {
                            return (
                                <div className='teams-info' key={i}>
                                    <li><img src={stadium.stadium} alt="stadium" className="stadium-image" /></li>
                                    <li>{stadium.stadium_name}</li>
                                    <li> <img src={stadium.logo} alt="logo" className="team-logo" /></li>
                                    <li>{stadium.name}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </StadiumWrapper>
        );
    }
}

export default Stadiums;
