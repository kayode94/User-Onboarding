import React from 'react';
import UserForm from './Components/UserForm'
import User from './Components/User'
import * as yup from 'yup'
import schema from ''
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <UserForm/>
      <User/>
    </div>
  );
}

export default App;
