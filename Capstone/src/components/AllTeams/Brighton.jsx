import React, { Component } from 'react';
import BrightonLogo from '../../images/BrightonLogo.svg'
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
    background: #1E54A0;
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



class Brighton extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Brighton & Hove</p>
                    <img src={BrightonLogo} className="team-logo" alt="logo" />
                    <p>Albion FC</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default Brighton;

