import React from 'react';
import { Banner } from './components';
import { InputTextBlock } from './components';

import './App.css';

export default function App() {
  const [areaText, setAreaText] = React.useState('init');

  const handlerAddTextArea = (e) => {
    setAreaText(e.target.value);
  }

  return (
    <div className="App">
      <InputTextBlock handlerAddTextArea={handlerAddTextArea} areaText={areaText}/>
      <Banner formatText={areaText}/>
    </div>
  );
}
