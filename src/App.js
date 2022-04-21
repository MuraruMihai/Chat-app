import logo from './logo.svg';
import './App.css';
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import React from "react";
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
  return(
      <ChatEngine
        height="100vh"
        projectID="97d664bf-6671-410e-8c78-e659134fe974"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppState) => <ChatFeed { ... chatAppState}/>}
      />
  )
}

export default App;
