import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../images/EPL-Logo4.png'
import NavBar from './NavBar';


const TeamsWrapper = styled.div`

.teams-container {
    display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 3em;
	text-decoration: none;
}

.EPL-logo {
	height: 8em;
	border: 1px solid #32063A;
    background-color: #75fa93;
    border-radius: 15px 75px;
	// margin: 10px;
	box-shadow: 10px 10px;
}

.logo {
    height: 4em;
	margin: 0.5em;
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

.teams-header {
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background: #75FA93;
    border: 1px solid black;
	margin-top: 1em;
    border-radius: 15px 75px;
    box-shadow: 10px 8px;
}

.main-container {
    display: flex;
    flex-direction: column;
    margin: 0 25px 0 25px;
    padding: 5px;
}

.badges {
	height: 8em;
	margin: 1em;
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
				<div className='main-container'>
					<header className="teams-header">
						<img src={logo} className="logo" alt="logo" />
						<h1>2018/19 EPL Teams</h1>
					</header>
					<div className="teams-container">
						{this.state.teamButtons
							.map((team) => {
								return <div className="teams" key={team.id}>
									<Link to={`/teams/${team.id}`}>
										<img className="badges" src={team.logo} alt="team-logo" />
										<p>{team.name}</p></Link>
								</div>
							})
						}
					</div>
				</div>
			</TeamsWrapper>
		)
	}
}

export default Teams;
