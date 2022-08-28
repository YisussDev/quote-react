import React from 'react'
import '../styles/Quote.css'
import { BiPlay } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";


const Quote = ({color,quote,author, changeQuote}) => {

  return (
    <>
    <div className='background_triangle' style={{backgroundColor: color}}></div>
    <div className='quote-container'>
        <div className='quote_icon' style={{color: color}}><BiMessageSquareDots /> </div>
                <h2 style={{color: color}}>"{quote}"</h2>
                <p style={{color: color}}>{author}</p>
            <button onClick={changeQuote} style={{backgroundColor: color}}> <BiPlay /> </button>
    </div>
    </>
  )
}

export default Quote