import React, { Component } from 'react';
import CrystalPalaceLogo from '../../images/CrystalPalaceLogo.svg'
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
    background: #194A92;
    color: #F7F9FC;
    
}

.main p {
    font-size: 18px;


}


.team-logo {
    height: 6em;
    background: #DC4D34;
    padding: 5px;
}

`


class CrystalPalace extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Crystal Palace</p>
                    <img src={CrystalPalaceLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default CrystalPalace;

