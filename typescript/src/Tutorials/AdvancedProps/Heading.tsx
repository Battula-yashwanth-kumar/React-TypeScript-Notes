import React from "react"
type HeadingProps={
    children:String
}
export const Heading=(props:HeadingProps)=>{
    return <h1>{props.children}</h1>
}