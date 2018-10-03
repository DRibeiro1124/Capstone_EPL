import React, { Component } from 'react';
import styled from 'styled-components'


const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"

const TeamWrapper = styled.div`
img {
    height: 15em;
}

.team-info {
    display: flex;
    flex-direction: column;
}

p {
    color: #000;
}

td {
    border: 1px solid white;
}

tr {
    display: flex;
    justify-content: space-evenly;
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    color: #000;
}

.player-info {
    display: flex;
    justify-content: space-evenly;
}


`
class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: {
                squad: []
            },
            loading: true
        }
    };

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`${base_URL}team/${id}?${api_key}`)
            .then(resp => resp.json())
            .then(newClub => {
                console.log(newClub)
                this.setState({
                    club: newClub,
                    loading: false
                })
            })
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }
        const slug = this.state.club.name.replace(/\s/g, '');

        return (
            <TeamWrapper>
                <div className={`team ${slug}`}>
                    <h1>{this.state.club.name}</h1>
                    <img src={`../images/${slug}Logo.svg`} />
                    <section className="team-info">
                        <h5>Manager: <p>{this.state.club.coach_name}</p></h5>
                        <h5>Stadium: <p>{this.state.club.venue_name}</p></h5>
                    </section>

                    <table>
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
                                    <tr  key={i} className="player-info">
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
