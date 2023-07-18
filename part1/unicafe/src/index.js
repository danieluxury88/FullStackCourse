import React, { useState } from 'react'

import { createRoot } from 'react-dom/client';


const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
      <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
      <table>
        <tbody>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={props.good + props.neutral + props.bad }/>
        <StatisticLine text='positive' value={(props.good * 100 / (props.good + props.neutral + props.bad )).toFixed(2) +" %" }/>
        </tbody>
      </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodComment = () => {
    setGood(good + 1)
  }
  const setNeutralComment = () => {
    setNeutral(neutral + 1)
  }
  const SetBadComment = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title='give feedback'/>
      <Button handleClick={setGoodComment} text='good'/>
      <Button handleClick={setNeutralComment} text='neutral'/>
      <Button handleClick={SetBadComment} text='bad'/>
      <Title title='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App;

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);