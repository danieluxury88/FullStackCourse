import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Title = ({  text }) => (
  <h2>
    {text}
  </h2>
)

const Anecdote = ({ anecdote, points }) => (
  <div>
    <p>{anecdote}</p>
    <p>has {points} votes</p>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setVote] = useState([0, 0, 0, 0, 0, 0])

  return (
    <div>
      <Title text='Anecdote of the day' />
      <Anecdote anecdote={props.anecdotes[selected]} points={points[selected]} />
      <Button onClick={() => setSelected(Math.floor(Math.random() * 6))} text='next anecdote' />
      <Button onClick={() => setVote(points.map((item, index) => index === selected ? item + 1 : item))} text='vote' />
      <Title text='Anecdote with most votes' />
      <Anecdote anecdote={props.anecdotes[points.indexOf(Math.max(...points))]} points={Math.max(...points)} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
let points = new Array(anecdotes.length).fill(0);

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)