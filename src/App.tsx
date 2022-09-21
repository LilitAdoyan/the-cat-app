import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom"

import './App.css';



const Http = new XMLHttpRequest();
const url='https://api.thecatapi.com/v1/categories';
Http.open("GET", url);
Http.send();

/* Http.onreadystatechange = (e) => {
  console.log(JSON.parse(Http.responseText), 'hi')
} */



/* const b=fetch('https://api.thecatapi.com/v1/categories')
  .then((response) => response.json())
  .then((data) => console.log(data)); */
function App() {
/*   const [category, setCategory]=useState();
 */  const location = useLocation();
  console.log(location, 'location');

  const handleCategoryClick= ()=>{
/* setCategory()
 */  }
  return (
    <div className="App">
    {/*   <Routes>
    
        
      </Routes> */}
   <div className='ctegory-wrapper'> {JSON.parse(Http.responseText).map((item:any)=>{return <div onClick={handleCategoryClick} className='category'>{item.name}</div>})}</div>
    </div>
  );
}

export default App;
