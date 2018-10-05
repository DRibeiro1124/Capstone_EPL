import React, { Component } from 'react';
import styled from 'styled-components';
import Teams from './Teams';
import { Link } from 'react-router-dom';


// const base_URL = "http://api.football-api.com/2.0/"
// const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"

const TeamWrapper = styled.div`
img {
    height: 8em;
}

.team-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
    align-items: center; 
    padding-top: 1em;
}

.team-header img {
    height: 15em;
}

td, th {
    border-bottom: 1px solid lightgrey;
}


.main-table {
    padding-top: 1em;
    border: 1px solid white;
    width: 100%;
}

.kits {
    padding-top: 2em;
    display: flex;
    justify-content: space-around;

}

.team-info {
    display: flex;
    justify-content: space-around;
}




`
class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: {
                squad: [],
                name:props.match.params.id
            },
            teams: {},
            loading: true
        }
    };

    componentWillMount() {
        this.updateTeam()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.updateTeam()
        }
    }

    updateTeam() {
        const id = this.props.match.params.id
        // fetch(`${base_URL}team/${id}?${api_key}`)
        //     .then(resp => resp.json())
        //     .then(newClub => {
        //         console.log(newClub)
        //         this.setState({
        //             club: newClub,
        //             loading: false
        //         })
        //     })
            // I'm going to try and fetch my back-end information

        fetch(`http://localhost:3000/teams.json`)
            .then(resp => resp.json())
            .then(teams => {
                this.setState({
                    loading:false,
                    teams: teams.reduce((acc, team) => {
                        acc[team.name.replace(/\W/g, '')] = team; return acc
                    }, {})
                })
            })
    }



    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }
        
        const slug = this.state.club.name.replace(/\W/g, '');
        console.log({slug, name:this.state.club.name, teams:this.state.teams})
        const team = this.state.teams[this.state.club.name]

        return (
            <TeamWrapper>
                <Teams />
                <Link to={`/teams/${team.team_id}`} >{team.team_name}</Link>
                <div className={`team ${slug}`}>
                    <header className="team-header">
                        <img src={`../images/${slug}Logo.svg`} alt='logo' />
                        <h2>{this.state.club.name}</h2>
                    </header>
                    <div className='team-info'>
                        <div>
                            <h5>Manager: <p>{this.state.club.coach_name}</p></h5>
                        </div>
                        <div>
                            <h5>Stadium: <p>{this.state.club.venue_name}</p></h5>
                            <h6>Capacity: {this.state.club.venue_capacity}</h6>
                        </div>
                    </div>

                    <div className="kits">
                        <div>
                            <img src={team.home_kit} alt='home-kit' /><h6>Home Kit</h6>
                        </div>
                        <div>
                            <img src={team.away_kit} alt='away-kit' /><h6>Away Kit</h6>
                        </div>
                        <div>
                            <img src={team.third_kit} alt='third-kit' /><h6>Third Kit</h6>
                        </div>
                    </div>

                    <table className="main-table">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.club.squad.map((players, i) => {
                                return (
                                    <tr key={i} className="player-info">
                                        <td>{this.state.club.squad[i].number}</td>
                                        <td>{this.state.club.squad[i].name}</td>
                                        <td>{this.state.club.squad[i].age}</td>
                                        <td>{this.state.club.squad[i].position}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </TeamWrapper>
        )
    }
}

export default Team;
