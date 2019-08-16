import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";
import './App.css';

const StyleCompH = styled.h1`
  color: blue;
  font-size: 4rem;
`;

const StyleCompP = styled.p`
  color: blue;
  font-size: 1.8rem;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const[data,setData] = useState();
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(res => {
      setData(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <StyleCompH className="Header">React Wars</StyleCompH>
      {(data)?data.map(i => (<StyleCompP key={i.name}> {i.name} <br></br> {i.birth_year} </StyleCompP>)):null}
    </div>
  );
}

export default App;