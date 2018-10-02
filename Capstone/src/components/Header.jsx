import React, { Component } from 'react';

import styled from 'styled-components'
import logo from '../images/EPL-Logo.svg'
import logo1 from '../images/EPL-Background1.gif'


const HeaderWrapper = styled.div`
    // margin: auto;
    // these are the 4 main colors that are going to be used
    // background-color: #75fa93;
    background-color: #32063A;
    // background-color: #D62E55;
    // background-color: #6CEEFC;

    
    
    .EPL-logo {
        height: 9em;
        margin-left: -1em;
        background-image: url(${logo1});
    }
    
    .team-logo {
        height: 3em;
        display: flex;
        justify-content: space-around;
    }
    

    .teams {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 12px;
        background-image: url(${logo1});
        
    }

    .intro {
        padding: 0
    }

    @keyframes bounce {
        0%, 20%, 60%, 100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    
        40% {
            -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
        }
    
        80% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
    }

    .team-logo:hover {
        animation: bounce 1s;
    }

`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <section className="teams">
                    <img src={logo} className="EPL-logo" alt="logo" />
                    <img src="/images/ArsenalLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/BournemouthLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/BrightonLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/BurnleyLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/CardiffCityLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/ChelseaLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/CrystalPalaceLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/EvertonLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/FulhamLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/HuddersfieldTownLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/LeicesterCityLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/LiverpoolLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/ManchesterCityLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/ManchesterUnitedLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/NewcastleUnitedLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/SouthamptonLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/TottenhamSpursLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/WatfordLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/WestHamUnitedLogo.svg" className="team-logo" alt="logo" />
                    <img src="/images/WolverhamptonLogo.svg" className="team-logo" alt="logo" />
                </section>

            </HeaderWrapper>
        );
    }
}

export default Header;

// Save this for later
{/* <section className="teams">
                    <img src={EPL_logo} className="EPL-logo" alt="logo" />
                    <a href="https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Arsenal} className="team-logo" alt="logo" />
                    <a href="https://www.afcb.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Bournemouth} className="team-logo" alt="logo" /></a>
                    <a href="https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Brighton} className="team-logo" alt="logo" /></a>
                    <a href="http://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Burnley} className="team-logo" alt="logo" /></a>
                    <a href="https://www.cardiffcityfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={CardiffCity} className="team-logo" alt="logo" /></a>
                    <a href="https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Chelsea} className="team-logo" alt="logo" /></a>
                    <a href="http://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={CrystalPalace} className="team-logo" alt="logo" /></a>
                    <a href="http://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Everton} className="team-logo" alt="logo" /></a>
                    <a href="http://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Fulham} className="team-logo" alt="logo" /></a>
                    <a href="https://www.htafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={HuddersfieldTown} className="team-logo" alt="logo" /></a>
                    <a href="https://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={LeicesterCity} className="team-logo" alt="logo" /></a>
                    <a href="https://www.liverpoolfc.com/welcome-to-liverpool-fc"><img src={Liverpool} className="team-logo" alt="logo" /></a>
                    <a href="https://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={ManchesterCity} className="team-logo" alt="logo" /></a>
                    <a href="http://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={ManchesterUnited} className="team-logo" alt="logo" /></a>
                    <a href="https://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={NewcastleUnited} className="team-logo" alt="logo" /></a>
                    <a href="https://southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Southampton} className="team-logo" alt="logo" /></a>
                    <a href="http://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={TottenhamSpurs} className="team-logo" alt="logo" /></a>
                    <a href="https://www.watfordfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Watford} className="team-logo" alt="logo" /></a>
                    <a href="https://www.whufc.com/"><img src={WestHamUnited} className="team-logo" alt="logo" /></a>
                    <a href="https://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Wolverhampton} className="team-logo" alt="logo" /></a>
                </section>
                {/* <div className="intro">
                    <h6>Link to Official Team Page</h6>
                </div> */} 
