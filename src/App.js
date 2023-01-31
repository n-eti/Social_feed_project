import './App.css';
import React, { useState } from 'react';
import DisplayForms from './Components/DisplayForms/DisplayForms';

function App() {

  const[posts, setPosts] = useState({name:'', body:'', likedStatus:true})

  return(
    <>
   <DisplayForms parentEntries= {posts}/>
    </>
)}

export default App;
