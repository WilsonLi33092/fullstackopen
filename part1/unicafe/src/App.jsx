import { useState } from 'react'
import Button from './Button'
import Feedback from './Feedback'
const App = () => {
  const[good,setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    console.log(updatedGood)
    setGood(updatedGood)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad)
  }
  return(
    <div>
      <h1>Give feedback</h1>
      <Button onClick = {handleGoodClick} text ="good"/>
      <Button onClick = {handleNeutralClick} text ="neutral"/>
      <Button onClick = {handleBadClick} text = "bad"/>
      <h1>Statistics</h1>
      <Feedback text ="good" count = {good}/>
      <Feedback text = "neutral" count = {neutral}/>
      <Feedback text = "bad" count = {bad} />
    </div>
  )
}
export default App

