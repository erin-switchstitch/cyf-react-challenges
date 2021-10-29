import './App.css';
import React from "react"; 
import BabyNames from "./babyNamesData.json"
import MainFunc from './UnorderedList';

function App() {
  console.log(BabyNames);
  return (
    <html>
      <header>
        <h1>Baby Name Picker</h1>
      </header>
      <body>
        {/* < InsertSearchBar/> */}
        <MainFunc/>
      </body>
    </html>  
  );
}

export default App;
