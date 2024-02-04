import React from "react"
type PersonPros={
    name:{
        first:String,
        last:String
    }
}
export const Person =(props:PersonPros)=>{
    return (
        <div>
            {props.name.first}{props.name.last}
        </div>
    )
}