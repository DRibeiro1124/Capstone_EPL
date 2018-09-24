import React, { Component } from 'react';
import WatfordLogo from '../../images/WatfordLogo.svg'
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
    background: #FAED57;
    color: #DB3A34;
    
}

.main p {
    font-size: 18px;


}


.team-logo {
    height: 6em;
    background: #DB3A34;
    padding: 5px;
}

`



class Watford extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Watford</p>
                    <img src={WatfordLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default Watford;

