import React from "react";
type GreetProps={
    name:String
    messageCount?:number
    isLoggedIn:boolean
}
export const Greet=(Props:GreetProps)=>{

    const {messageCount=0}=Props
    return(
        <div>
            <h2>
                {Props.isLoggedIn?
                `Welcome S{Props.name}! You have ${messageCount} unread messages`
                :
                `Welcome Guests`
                }
            </h2>
            
        </div>
    )
}