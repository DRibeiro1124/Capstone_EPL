import React, { Component } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import logo from '../images/EPL-Logo4.png';

const StadiumWrapper = styled.div`

.stadiums {
    display: flex;
    flex-direction: column;
    padding: 2em;
}

.EPL-Logo {
    height: 160px;
    border: 1px solid #32063A;
    background-color: #75fa93;
    border-radius: 15px 75px;
    margin: 10px;
    box-shadow: 10px 10px;
}

.stadium-image {
    height: 200px;
    width: 400px; 
}

li {
    list-style: none;
    
}

.teams-info {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Premier League", serif;
    padding: 1em;
    font-size: 15px;
    margin: 10px;
}


.team-logo {
    height: 120px;
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
                console.log(stadiums)
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
                        {this.state.stadiums.sort(function (a, b) {
                            if (a.stadium_name < b.stadium_name) return -1;
                            if (a.stadium_name > b.stadium_name) return 1;
                            return 0
                        }).map((stadium, i) => {
                            return (
                                <div className='teams-info' key={i} style={{backgroundColor:stadium.primary_color}}> 
                                    <li><img src={stadium.stadium} alt="stadium" className="stadium-image" /></li>
                                    <li style={{color:stadium.secondary_color}}>{stadium.stadium_name}</li>
                                    <li> <img src={stadium.logo} alt="logo" className="team-logo" /></li>
                                    <li style={{color:stadium.secondary_color}}>{stadium.name}</li>
                                </div>
                            )
                        })}
                </div>
            </StadiumWrapper>
        );
    }
}

export default Stadiums;
