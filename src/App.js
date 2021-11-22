import React, { useState } from "react";
import Content from "./components/Content";


function App() {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState([]);
  const [isVisible, setVisibility] = useState(true);


  const fetchRandomData = () => {

    const url = 'https://randomuser.me/api/';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.results.forEach(person => {
          setPerson(person);
          setVisibility(false);
        });
      })
      .catch((error) => {
        console.log("error");
      })
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", padding: "5px" }}>
      <div>{counter}</div>
      <div>
        <button onClick={() => setCounter(counter + 1)} style={{ margin: "8px", padding: "5px" }}>increase counter</button>
      </div>
      <div>
        <button onClick={() => fetchRandomData()} style={{ margin: "8px", padding: "5px" }}>fetch random data</button>
      </div>
      <div>{!isVisible ? <Content firstName={person.name.first} lastName={person.name.last} image={person.picture.large} /> : 'loading...'}</div>

    </div>
  );
}


export default App;

