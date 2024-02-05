import React from "react"
export type ProfileProps={
    name:String
}
export const Profile=({name}:ProfileProps)=>{
    return <div>Private Profile Component.Name is {name}</div>
}