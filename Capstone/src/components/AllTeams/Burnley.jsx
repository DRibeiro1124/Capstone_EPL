import React, { Component } from 'react';
import BurnleyLogo from '../../images/BurnleyLogo.svg'
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
    background: #77294B;
    color: #F7F9FC;
    
}

.main p {
    font-size: 18px;


}


.team-logo {
    height: 6em;
    background: #9DD1F1;
    padding: 5px;
}

`



class Burnley extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Burnley</p>
                    <img src={BurnleyLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default Burnley;

