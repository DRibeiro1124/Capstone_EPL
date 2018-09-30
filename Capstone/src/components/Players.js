// import React, { Component } from 'react';

// const base_URL = "http://api.football-api.com/2.0/"
// const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"

// class Players extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             players: []
//         }
//     };

//     componentDidMount() {
//         fetch(`${base_URL}player/237?${api_key}`)
//             .then(resp => resp.json())
//             .then(players => {
//                 console.log("works?", players);
//                 this.setState({
//                     players: players
//                 })

//             })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.players.map((players, i) => {
//                     return (
//                         <h1 key={i}>{this.players}</h1>
//                     )
                    
//                 })}
//             </div>
//         );
//     }
// }

// export default Players;
