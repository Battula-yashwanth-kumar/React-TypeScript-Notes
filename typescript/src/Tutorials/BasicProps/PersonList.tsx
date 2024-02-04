import React from "react";
type PersonListProps={
    names:{
        first:String,
        last:String
    }[]
}

export const PersonList=(props:PersonListProps)=>{
    return (
        <div>
            {
                props.names.map((prop)=>{
                    return (
                        <h2>{prop.first}{prop.last}</h2>
                    )

                })
            }
        </div>
    )
}