// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {Component} from "react";
import Hello from "./Hello";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  delete = () => {
    this.setState({display: false});
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <Hello />;
    }
    return (
      <div style = {{textAlign: 'center'}}>
        {comp}
        <button onClick = {this.delete}>
          Delete the component
        </button>
      </div>
    );
  }
}

export default App;