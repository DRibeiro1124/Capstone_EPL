import React, { Component } from 'react';

const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"


class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: []
        }
    };

    componentDidMount() {   
        fetch(`${base_URL}team/9249?${api_key}`)
        .then (resp => resp.json())
        .then (newClub => {
            console.log(newClub)
        })
    }
    
    render() {
        return (
            <p>Info in here</p>
        )
    }
}

export default Team;
