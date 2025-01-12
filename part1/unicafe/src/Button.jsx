const Button = (props) => {
    console.log(props.setGood)
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default Button
