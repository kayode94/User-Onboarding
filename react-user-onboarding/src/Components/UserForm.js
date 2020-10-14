import React from 'react'

const UserForm = (props)=>{
    const {values, submit, change, disabled, error} = props

    const onSubmit = event =>{
        event.preventDefault();
        submit();
    }

    const onChange = event =>{
        const {name, value, type, checked} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    return(
        <form className = "form-container">

            <div className="form-group submit">
                <h2>Add a new User</h2>
                <button onClick={onSubmit}>Submit</button>
                
                {/* rendering any validation erros */}
                <div className='errors'>
                    <div>{error.name}</div>
                    <div>{error.password}</div>
                    <div>{error.email}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>
                <label>
                    First Name{' '}
                    <input 
                    defaultValue={values.first_name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>
                    Last Name{' '}
                    <input 
                    defaultValue={values.last_name}
                    onChange={onChange}
                    name='last_name'
                    type='text'
                    />
                </label>

                <label>
                    Email{' '}
                    <input 
                    defaultValue={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                    />
                </label>
                <label>
                    Password{' '}
                    <input 
                    defaultValue={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                
                <label>
                    Role{' '}
                    <select onChange={onChange} value={values.role} name='role'>
                        <option value=''>---Select a Role---</option>
                        <option value='Student'>Student</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='tl'>Team Lead</option>
                        <option value='Aspirant'>Aspirant</option>
                    </select>
                </label>
                
                {/* Checkbox Label */}
                <label>
                    Terms & Conditions {' '}
                    <input type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
};

export default UserForm;