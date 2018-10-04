import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import image from '../images/EPL-Logo4.png'
import NavBar from './NavBar';


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
			teamButtons: []
		}
	};

	componentDidMount() {

		// see if I can fetch from my back-end
		fetch(`http://localhost:3000/teams.json`)
			.then(resp => resp.json())
			.then(teams => {
				console.log("hello", teams)
				this.setState({
					teamButtons: teams

				})
			})
	}

	render() {
		return (
			<TeamsWrapper>
				<NavBar />
				<img src={image} className="EPL-logo" alt="logo" />
				<div className="wrapper">
					{this.state.teamButtons
						.sort((a, b) => a.team_name < b.team_name ? -1 : 1)
						.map((team) => {
							return <div className="teams" key={team.id}>
								<Link to={`/teams/${team.name.replace(/\W/g, '')}`}><img src={team.logo} /></Link>
							</div>
						})
					}

					IS THIS WORKING?
                </div>
			</TeamsWrapper>
		)
	}
}

export default Teams;
