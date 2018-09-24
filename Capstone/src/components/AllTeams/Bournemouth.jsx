import React, { Component } from 'react';
import BournemouthLogo from '../../images/BournemouthLogo.svg'
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
    background: #C6322D;
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



class Bournemouth extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>AFC</p>
                    <img src={BournemouthLogo} className="team-logo" alt="logo" />
                    <p>Bournemouth</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default Bournemouth;

