import React from 'react'

const User = (props)=>{
    const {details} = props
    if(!details){
        return <h3>Fetching your lost data...</h3>
    } else

    return(
        <div className='friend-container'>
            <h2>{details.first_name}</h2>
            <h2>{details.last_name}</h2>
            <h3>User Id: {details.id}</h3>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>

        </div>
    )
};

export default User;