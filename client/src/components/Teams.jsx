import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import image from '../images/EPL-Logo4.png'
import NavBar from './NavBar';


const TeamsWrapper = styled.div`

.teams-container {
    display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 3em;
	text-decoration: none;
}

.EPL-logo {
	height: 8em;
	border: 1px solid #32063A;
    background-color: #75fa93;
    border-radius: 15px 75px;
	margin: 10px;
	box-shadow: 10px 10px;
}

img {
	height: 3em;
	justify-content: space-evenly;
}

p {
	font-family: 'Nunito', sans-serif;
	font-size: 13px;
	margin: 10px; 
}

// remove line from links
a {
	text-decoration: none;
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
		fetch(`/teams.json`)
			.then(resp => resp.json())
			.then(teams => {
				// console.log("hello", teams)
				this.setState({
					teamButtons: teams.sort((a, b) => a.name < b.name ? -1 : 1)
				})
			})
	}

	render() {
		return (
			<TeamsWrapper>
				<NavBar />
				<img src={image} className="EPL-logo" alt="logo" />
				<div className="teams-container">
					{this.state.teamButtons
						.map((team) => {
							return <div className="teams" key={team.id}>
								<Link to={`/teams/${team.id}`}>
									<img src={team.logo} alt="team-logo" />
									<p>{team.name}</p></Link>
							</div>
						})
					}

				</div>
			</TeamsWrapper>
		)
	}
}

export default Teams;
