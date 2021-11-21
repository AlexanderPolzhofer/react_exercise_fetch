import React, {useState} from "react";


function App() {
const [counter, setCounter] = useState(0);

  return (
    <div style={{display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", padding: "5px"}}>
  <div>{counter}</div>
  <div>
    <button onClick ={() => setCounter(counter+1)} style={{margin: "8px", padding: "5px"}}>increase counter</button>
  </div>
  <div>
    <button onClick={() => fetchRandomData()} style={{margin: "8px", padding: "5px"}}>fetch random data</button>
  </div>
    </div>
  );
}

const fetchRandomData = () => {

  const url = 'https://randomuser.me/api/';

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    data.results.forEach(person => {
 
      let randomPerson = {
    title: person.name.title,
    firstName: person.name.first,
    lastName: person.name.last,
    image: person.picture.thumbnail
  }
      console.log(randomPerson)
    });
  })
  .catch((error) => {
    console.log("error");
  })
}

export default App;

