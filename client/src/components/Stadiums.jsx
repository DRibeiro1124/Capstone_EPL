import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import logo from '../images/EPL-Logo4.png';

const StadiumWrapper = styled.div`

.stadiums {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 10px;
    justify-content: space-evenly;
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
    height: 300px;
    width: 400px; 
}

li {
    list-style: none;
    font-family: "Premier League", serif; 
}

.teams-info {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    font-size: 15px;
    margin: 10px;
}


.team-logo {
    height: 120px;
}

/* entire container, keeps perspective */
.flip-container {
    perspective: 1000px;
    border: 2px solid #32063A; 
    border-radius: 10px;
    // overflow: scroll;
    overflow: auto;
}


	/* flip the pane when hovered */
	.flip-container:hover .flipper, .flip-container.hover .flipper {
		transform: rotateY(180deg);
	}

.flip-container, .front, .back {
	width: 500px;
    height: 550px; 
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}


/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
}

/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
    left: 0;
}

/* front pane, placed above back */
.front {
	z-index: 2;
    transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
    transform: rotateY(180deg);
    
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
        fetch(`/teams.json`)
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
                <section>
                    <NavBar />
                </section>
                <img src={logo} className="EPL-Logo" alt="logo" />


                <div className='stadiums'>
                    {this.state.stadiums.sort(function (a, b) {
                        if (a.stadium_name < b.stadium_name) return -1;
                        if (a.stadium_name > b.stadium_name) return 1;
                        return 0
                    }).map((stadium, i) => {
                        return (
                            <section className='main-container' key={i}>
                                <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
                                    <div className="flipper">
                                        <div className="front" style={{ backgroundColor: stadium.primary_color }}>
                                            {/* front content */}
                                            <li><img src={stadium.stadium} alt="stadium" className="stadium-image" /></li>
                                            <li style={{ color: stadium.secondary_color }}>{stadium.stadium_name}</li>
                                            <li> <img src={stadium.logo} alt="logo" className="team-logo" /></li>
                                            <li style={{ color: stadium.secondary_color }}>{stadium.name}</li>
                                        </div>
                                        <div className="back" style={{ backgroundColor: stadium.primary_color }}>
                                            {/* back content */}
                                            {/* <p className='bio'>{this.state.managers[i].bio}</p> */}
                                            <p style={{ color: stadium.secondary_color }}>{stadium.stadium_info}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        )
                    })}
                </div>
            </StadiumWrapper>
        );
    }
}

export default Stadiums;




                            

                        