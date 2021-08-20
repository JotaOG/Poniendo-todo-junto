import React from 'react';
import './App.css';
/* import LightSwitch from './components/LightSwitch'; */
import PersonCard from './components/PersonCard';
/* import MyFirstComponent from './components/MyFirstComponent';
import SomeClassComponent from './components/SomeClassComponent'; */

function App() {
  
  return (
    <div className="App">
      {/* <LightSwitch/> */}
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"} text={"Birthday Button for Jane Doe"}/>
      <PersonCard lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"} text={"Birthday Button for John Smith"} />
      <PersonCard lastName={"Fillmore"} firstName={"Millard"} age={50} hairColor={"Brown"} text={"Birthday Button for Millard Fillmore"}/>
      <PersonCard lastName={"Smith"} firstName={"Maria"} age={62} hairColor={"Brown"} text={"Birthday Button for Maria Smith"}/>
      {/* <MyFirstComponent/>
      <div>
        <SomeClassComponent/>
      </div> */}

    </div>
  );
}

export default App;
