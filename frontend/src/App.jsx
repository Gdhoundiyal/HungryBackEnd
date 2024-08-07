import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then(response => {
      console.log(response);
      setCount(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }, []);
  return (<div><h1> hELLOOOO+===</h1></div>)
}

export default App;
