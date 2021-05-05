import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import './chat.css'

const projectID = 'f27ddfad-772b-4745-a7eb-55affda74429';

const chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

 
  );
};

// infinite scroll, logout, more customizations...

export default chat;
