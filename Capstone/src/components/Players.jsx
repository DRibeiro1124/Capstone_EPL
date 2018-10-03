import React, { Component } from 'react';
import styled from 'styled-components'

const PlayerWrapper = styled.div`

.players {
    list-style: none;
    font-family: 'Nunito', sans-serif;
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
                console.log(players)
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
                <section>
                    <input type="text" placeholder="player name" onChange={this.handleSearchTerm} name="searchTerm"/>
                <div>
                    {this.state.players.sort(function (a, b) {
                        if (a.full_name < b.full_name) return -1;
                        if (a.full_name > b.full_name) return 1;
                        return 0
                    }).map((players, i) => {
                        return (
                            <ul key={i} className="">
                                <li>{this.state.players[i].full_name}</li>
                                <li>{this.state.players[i].position}</li>
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

