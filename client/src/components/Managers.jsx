import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';
import photo from '../images/EPL-Background.jpg'
import { pipeline } from 'stream';
import logo from '../images/EPL-Logo4.png'



const ManagerWrapper = styled.div`

.logo {
    height: 4em;
    margin: 0.5em;
}

.photo {
    height: 15em;
}

p {
    font-size: 15px;
    font-family: "Premier-League";
}

li {
    list-style: none;
}

.manager {
    font-size: 24px;
    font-family: "Premier-League";
    font-weight: 900;
    color: #000;
}

.front {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // background-image: url(${photo});
    background-repeat: no-repeat;
}

/* entire container, keeps perspective */
.flip-container {
    perspective: 1000px;
    border: 2px solid #32063A; 
    border-radius: 10px;
    overflow: scroll;
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

.back {
    padding: 20px;
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

.main-container {
    display: flex;
    flex-direction: column;
    margin: 0 25px 0 25px;
    padding: 5px;
}

.managers-header {
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background: #75FA93;
    border: 1px solid black;
	margin-top: 1em;
    border-radius: 15px 75px;
    box-shadow: 10px 8px;
    margin-bottom: 50px;
}

.flip-main {
    padding-top: 2em;

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
        fetch(`/admin/managers.json`)
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
                <div className='main-container'>
                    <header className="managers-header">
                        <img src={logo} className="logo" alt="logo" />
                        <h1>2018/19 EPL Managers</h1>
                    </header>
                    <section>
                        {this.state.managers.sort(function (a, b) {
                            if (a.full_name < b.full_name) return -1;
                            if (a.full_name > b.full_name) return 1;
                            return 0
                        }).map((managers, i) => {

                            return (
                                <section className="flip-main" key={i}>
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



