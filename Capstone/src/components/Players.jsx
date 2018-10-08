import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';

const PlayerWrapper = styled.div`

.players {
    font-family: 'Nunito', sans-serif;
}

.position {
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
}

.head-shot {
    height: 12em;
}

.player-card {
    border: 1px solid black;
    border-radius: 1em;
    margin: 5px;
    display: flex;  
    justify-content: space-between;
    padding: 1em;
    align-items: center;
}

.number {
    font-size: 20px
    font-family: "Premier-League";
}

.team-logo {
    height: 5em;
}

.flag {
    height: 4em; 
    border: 1px solid black;
}


`



class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            searchTerm: '',
            teams: []
        }
    };


    componentDidMount() {
        fetch(`http://localhost:3000/players.json`)
            .then(resp => resp.json())
            .then(players => {
                console.log(players, "working?")
                this.setState({
                    players: players
                })
            });

        // fetch(`http://localhost:3000/teams.json`)
        // .then(resp => resp.json())
        // .then(teams => {
        //     this.setState({
        //         teams: teams
        //     })
        // })
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
                <input type="text" placeholder="Search Player" onChange={this.handleSearchTerm} name="searchTerm" />
                <section className='main-container'>
                    <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
                        <a className="pagination-previous">Previous</a>
                        <a className="pagination-next">Next page</a>
                        <ul className="pagination-list">
                            <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                            <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                            <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                        </ul>
                    </nav>
                    <div>
                        {this.state.players.sort(function (a, b) {
                            if (a.full_name < b.full_name) return -1;
                            if (a.full_name > b.full_name) return 1;
                            return 0
                        }).map((players, i) => {
                            return (
                                <div key={i} className="player-card">
                                    <p><img src={this.state.players[i].photo} className="head-shot" alt='player'></img></p>
                                    <p className="players">{this.state.players[i].full_name}</p>
                                    <p className="position">{this.state.players[i].position}</p>
                                    <p className="number">{this.state.players[i].jersey_number}</p>
                                    <p><img src={this.state.players[i].team} className="team-logo" alt='logo'></img></p>
                                    {/* <p><img src={this.state.players[i].country} className="flag" alt='flag'></img></p> */}
                                </div>
                            )
                        })}
                    </div>
                </section>
            </PlayerWrapper>
        );
    }
}

export default Players;

