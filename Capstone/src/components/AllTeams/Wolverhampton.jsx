import React, { Component } from 'react';
import WolverhamptonLogo from '../../images/WolverhamptonLogo.svg'
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
    background: #F4BB44;
    color: #221F20;
    
}

.main p {
    font-size: 18px;


}


.team-logo {
    height: 6em;
    background: #221F20;
    padding: 5px;
}

`



class Wolverhampton extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Wolverhampton</p>
                    <img src={WolverhamptonLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default Wolverhampton;
