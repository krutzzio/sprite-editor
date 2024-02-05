import { useState } from 'react'
import './App.css'
import { Tablero } from './components/Tablero'
function App() {

  const mida = 16
  const [color, setColor] = useState("#FFFFFF")
  const [canvas, setCanvas] = useState(new Array(mida*mida).fill("#FFFFFF"))


  const clickCell = (pos) => {
    let newCanvas = [...canvas]
    newCanvas[pos] = color
    setCanvas(newCanvas)
  }

  const neteja = () => {
    const cleanedCanvas = new Array(mida*mida).fill("#FFFFFF")
    setCanvas(cleanedCanvas)
  }

  const handleColorChange = (event) => {
    const nuevoColor = event.target.value;
    setColor(nuevoColor);
  };

  return (
    <div>
      <button onClick={neteja}>NETEJA</button>
      <label htmlFor="colorPicker">Color:</label>
      <input
        type="color"
        id="colorPicker"
        name="colorPicker"
        value={color}
        onChange={handleColorChange}
      />

      <Tablero canvas={canvas} click={clickCell} mida={mida} />
    </div>
  )
}

export default App
