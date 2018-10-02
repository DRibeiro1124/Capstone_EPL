import React, { Component } from 'react';
import styled from 'styled-components'
import logo from '../images/EPL-Logo4.png'
import logo1 from '../images/EPL-Background.jpg'


const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"



const HomePageWrapper = styled.div`

.league-table {
    border: 1px solid #32063A;
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
    background-color: #D62E55;
    color: white;
}


h1 {
    color: #32063A;
}

.standings-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #D62E55;
    border: 1px solid black;
    margin-top: 1em;
    border-radius: 15px 75px;
}

.logo {
    height: 4em;
    margin: 0.5em;
}

.league-table {
    margin-top: 1em;
}

.footer-container {
    display: flex;
    margin-top: 1em;
    background-image: url(${logo1});
    color: #FFF;
}

.footer-info {
    margin-left: 15px;
}

.glossary {
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
                <div className="main-container">
                    <header className="standings-header">
                        <img src={logo} className="logo" alt="logo" />
                        <h1>2018/19 English Premier League Standings</h1>
                    </header>
                    <table className="league-table">
                        <thead className="table-header">
                            <tr>
                                <th>Pos</th>
                                <th>Club</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>P</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.sort(function (a, b) { return a.position - b.position }).map((teams, i) => {
                                // console.log(teams)
                                // <Link to={`/teams/${team.team_id}`} >{team.team_name}</Link>
                                return (
                                    <tr key={i}>
                                        <td>{teams.position}</td>
                                        <td>{teams.team_name}</td>
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
                            <h6>Positions 1, 2, 3, 4: Champions League</h6>
                            <h6>Position 5: Europa League</h6>
                            <h6>Positions 18, 19, 20: Relegation</h6>
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






