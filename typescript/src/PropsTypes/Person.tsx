import { PersonProps } from "./Person.types";

import React from "react";


export const Person =(props:PersonProps)=>{
    return (
        <div>
            {props.name.first}{props.name.last}
        </div>
    )
}