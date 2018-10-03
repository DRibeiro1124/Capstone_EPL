import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import image from '../images/EPL-Logo4.png'


const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"


const TeamsWrapper = styled.div`

.teams {
    font-size: 30px;
    font-family: "Premier-League";
    background: #F7F9FC;
    margin: 0 15px;
    color: #32063A;
}

.teams a {
    text-decoration: none;
    
}

.wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 3em;
}

.EPL-logo {
    height: 3em;
}

`
class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    };

    componentDidMount() {  
        fetch(`${base_URL}standings/1204?${api_key}`)
        .then (resp => resp.json())
        .then (teams => {
            this.setState({ teams })
            // console.log({teams}) it's working. Showing all 20 teams
        })
        // fetch(`your api`)
    }
    
    render() {
        return (
            <TeamsWrapper>
            <img src={image} className="EPL-logo" alt="logo" />
            <div className="wrapper">
                {this.state.teams.sort((a, b) => {
                    if(a.team_name < b.team_name) return -1;
                    if(a.team_name > b.team_name) return 1;
                }).map((team) => {
                    return <div className="teams" key={team.team_id}>
                    <Link to={`/teams/${team.team_id}`} >{team.team_name}</Link>
                </div>
                })}
            </div>
            </TeamsWrapper>
        )
    }
}

export default Teams;
