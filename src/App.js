import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard.js';
import LightSwitch from './components/LightSwitch.js';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={ 42 } hairColor="Black"/>
      <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown"/>
      <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown"/>
      <button onClick= { ()=> alert("This button has been clicked!") }>Click Me</button>
      <LightSwitch />
    </div>
  );
}

export default App;
