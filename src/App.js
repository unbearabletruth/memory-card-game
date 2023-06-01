import './assets/styles/App.css';
import uniqid from "uniqid";
import React, { useState, useEffect } from "react";
import Card from './card';
import Darwin from './assets/images/Darwin.jpg'
import Dostoevsky from './assets/images/Dostoevky.jpg'
import Feynman from './assets/images/Feynman.jpg'
import Solzhenitsyn from './assets/images/Solzhenitsyn.jpg'
import Dawkins from './assets/images/Dawkins.jpg'
import Weinstein from './assets/images/Weinstein.jpg'
import Orwell from './assets/images/Orwell.jpg'
import Sapolsky from './assets/images/Sapolsky.jpg'
import de_Waal from './assets/images/de_Waal.jpg'
import Heying from './assets/images/Heying.jpg'
import Blaffer_Hrdy from './assets/images/Blaffer_Hrdy.jpg'
import Frank from './assets/images/Frank.jpg'
import Rowling from './assets/images/Rowling.jpg'
import Frankl from './assets/images/Frankl.jpg'
import Lowry from './assets/images/Lowry.jpg'

function App() {

  let [people, setPeople] = useState([
    {image: Darwin, name:"Charles Darwin", id: uniqid()},
    {image: Dostoevsky, name: "Fyodor Dostoevsky", id: uniqid()},
    {image: Feynman, name: "Richard Feynman", id: uniqid()},
    {image: Solzhenitsyn, name: "Aleksandr Solzhenitsyn", id: uniqid()},
    {image: Dawkins, name: "Richard Dawkins", id: uniqid()},
    {image: Weinstein, name: "Bret Weinstein", id: uniqid()},
    {image: Orwell, name: "George Orwell", id: uniqid()},
    {image: Sapolsky, name: "Robert Sapolsky", id: uniqid()},
    {image: de_Waal, name: "Frans de Waal", id: uniqid()},
    {image: Heying, name: "Heather Heying", id: uniqid()},
    {image: Blaffer_Hrdy, name: "Sarah Blaffer Hrdy", id: uniqid()},
    {image: Frank, name: "Anna Frank", id: uniqid()},
    {image: Rowling, name: "Joanne Rowling", id: uniqid()},
    {image: Frankl, name: "Victor Frankl", id: uniqid()},
    {image: Lowry, name: "Lois Lowry", id: uniqid()}
  ])

  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    setPeople(people.sort(() => Math.random() - 0.5))
  }, [current]);

  function handleClick(e){
    if(clicked.includes(e.target.name)){
      setCurrent(0);
      setClicked([])
      if (best >= current){
        return
      } 
      setBest(current) 
    } else {
      setCurrent(current + 1)
      setClicked(clicked.concat(e.target.name))
    }
  }

  return (
  <div id="gameWrapper">
    <div id="scoreBoard">
      <p>{`Current score: ${current}`}</p>
      <p>{`Best score: ${best}`}</p>
    </div>
    <div id="cardTable">
      {people.map(card => {
        return <Card key={card.id} image={card.image} name={card.name} onClick={handleClick}/>
      })}  
    </div>
  </div>)
}

export default App;
