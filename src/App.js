import logo from './logo.svg';
import {React, useState} from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [credentials, setCredentials] = useState({
    huxley: {
      password: 's3kr3t'
    }
  });

  const checkCredentials = (username, password) => {
    console.log('checking credentials');
    const userObj = credentials[username];
    if (userObj && (userObj.password === password)) {
      // If we found a user in this.state.credentials 
      // and the passwords match.
      return {
        isValid: true,
        message: 'Login succesful'
      }
    } else {
      // We couldn't find a user with that username
      // or the passwords didn't match.
      return {
        isValid: false,
        message: 'Bad username or password'
    };
    }
  }

  return (
    <div className="App">
      <LoginForm handleSubmit={checkCredentials}/>
    </div>
  );
}

export default App;
