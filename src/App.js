import './assets/styles/App.css';
import Card from './card';
import Darwin from './assets/images/Darwin.jpg'
import Dosotevsky from './assets/images/Dostoevky.jpg'
import Feynman from './assets/images/Feynman.jpg'

function App() {
  return (
  <div id="gameWrapper">
    <div id="scoreBoard">
      <p>current</p>
      <p>best</p>
    </div>
    <div id="cardTable">
      <Card image={Darwin} text="Charles Darwin"/>
      <Card image={Dosotevsky} text="Fyodor Dostoevsky"/>
      <Card image={Feynman} text="Richard Feynman"/>
    </div>
  </div>)
}

export default App;
