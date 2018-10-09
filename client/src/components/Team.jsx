import React, { Component } from 'react';
import styled from 'styled-components';
import Teams from './Teams';


const TeamWrapper = styled.div`

.team-header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;
    align-items: center; 
    padding-top: 1em;
}

.team-header img {
    height: 15em;
}


.table {
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
    padding: 5px;
}

.photo {
    height: 3em;
}

th {
    text-align: center;
}

td {
    text-align: center;
}

.btn btn-primary btn-lg {
   
}


`
class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: null,
            players: [],
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
        fetch(`http://localhost:3000/teams/${id}.json`)
            .then(resp => resp.json())
            .then(team => {
                console.log(team, 'working now?')
                this.setState({
                    loading: false,
                    team
                })
            });

        fetch(`http://localhost:3000/teams/${id}/players.json`)
            .then(resp => resp.json())
            .then(players => {
                // console.log(players)
                this.setState({
                    players: players
                })
            })
    }


    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }


        const team = this.state.team
        const slug = team.name.replace(/\W/g, '');

        return (
            <TeamWrapper>
                <Teams />
                <div className={`team ${slug}`}>
                    <header className="team-header">
                        <img src={`../images/${slug}Logo.svg`} alt='logo' />
                        <h2>{team.name}</h2>
                    </header>
                    <div className='team-info'>
                        <div>
                            <h5>Manager: <p>{team.name}</p></h5>
                        </div>
                        <section>
                            <h5>Stadium: <p>{team.stadium_name}</p></h5>
                            <button style={{ color: team.primary_color ,background:team.secondary_color }}type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">Click here for {team.stadium_name} view</button>
                         </section>
                        <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div style={{background: team.primary_color}} class="modal-content">
                                    <div class="modal-header">
                                        <h5 style={{ color: team.secondary_color }} class="modal-title" id="exampleModalLabel">{team.name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <img src={team.stadium} alt="stadium" className="stadium-image" />
                                        <h4 style={{ color: team.secondary_color }}>{team.stadium_name}</h4>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <h6>For more information about {team.stadium_name}, please visit our stadium page</h6>
                                    </div>
                                </div>
                            </div>
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


                    <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                        <thead>
                            <tr style={{ background: team.primary_color }}>
                                <th style={{ color: team.secondary_color }}><abbr title="Jersey Number">Num</abbr></th>
                                <th style={{ color: team.secondary_color }}><abbr title="Player Photo">Photo</abbr></th>
                                <th style={{ color: team.secondary_color }}><abbr title="Full Name">Name</abbr></th>
                                <th style={{ color: team.secondary_color }}><abbr title="Position">Pos</abbr></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.players.map((player, i) => {
                                return (
                                    <tr key={i} className="player-info" style={{ background: team.primary_color }}>
                                        <td style={{ color: team.secondary_color }}>{player.jersey_number}</td>
                                        <td><img src={player.photo} className='photo' /></td>
                                        <td style={{ color: team.secondary_color }}>{player.full_name}</td>
                                        <td style={{ color: team.secondary_color }}>{player.position}</td>
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
