import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Team from './Team';

const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"

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
        })
    }
    
    render() {
        return (
            <div>
                {this.state.teams.sort((a, b) => {
                    if(a.team_name < b.team_name) return -1;
                    if(a.team_name > b.team_name) return 1;
                }).map((team) => {
                    return <div key={team.team_id}>
                    <Link to={`/teams/${team.team_id}`} >{team.team_name}</Link>
                </div>
                })}
            </div>
        )
    }
}

export default Teams;
