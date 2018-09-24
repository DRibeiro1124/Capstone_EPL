import React, { Component } from 'react';
import WestHamUnitedLogo from '../../images/WestHamUnitedLogo.svg'
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
    background: #722B3A;
    color: #F7F9FC;
    
}

.main p {
    font-size: 18px;


}


.team-logo {
    height: 6em;
    background: #4EAFE3;
    padding: 5px;
}

`



class WestHam extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>West Ham United</p>
                    <img src={WestHamUnitedLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default WestHam;
