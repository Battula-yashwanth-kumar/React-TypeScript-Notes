import React from "react";

type StatusProps={
    status:'loading'|'success'|'error'
}
export const Status=(props:StatusProps)=>{
    let message=''
    if(props.status==='loading'){
        message='loading'
    }
    else if(props.status==='success'){
        message='Data fetched Successfully'
    }
    else if(props.status==='error')
    {
     message='Error Fetching Data'

    }
    return(
        <div>
            <h2>Status-{message}</h2>
        </div>
    )
}