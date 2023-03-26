import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './components/ColorSlider';
import './components/ColorSlider/style.css';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const finalColor = {
    backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`
  };

  return (
    <div className="container">
      <header>
        <div className="header" />
        <h1>Mixér barev</h1>
      </header>
      <main>
        <div className="sliders">
          <ColorSlider baseColor="red" colorName="Red" value={redValue} onValueChange={setRedValue}/>
          <ColorSlider baseColor="green" colorName="Green" value={greenValue} onValueChange={setGreenValue}/>
          <ColorSlider baseColor="blue" colorName="Blue" value={blueValue} onValueChange={setBlueValue}/>
        </div>
        <div className="color-box" style={finalColor}></div>
      </main>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
