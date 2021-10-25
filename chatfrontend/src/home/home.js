import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import img5 from '../download.png';
function Homepage({ socket }) {
  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");
  //activates joinRoom function defined on the backend
  const sendData = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
      //if empty error message pops up and returns to the same page
    } else {
      alert("username and Department are must !");
      window.location.reload();
    }
  };

  return (
    <div className="homepage">
      <img src={img5} className="rounded float-center" alt="aligment" style ={{ height:60, float:'right',width:160, 
   displayName:'flex'}}alt="Null"/> 
      <h3>WELCOME TO RUBUS LIVE CHAT</h3>
      <input
        placeholder="Input your user name"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <input
        placeholder="Input the Department name"
        value={roomname}
        onChange={(e) => setroomname(e.target.value)}
      ></input>
      <Link to={`/chat/${roomname}/${username}`}>
        <button onClick={sendData}>Join</button>
      </Link>
    </div>
  );
}

export default Homepage;