import React, { useState , useEvent } from "react";

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


function UnorderedList(props){
    let sortedData = [];
    
    const [UlData, updateUlData] = useState(props.data);
    
    function changeDisplayData(newUlData){
        updateUlData(newUlData);
    }

    sortedData = props.data.sort( compare );
    console.log(sortedData);

    return (
        <ul>
          {sortedData.map((element, index) => {
            // console.log(element);
           return <li key={element.id} class={element.sex}>{element.name}</li>
          })}
        </ul>
    )
}

export default UnorderedList;  







    // if (props.data != undefined){
    //     sortedData = props.data.sort( compare );
    // } else {
    //     sortedData = props.sort( compare );
    // }