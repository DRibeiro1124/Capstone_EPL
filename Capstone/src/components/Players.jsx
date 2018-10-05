import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';

const PlayerWrapper = styled.div`

.display {
    list-style: none;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
}

.players {
    font-family: 'Nunito', sans-serif;
    font-size: 25px;
}

.positions {
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
}

.player-photo {
    height: 5em;
}



`



class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            searchTerm: ''
        }
    };


    componentDidMount() {
        fetch(`http://localhost:3000/players.json`)
            .then(resp => resp.json())
            .then(players => {
                this.setState({
                    players: players
                })
            })
    }

    handleSearchTerm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    searchPlayer = () => {
        fetch()
    }

    render() {
        return (
            <PlayerWrapper>
                <NavBar />
                <section className="main">
                    <input type="text" placeholder="Search Player" onChange={this.handleSearchTerm} name="searchTerm" />
                    <div>
                        {this.state.players.sort(function (a, b) {
                            if (a.full_name < b.full_name) return -1;
                            if (a.full_name > b.full_name) return 1;
                            return 0
                        }).map((players, i) => {
                            return (
                                <ul key={i} className="display">
                                    <li><img src={this.state.players[i].photo} className="player-photo" alt='player'></img></li>
                                    <li className="players">{this.state.players[i].full_name}</li>
                                    <li className="position">{this.state.players[i].position}</li>
                                    <li className="number">{this.state.players[i].jersey_number}</li>
                                </ul>
                            )
                        })}
                    </div>
                </section>
            </PlayerWrapper>
        );
    }
}

export default Players;

