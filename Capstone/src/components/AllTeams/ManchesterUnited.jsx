import React, { Component } from 'react';
import ManchesterUnitedLogo from '../../images/ManchesterUnitedLogo.svg'
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
    background: #BB2F26;
    color: #FCE84E;
    
}

.main p {
    font-size: 18px;


}


.team-logo {
    height: 6em;
    background: #FCE84E;
    padding: 5px;
}

`



class ManchesterUnited extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Manchester United</p>
                    <img src={ManchesterUnitedLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
} 

export default ManchesterUnited;
