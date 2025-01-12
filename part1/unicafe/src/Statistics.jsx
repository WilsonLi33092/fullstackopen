import Feedback from "./Feedback"
const Statistics = ({good,neutral,bad}) => {
    console.log(good + bad + neutral)
    if((good + bad + neutral) === 0) {
        return(
            <>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }else {
    return (
        <>
            <h1>Statistics</h1>
            <Feedback text ="good" count = {good}/>
            <Feedback text = "neutral" count = {neutral}/>
            <Feedback text = "bad" count = {bad} />
            <Feedback text = "all" count = {bad+neutral+good} />
            <Feedback text = "average" count = {((bad*-1)+(neutral * 0)+(good * 1))/(bad+neutral+good)}/>
            <Feedback text = "positive" count = {good/(bad+neutral+good)}/>
      </>
    )
    }
}

export default Statistics