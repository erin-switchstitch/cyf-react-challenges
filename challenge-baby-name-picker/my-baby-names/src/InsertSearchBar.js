import React, { useState , useEvent } from "react";
import BabyNames from "./babyNamesData.json"
import UnorderedList from "./UnorderedList";

let newUnorderedList = [];

function InsertSearchBar () {
    const [searchInput, setSearchInput] = useState('');

    function handleSearchInput(event){
        console.log(event.target.value);
        setSearchInput(event.target.value);
        SearchBarLogic(event.target.value);
        return(
            <UnorderedList data={newUnorderedList}/>
        )
    };

    return (
        <input className="searchBar" type="text" placeholder="Search.." value={searchInput} onChange={handleSearchInput}></input>
    )
}

function SearchBarLogic (searchTerm) {

    console.log("NEW SEARCH !!!!!!!!!!!!!!!!!!!!!!");
    searchTerm.toLowerCase();

    BabyNames.forEach(function(element,index){
        console.log(searchTerm);
        element.name.toLocaleLowerCase();

        if (element.name.includes(searchTerm) === true){
            console.log(element.name);
            newUnorderedList.push(element);
        }
    })
    console.log(newUnorderedList);




}


export default InsertSearchBar;