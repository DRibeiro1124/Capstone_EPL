import React, { Component } from 'react';
import LeicesterCityLogo from '../../images/LeicesterCityLogo.svg'
import styled from 'styled-components'

const TeamWrapper = styled.div`

.main {
    border: 1px solid black;
    // margin: 1em;
    margin-top: 8px;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 1em;
    height: 14em;
    width: 12em;
    background: #0A328A;
    color: #F7F9FC;
    
}

.main p {
    font-size: 18px;


}


.team-logo {
    height: 6em;
    background: #F7F9FC;
    padding: 5px;
}

`



class LeicesterCity extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Leicester City</p>
                    <img src={LeicesterCityLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default LeicesterCity;
