import React, { useEffect } from "react";
import axios from "axios";
import Matches from './components/Matches'
import Profile from './components/Profile'
import {
  baseUrl,
  axiosConfig
} from './constants/constants'

function App() {
  return (
   <div>
    <Profile/>
    
    <Matches/>
  </div>
  );
}

export default App;
