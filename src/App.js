import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [message, setMessage] = useState([]);

  return (
    <div> 
      <Home></Home>
    </div>
  );
}

export default App;
