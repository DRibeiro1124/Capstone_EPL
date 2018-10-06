import React, { Component } from 'react';
import styled from 'styled-components';
import Teams from './Teams';



const TeamWrapper = styled.div`
img {
    /*height: 8em;*/
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

.kits img {
    height: 10em; 
}



.team-info {
    display: flex;
    justify-content: space-around;
}

.sponsors {
    display: flex;
    justify-content: space-around;
}

.sponsors img {
    height: 3em;
}





`
class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: {
                squad: [],
                name: props.match.params.id
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
        fetch(`http://localhost:3000/teams.json`)
            .then(resp => resp.json())
            .then(teams => {
                this.setState({
                    loading: false,
                    club:{
                        name:id,
                        squad: [],
                    },
                    teams: teams.reduce((acc, team) => {
                        acc[team.name.replace(/\W/g, '')] = team; return acc
                    }, {})
                })
            });

            // fetch(` http://localhost3000/players.json`)
            // .then(resp => resp.json())
            // .then(players => {
            //     console.log(players, 'fucking work')
            //     this.setState({
            //         players: players
            //     })
            // } )
    }



    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        const slug = this.state.club.name.replace(/\W/g, '');
        console.log({ slug, name: this.state.club.name, teams: this.state.teams })
        const team = this.state.teams[this.state.club.name]

        return (
            <TeamWrapper>
                <Teams />
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

                    <div className="sponsors">
                        <div>
                            <img src={team.club_partner_logo} alt='sponsor' /><h6>Shirt Sponsor</h6>
                        </div>
                        <div>
                            <img src={team.lead_partner_logo} alt='kit-provider' /><h6>Kit Provider</h6>
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
