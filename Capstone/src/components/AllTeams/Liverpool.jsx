import React, { Component } from 'react';
import LiverpoolLogo from '../../images/LiverpoolLogo.svg'
import styled from 'styled-components'

const TeamWrapper = styled.div`

.main {
    border: 1px solid black;
    margin: 1em;
    display: flex;
    flex-direction: column;
    border-radius: 25px 25px;
    background: #A92D2A;
    color: #F7F9FC;
    
}

.main p {
    font-size: 18px;
    font-family: "Premier League", serif;
}


.team-logo {
    height: 6em;
    background: #F7F9FC;
    padding: 5px;
}





`



class Liverpool extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Liverpool Football Club</p>
                    <img src={LiverpoolLogo} className="team-logo" alt="logo" />
                    <p>You'll Never Walk Alone</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default Liverpool;
