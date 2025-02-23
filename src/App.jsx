import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

function App() {
  const [halak, setHalak] = useState([])
    useEffect(() => {
        axios.get(`https://localhost:7067/api/Halak`)
        .then(res => setHalak(res.data))
        .catch(err => console.log(err))
      }, [])
  return (
    <div className= "tarolo">
    {halak.map(hal =>(
    <div className="kartya" key={hal.id}>
  <img src={`data:image/jpeg;base64,${hal.kep}`} alt={hal.nev}/>
  <div>
    <h5>{hal.nev}</h5>
    <p>
      {hal.faj} <br/>{hal.meretCm}cm
      </p>
  </div>
  </div>
    ))}
</div>
  );
}

export default App;
