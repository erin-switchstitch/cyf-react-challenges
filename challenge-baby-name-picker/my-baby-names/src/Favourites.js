import React, { useState , useEvent } from "react";

function Favourites (props){
    console.log(props);
    return (
        <div>
            <h1>Favourites: </h1>
            <ul>
                {props.favList.map(function(element,index){
                    return (<li className={element.sex} id={index}>{element.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default Favourites;
