import { useState } from 'react'
import Display from './Display'
import Button from './Button'
import History from './History'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    console.log("left before", left)
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    console.log("updated left", updatedLeft)
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
    console.log('left after', left)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setTotal(left + updatedRight)
    setRight(updatedRight)
  }
  return(
    
    <div>
      {left}
      <Button onClick = {handleLeftClick} text = "plus"/>
      <Button onClick = {handleRightClick} text = "reset"/>
      {right}
      <History allClicks = {allClicks}/>

    </div>
  )
}
export default App