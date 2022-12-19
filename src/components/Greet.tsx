import React from 'react'
type GreetProps = {
    name: string
    subject: string
    isLoggedin : boolean
}

function Greet(props: GreetProps) {
  return (
    <div>
        {props.isLoggedin?<h2>Welcome {props.name} , welcome to {props.subject} </h2>:<h2>Welcome guest</h2>}
        
      
    </div>
  )
}

export default Greet
