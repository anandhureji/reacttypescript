import React from 'react'

type InputProps = {
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = (props:InputProps) => {
  return (
    <div>
        <input type='text' value={props.value} onChange={props.handleChange}></input>
    </div>
  )
}

export default Input