import React,{useState, useEffect} from 'react';
import UserForm from './Components/UserForm'
import User from './Components/User'
import * as yup from 'yup'
import schema from './Components/Validation'
import './App.css';
import axios from 'axios';

//Setting initial States

const initialFormValues = {
   first_name:'',
   last_name: '',
   email: '',
   password:'',
   id:`${Math.floor(Math.random()* 1000)}`,
   role: '',
   //checkboxes
   terms: false,
}


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

  const getUsers = () =>{
    axios.get('https://reqres.in/api/users')
    .then(response=>{
      console.log(response.data.data)
      setUsers(response.data.data)
    })
    .catch(error=>{
      console.log('YOUR ERROR ------------>', error)
    })
  }

  const postNewUser = (newUser) =>{
    axios.post('https://reqres.in/api/users', newUser)
    .then((response)=>{
      setUsers([response.data, ...users])
      setFormValues(initialFormValues)
    })
    .catch(error=>{
      console.log('YOUR ERROR ------------>', error)
    })
  }

  //on change and on submit functions declared here

  
  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(()=>{
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(error=>{
      setFormErrors({...formErrors, [name]: error.errors[0]})
    })

    setFormValues({...formValues,[name]: value})
  };
  
  const formSubmit = () =>{
    const newUser ={
      name: formValues.name.trim(),
      role: formValues.role.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }
      useEffect(()=>{
        getUsers()
      }, [])

      useEffect(()=>{
        schema.isValid(formValues)
        .then(valid=>{
          setDisabled(!valid)
        })
      },[formValues])


  return (
    <div className="App">
      <h1>Hello</h1>
      <UserForm 
      values={formValues}
      disabled={disabled}
      error={formErrors}
      submit={formSubmit}
      change={inputChange}
      />
      
      {users.map((user)=>{
        return <User key={user.id} details={user}/>
      })}
    </div>
  );
}

export default App;
