import Chat from "./chat/chat";
import Process from "./process/process";
import Home from "./home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";
import img5 from './download.png'
import DisplayImage from "./upload";
import ImageUploader from 'react-images-upload';
const socket = io.connect('/');

function Appmain(props) {

  return (
    <React.Fragment>
      <div className="right">     
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
 
        <Process />
      </div>
    </React.Fragment>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}

render(){

  
  return (
  
    <Router>
      <div className="App">
    
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
        
        </Switch>
       
      </div>
    </Router>
  );
}
}

export default App;