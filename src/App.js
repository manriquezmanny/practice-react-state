import React, { useState } from "react";
import colorData from "./colorData.json";
import ColorList from "./ColorList";

function App() {
  // Destructuring json colorData into colors variable.
  const [colors] = useState(colorData);

  // Returning our root app with ColorList child component. Passing colors to ColorList as property.
  return <ColorList colors={colors} />;
}

export default App;
