import { useState } from 'react';
import './App.css';
import Quote from './components/Quote';
import quotes from './data/quotes.json';

const generateColor= () => {
  const firstHex = parseInt(Math.random() * 10)
  const secondHex = parseInt(Math.random() * 10)
  const thirdtHex = parseInt(Math.random() * 10)
  return (`#${firstHex}${secondHex}${thirdtHex}`)
}

function App() {
  const[index, setIndex] = useState(parseInt(Math.random()*101))
  const[color, setColor] = useState(generateColor())

  const changeQuote = () => {
    setIndex(parseInt(Math.random()*101))
    setColor(generateColor())
  }
  return (
    <div className="App">
      <Quote 
      author={quotes[index].author}
      quote={quotes[index].quote}
      color={color}
      changeQuote={changeQuote}
      />
    </div>
  );
}

export default App;
