import React, { Component } from 'react';
import styled from 'styled-components'


const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"

const TeamWrapper = styled.div`


`
class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: null
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
        if (this.state.club === null){
            return <h1>Loading...</h1>
        }
        const slug = this.state.club.name.replace(/\s/, '');

        return (
            <TeamWrapper>
            <div className={`team ${slug}`}>
                <h1>{this.state.club.name}</h1>
                <img src={`images/${slug}Logo.svg`} />
            </div>
            </TeamWrapper>
        )
    }
}

export default Team;
