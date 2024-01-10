import React, { useState } from "react";
import colorData from './color-data.json';
import ColorList from './ColorList.js';

function App() {
  // Destructuring json colorData into colors variable.
  const [colors] = useState(colorData);

  // Returning our root app with ColorList child component. Passing colors to ColorList as property.
  return <ColorList colors={colors} />;
}

export default App;
