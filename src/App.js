import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './Components/global/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtonGroup from './Components/global/ButtonGroup';
import MaterialButton from './Components/global/MaterialButton';
import { Provider } from 'react-redux';
import store from './store';
import ToDoList from './Components/List';

class App extends Component {
  constructor(props){
    super(props);
    this.changeNotetakingMode=this.changeNotetakingMode.bind(this)
  }
  state = {mode:0}

  changeNotetakingMode(modeIndex){
    // change notetaking view based on which button is clicked in the button group
    // console.log(modeIndex);

    this.setState({mode:modeIndex},
      () => {console.log(this.state.mode)}
    );
    console.log(this.state.mode);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <ToDoList></ToDoList>
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/todo" component={ToDoList}/>
            {/* <Route path="/topics" component={Topics}/> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
