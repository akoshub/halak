import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className='App d-flex flex-wrap'>
    {halak?.map(hal =>(
    <div ClassName="card" style={{width: "18rem"}} key={hal.id}>
  <img src="..." ClassName="card-img-top" alt="..."/>
  <div ClassName="card-body">
    <h5 ClassName="card-title">{hal.nev}</h5>
    <p ClassName="card-text">
      {hal.faj} <br/>{hal.meretCm}cm
      </p>
  </div>
  </div>
    ))}
</div>
  );
}

export default App;
