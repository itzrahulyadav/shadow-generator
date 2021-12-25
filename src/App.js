import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(1);
  const [color, setColor] = useState('grey');
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    alert("This little thing was created by Rahul Yadav while learning React js ❤")
  }, [])
  return (
    <div className="app">
      <div className="controls">
        <label>Horizontal length</label>
        <input type="range" min="0" max="100" value={hori} onChange={(e) => (setHori(e.target.value))} />
        <label>vertical length</label>
        <input type="range" min="0" max="100" value={veri} onChange={(e) => (setVeri(e.target.value))} />
        <label>blur</label>
        <input type="range" min="0" max="100" value={blur} onChange={(e) => (setBlur(e.target.value))} />
        <label>spread</label>
        <input type="range" min="0" max="10" value={spread} onChange={(e) => (setSpread(e.target.value))} />
        <label>color</label>
        <input type="color" value={color} onChange={(e) => (setColor(e.target.value))} />
        <div className="check">
          <label>inset</label>
          <input type="checkbox" checked={btn} onChange={() => (setBtn(!btn))} />

        </div>
      </div>
      <div className="output">
        <div className="box" style={{ boxShadow: `${btn ? "inset" : ""} ${hori}px ${veri}px ${blur}px ${spread}px ${color}` }}>
          <div className="internal">
            <p>boxShadow : {hori}px {veri}px {blur}px {spread}px {color}</p>
          </div>
        </div>
      </div>
    </div>
  );


}

export default App;
