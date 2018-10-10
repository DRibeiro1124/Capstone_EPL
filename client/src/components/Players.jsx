import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';
import logo from '../images/EPL-Logo4.png'

const PlayerWrapper = styled.div`

.players {
    font-family: 'Nunito', sans-serif;
}

.position {
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
}

.head-shot {
    height: 8em;
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

.logo {
    height: 4em;
    margin: 0.5em;
}

.main-container {
    display: flex;
    flex-direction: column;
    margin: 0 25px 0 25px;
    padding: 5px;

}

.players-header {
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

`



class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            teams: []
        }
    };


    componentDidMount() {
        fetch(`/admin/players.json`)
            .then(resp => resp.json())
            .then(players => {
                console.log(players, "working?")
                this.setState({
                    players: players
                })
            });
    }

    handleSearchTerm = (e) => {
        fetch(`/admin/players.json?q=${e.target.value}`)
            .then(resp => resp.json())
            .then(players => {
                this.setState({
                    players: players
                })
            });
    };




    render() {
        return (
            <PlayerWrapper>

                <NavBar />
                <div className='main-container'>
                    <header className="players-header">
                        <img src={logo} className="logo" alt="logo" />
                        <h1>2018/19 EPL Players</h1>
                    </header>
                    {/* <section>
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#!" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">1</a></li>
                                <li class="page-item active">
                                    <a class="page-link" href="#!">2 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#!">Next</a>
                                </li>
                            </ul>
                        </nav>

                    </section> */}

                    <section className='search-bar'>
                        <input type="text" placeholder="Search Player" onKeyUp={this.handleSearchTerm} name="searchTerm" />
                    </section>
                    <section className='main-container'>

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
                                        <p><img src={this.state.players[i].team.logo} className="team-logo" alt='logo'></img></p>
                                        {/* <p><img src={this.state.players[i].country} className="flag" alt='flag'></img></p> */}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </PlayerWrapper>
        );
    }
}

export default Players;

