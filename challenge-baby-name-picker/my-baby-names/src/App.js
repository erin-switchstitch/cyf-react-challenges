import './App.css';
import React from "react"; 
import BabyNames from "./babyNamesData.json"
import UnorderedList from './UnorderedList';
import InsertSearchBar from './InsertSearchBar';

function App() {
  console.log(BabyNames);
  return (
    <html>
      <header>
        <h1>Baby Name Picker</h1>
      </header>
      <body>
        < InsertSearchBar/>
        <div className="UlContainer">
          < UnorderedList data={BabyNames}/>
        </div>
      </body>
    </html>  
  );
}

export default App;
