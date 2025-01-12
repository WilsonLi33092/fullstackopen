const Total = (props) => {
    let sum =0;
    let total = props.parts.reduce(function (acc,obj) {return acc + obj.exercises;},0);
    return (
        <>
        {props.parts.map(part => {
            sum+=part.exercises
        })}

        <p><strong>Total of {total} exercises</strong></p>
        </>
    )
}
export default Total