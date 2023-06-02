import './assets/styles/App.css';
import uniqid from "uniqid";
import React, { useState, useEffect } from "react";
import Card from './card';
import images from './assets/images/exportAll.js'

function App() {

  let [people, setPeople] = useState([
    {image: images["Darwin.jpg"], name:"Charles Darwin", id: uniqid()},
    {image: images["Dostoevsky.jpg"], name: "Fyodor Dostoevsky", id: uniqid()},
    {image: images["Feynman.jpg"], name: "Richard Feynman", id: uniqid()},
    {image: images["Solzhenitsyn.jpg"], name: "Aleksandr Solzhenitsyn", id: uniqid()},
    {image: images["Dawkins.jpg"], name: "Richard Dawkins", id: uniqid()},
    {image: images["Weinstein.jpg"], name: "Bret Weinstein", id: uniqid()},
    {image: images["Orwell.jpg"], name: "George Orwell", id: uniqid()},
    {image: images["Sapolsky.jpg"], name: "Robert Sapolsky", id: uniqid()},
    {image: images["de_Waal.jpg"], name: "Frans de Waal", id: uniqid()},
    {image: images["Heying.jpg"], name: "Heather Heying", id: uniqid()},
    {image: images["Blaffer_Hrdy.jpg"], name: "Sarah Blaffer Hrdy", id: uniqid()},
    {image: images["Frank.jpg"], name: "Anna Frank", id: uniqid()},
    {image: images["Rowling.jpg"], name: "Joanne Rowling", id: uniqid()},
    {image: images["Frankl.jpg"], name: "Victor Frankl", id: uniqid()},
    {image: images["Lowry.jpg"], name: "Lois Lowry", id: uniqid()}
  ])

  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    setPeople(people.sort(() => Math.random() - 0.5))
  }, [current, people]);

  function handleClick(e){
    console.log(e.target.id)
    console.log(people)
    if(clicked.includes(e.target.id)){
      console.log(clicked)
      setCurrent(0);
      setClicked([])
      if (best >= current){
        return
      } 
      setBest(current) 
    } else {
      setCurrent(current + 1)
      setClicked(clicked.concat(e.target.id))
    }
  }

  return (
  <div id="gameWrapper">
    <div id="headWrapper">
      <h1>Memory card game</h1>
      <div id="scoreBoard">
        <p className='score'>{`Current: ${current}`}</p>
        <p className='score'>{`Best: ${best}`}</p>
      </div>
    </div>
    <div id="cardTable">
      {people.map(card => {
        return <Card key={card.id} image={card.image} name={card.name} onClick={handleClick}/>
      })}  
    </div>
  </div>)
}

export default App;
