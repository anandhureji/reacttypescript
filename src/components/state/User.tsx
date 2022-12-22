import React, { useState } from 'react'

type AuthUser = {
    name:string
    email:string
}

const User = () => {

    const [user,setUser] = useState<AuthUser | null>(null)  //setting the type of state to AuthUser or null

    const handleLogin =()=>{
        setUser({
            name:'Anandhu',
            email:'anandhu@gmail.com',
        })

    }

    const handleLogout =()=>{
        setUser(null)

    }

  return (
    <div>
        <button onClick={handleLogin}>Login As User</button>
        <button onClick={handleLogout}>Logout As User</button>   
        <div>User name is {user?.name}</div>     
        <div>User email is {user?.email}</div>   
    </div>
  )
}

export default User
