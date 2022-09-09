import React from 'react'

export default function Joke(props) {
  return (
    <div>
        <h2 style={{display: props.question ? "block":"none"}}>Question: {props.question}</h2>
        <h2 style={{color: props.question ? "black":"red"}}>Answer: {props.answer}</h2>
        <hr />
    </div>
  )
}
