import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: {}
        }
    };

    componentDidMount() {   
        const id = this.props.match.params.id
        fetch(`${base_URL}team/${id}?${api_key}`)
        .then (resp => resp.json())
        .then (newClub => {
            this.setState({ club: newClub })
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.club.name}</h1>
            </div>
        )
    }
}

export default Team;
