import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';
import photo from '../images/EPL-Background.jpg'
import { pipeline } from 'stream';




const ManagerWrapper = styled.div`

.main-container {
    // border: 2px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.logo {
    height: 4em;
}

.photo {
    height: 11em;
}

p {
    font-size: 15px;
    // font-family: 'Nunito', sans-serif;
    font-family: "Premier-League";
}

li {
    list-style: none;
}

.manager {
    font-size: 24px;
    font-family: "Premier-League";
    font-weight: 900;
    color: white;
}

.front {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-image: url(${photo});
    background-repeat: no-repeat;
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
	width: 250px;
    height: 400px;
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


class Managers extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            managers: []
        }
    };

    componentDidMount() {
        fetch(`http://localhost:3000/managers.json`)
            .then(resp => resp.json())
            .then(managers => {
                console.log("is this working", managers)
                this.setState({
                    managers: managers
                })
            })
    }


    render() {
        return (
            <ManagerWrapper>

                <NavBar />
                <div>
                    <section className="main-container">
                        {this.state.managers.sort(function (a, b) {
                            if (a.full_name < b.full_name) return -1;
                            if (a.full_name > b.full_name) return 1;
                            return 0
                        }).map((managers, i) => {

                            return (
                                <section className='main-container' key={i}>
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                        <div class="flipper">
                                            <div class="front">
                                                {/* front content */}
                                                <img src={this.state.managers[i].photo} className="photo" alt="manager" />
                                                <li className='manager'>{this.state.managers[i].full_name}</li>
                                                <img src={this.state.managers[i].club} className="logo" alt="logo" />
                                            </div>
                                            <div class="back">
                                                {/* back content */}
                                                <p className='bio'>{this.state.managers[i].bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                        }
                    </section>
                </div>
            </ManagerWrapper>
        );
    }
}

export default Managers;


// const backgroundLogo = {this.state.managers[i].club}

