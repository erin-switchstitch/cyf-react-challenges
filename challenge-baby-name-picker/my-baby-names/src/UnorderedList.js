import React, { useState , useEvent } from "react";
import BabyNames from "./babyNamesData.json";
import Favourites from "./Favourites";

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

let newUnorderedList = [];

function SearchBarLogic (searchTerm) {
    
    newUnorderedList = [];
    console.log("NEW SEARCH !!!!!!!!!!!!!!!!!!!!!!");
    searchTerm.toLowerCase();

    BabyNames.forEach(function(element,index){
        console.log(searchTerm);
        const lowerCaseName = element.name.toLocaleLowerCase();

        if (lowerCaseName.includes(searchTerm) === true){
            console.log(element.name);
            newUnorderedList.push(element);
        }
    })
    console.log(newUnorderedList);
    return newUnorderedList;
};


function MainFunc(){

    let sortedBabyNames = BabyNames.sort( compare );
    const [Data, updateData] = useState(sortedBabyNames);
    const [searchInput, setSearchInput] = useState('');
    const [favouritesList, updateFavourites] = useState([]);
    
    function updateNamesDisplayed(event){
        SearchBarLogic(event.target.value)
        updateData(newUnorderedList);
        setSearchInput(event.target.value);
    }

    function addToFavourites(e){
        console.log(e.target.innerText);
        console.log(e.target.className)
        updateFavourites(favouritesList.concat({"name":e.target.innerText, "sex": e.target.className}));
        e.preventDefault();

        // I am pretty confused here. Ideally I would like to pass the element that has been clicked to this
        // function, and then pass it to the updateFavourites setState. However when I do this I get an error
        // as the function becomes an infinite loop (callstack error) ... don't know why. 

        // Instead I have taken the event object as a parameter and then can pull the 'name' from the element 
        // clicked from the event object - then I pass this to the updateFavourites useState;
        
        // Don't understand this preventDefault thing 
    }

    function RadioButtonLogic (event) {
        newUnorderedList = [];
        
        if (event.target.value === "all"){
            updateData(sortedBabyNames);
        } else {
            BabyNames.forEach(function(element,index){
                if (element.sex.includes(event.target.value) === true){
                    console.log(element);
                    newUnorderedList.push(element);
                }
            })
            console.log(newUnorderedList);
            updateData(newUnorderedList);
        }
        

    };


    return (
        <div className="UlContainer">
            <input className="searchBar" type="text" placeholder="Search.." value={searchInput} onChange={updateNamesDisplayed}></input>
            
            <div onChange={RadioButtonLogic}>
                <input type="radio" value="all" name="gender" /> Show All
                <input type="radio" value="m" name="gender" /> Male
                <input type="radio" value="f" name="gender" /> Female
                <input type="radio" value="n" name="gender" /> Gender Neutral
            </div>
            <Favourites favList = {favouritesList}/>
            <ul>
                {Data.map((element, index) => {
                // console.log(element);
                return (<li key={element.id} className={element.sex} onClick={addToFavourites} data-id={element.id}>{element.name}</li>)
            })}
            </ul>
        </div>
    )
}

export default MainFunc;



