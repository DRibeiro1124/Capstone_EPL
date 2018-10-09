import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/EPL-Logo4.png';
import logo1 from '../images/EPL-Background.jpg';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"



const HomePageWrapper = styled.div`

.league-table {
    border: 1px solid #32063A;
    margin-top: 1em;
}

.league-table tbody tr:not(.is-selected):nth-child(odd) {
    background-color: #D62E55;
}

.league-table tbody tr:not(.is-selected):nth-child(even) {
    background-color: #32063A;
}

.main-container {
    display: flex;
    flex-direction: column;
    margin: 0 25px 0 25px;
    padding: 5px;

}

.main-container th {
    background-color: #32063A;
    color: #D62E55;
}


td {
    color: #FFF
    border-bottom: 1px solid #FFF;
    text-align: center;
}

tr:hover td {
    color: black;
}

th {
    text-align: center;
}


h1 {
    color: #32063A;
}

.standings-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    // background-color: #D62E55;
    background: #75FA93;
    border: 1px solid black;
    margin-top: 1em;
    border-radius: 15px 75px;
    box-shadow: 10px 8px;
}

.logo {
    height: 4em;
    margin: 0.5em;
}


.footer-container {
    border: 2px solid #32063A;
    display: flex;
    margin-top: 1em;
    background-image: url(${logo1});
    color: #FFF;
}

.footer-info {
    margin-left: 15px;
}

.glossary {
    border: 2px solid #32063A;
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-image: url(${logo1});
    color: #FFF;
}

.glossary h6 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

a {
    color: dodgerblue;
}

a:hover {
    color: black;
}



`

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    };

    componentDidMount() {
        fetch(`${base_URL}standings/1204?${api_key}`)
            .then(resp => resp.json())
            .then(teams => {
                // console.log("works?", teams);
                this.setState({
                    teams: teams
                })

            })
    }


    render() {
        return (
            <HomePageWrapper>
                <NavBar />
                <div className="main-container">
                    <header className="standings-header">
                        <img src={logo} className="logo" alt="logo" />
                        <h1>2018/19 Standings</h1>
                    </header>
                    <table className="league-table table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <thead className='table-header'>
                            <tr>
                                <th><abbr title="Position">Pos</abbr></th>
                                <th>Team</th>
                                <th><abbr title="Played">Pld</abbr></th>
                                <th><abbr title="Won">W</abbr></th>
                                <th><abbr title="Drawn">D</abbr></th>
                                <th><abbr title="Lost">L</abbr></th>
                                <th><abbr title="Goals for">GF</abbr></th>
                                <th><abbr title="Goals against">GA</abbr></th>
                                <th><abbr title="Goal difference">GD</abbr></th>
                                <th><abbr title="Points">Pts</abbr></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.sort(function (a, b) { return a.position - b.position }).map((teams, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{teams.position}</td>
                                        <td><Link to={`/teams/${teams.team_name}`}>{teams.team_name}</Link></td>
                                        <td>{teams.overall_gp}</td>
                                        <td>{teams.overall_w}</td>
                                        <td>{teams.overall_d}</td>
                                        <td>{teams.overall_l}</td>
                                        <td>{teams.overall_gs}</td>
                                        <td>{teams.overall_ga}</td>
                                        <td>{teams.gd}</td>
                                        <td>{teams.points}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <footer className="footer-container">
                        <div className="footer-info">
                            <h6>Positions 1, 2, 3, 4: Qualification for the <a href="https://en.wikipedia.org/wiki/UEFA_Champions_League">UEFA Champions League</a></h6>
                            <h6>Position 5: Qualification for the <a href="https://en.wikipedia.org/wiki/UEFA_Europa_League">UEFA Europa League</a></h6>
                            <h6>Positions 18, 19, 20: Relegation to the <a href="https://en.wikipedia.org/wiki/EFL_Championship">Football League Championship</a></h6>
                        </div>
                    </footer>
                    <div className="glossary">
                        <h5>GLOSSARY</h5>
                        <h6>GP: Games Played</h6>
                        <h6>W: Wins</h6>
                        <h6>D: Draws</h6>
                        <h6>L: Losses</h6>
                        <h6>GF: Goals For</h6>
                        <h6>GA: Goals Against</h6>
                        <h6>GD: Goal Difference</h6>
                        <h6>P: Points</h6>
                    </div>
                </div>
            </HomePageWrapper>
        );
    }
}

export default HomePage;






