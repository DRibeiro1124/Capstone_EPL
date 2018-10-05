import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';

const ManagerWrapper = styled.div`
.display {
    list-style: none;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.manager {
    font-family: 'Nunito', sans-serif;
    font-size: 25px;
}

img {
    height: 12em;
}

`


class Managers extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            managers: []
        }
    };
    
componentDidMount() {
    fetch(`http://localhost:3000/managers.json`)
        .then(resp => resp.json())
        .then(managers => {
            // console.log("is this working", managers)
            this.setState({
                managers: managers
            })
        })
}


    render() {
        return (
            <ManagerWrapper>
                <NavBar />
            <div>
                <section className="main-container">
                    {this.state.managers.sort(function (a,b) {
                        if (a.full_name < b.full_name) return -1;
                        if (a.full_name > b.full_name) return 1;
                        return 0
                    }).map((managers, i) => {
                            return (
                                <ul key={i} className="display">
                                    <li className="manager">{this.state.managers[i].full_name}</li>
                                    <li><img src={this.state.managers[i].photo} className="photo" alt="manager" /></li>
                                </ul>
                            )
                        })
                    })}
                </section>
            </div>
            </ManagerWrapper>
        );
    }
}

export default Managers;
