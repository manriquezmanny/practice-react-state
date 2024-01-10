import React, { useState } from "react";
import colorData from './color-data.json';
import ColorList from './ColorList.js';

function App() {
  // Destructuring json colorData into colors variable.
  const [colors, setColors] = useState(colorData);

  // Returning our root app with ColorList child component. Passing colors to ColorList as property.
  return (
          <ColorList
            onRateColor={(id, rating) => {
              const newColors = colors.map(color =>
                color.id === id? { ...color, rating } : color
              );
              setColors(newColors);
            }}
            colors={colors}
            onRemoveColor={id => {
              const newColors = colors.filter(color => color.id !== id);
              setColors(newColors);
            }}
          />
        );
}

export default App;
