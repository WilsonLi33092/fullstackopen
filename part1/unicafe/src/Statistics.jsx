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
            <table>
                <h1>Statistics</h1>
                <tr>
                    <td>
                        <Feedback text ="good"/>
                    </td>
                    <td>
                        <Feedback count = {good}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Feedback text = "neutral"/>
                    </td>
                    <td>
                        <Feedback count = {neutral}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Feedback text = "bad"/>
                    </td>
                    <td>
                        <Feedback count = {bad} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Feedback text = "all" />
                    </td>
                    <td>
                        <Feedback count = {bad+neutral+good} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Feedback text = "average"/>
                    </td>
                    <td>
                    <Feedback count = {((bad*-1)+(neutral * 0)+(good * 1))/(bad+neutral+good)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <Feedback text = "positive"/>
                    </td>
                    <td>
                    <Feedback count = {good/(bad+neutral+good)}/>
                    </td>
                </tr>
            </table>
      </>
    )
    }
}

export default Statistics