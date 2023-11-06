import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const [msg, setMsg] = useState(null)
  const data = {
    name: "Dihan"
  }

  useEffect(()=>{
    fetch('api/users/',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => setMsg(data.msg))
  },[])
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {msg && <p>{msg}</p>}
        <Home />
      </div>
    </div>
  );
}

export default App;
