import React, { Component } from 'react';
import styled from 'styled-components'


const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"

const TeamWrapper = styled.div`
img {
    height: 8em;
}

.team-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // border: 1px solid blue;
}

td, th {
    border-bottom: 2px solid lightgrey;
}


.main-table {
    padding-top: 1em;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    // I'm going to try and fetch my backend information


    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }
        const slug = this.state.club.name.replace(/\s/g, '');

        return (
            <TeamWrapper>
                <div className={`team ${slug}`}>
                    <header className="team-header">
                        <h2>{this.state.club.name}</h2>
                        <img src={`../images/${slug}Logo.svg`} />
                        <h5>Manager: <p>{this.state.club.coach_name}</p></h5>
                        <h5>Stadium: <p>{this.state.club.venue_name}</p></h5>
                    </header>

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
                    <div>
                        {/* <img src={this.state.kits.home_kit} /> */}
                    </div>
                </div>
            </TeamWrapper>
        )
    }
}

export default Team;
