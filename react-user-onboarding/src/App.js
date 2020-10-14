import React,{useState, useEffect} from 'react';
import UserForm from './Components/UserForm'
import User from './Components/User'
import * as yup from 'yup'
import schema from './Components/Validation'
import './App.css';

//Setting initial States

const initialFormValues = {
   first_name:'',
   last_name: '',
   email: '',
   password:'',
   avatar: '',
   id:`${Math.floor(Math.random()* 1000)}`,
   role: '',
   //checkboxes
   terms: false,
}

console.log(initialFormValues)

const initialFormErros = {
  name: '',
  email: '',
  password: '',

}

const initialUsers = []
const initialDisabled = true;

function App() {
  //App states
  const [users, setUsers] = useState(initialUsers)//array of users
  const [formValues, setFormValues] = useState(initialFormValues)//an object
  const [formErrors, setFormErrors] = useState(initialFormErros)//an object
  const [disabled, setDisabled] = useState(initialDisabled)//boolean

  //on change and on submit functions declared here

  const formSubmit = () =>{
    const newUser ={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues,[name]: value, // NOT AN ARRAY
});
  };
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <UserForm 
      values={formValues}
      disabled={disabled}
      error={formErrors}
      onSubmit={formSubmit}
      change={inputChange}
      />
      <User/>
    </div>
  );
}

export default App;
