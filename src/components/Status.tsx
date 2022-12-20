import { message } from 'antd'
import React from 'react'

type statusProps=
{
    status:'loading'|'success'|'error'

}

const Status = (props:statusProps) => {
    let message;
    if(props.status==="loading")
        {
            message="Loading..."
        }
        else if(props.status==="success")
        {
            message="Sucess"
        }
        else if(props.status==="error")
        {
            message="Error while fetching..."
        }
  return (
    <div>
        <h2>Status : {message}</h2>
    </div>
  )
}

export default Status