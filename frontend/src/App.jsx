import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("/api/login").then( (response) => {
      console.log(response);
      // setCount(response);
    });
  });
  return (<div>{count}</div>)
}

export default App;
