const Name = ({people}) => {
    if(people.length === 0) {
        return(
            <>
            </>
        )
    }
    return(
        people.map(person => <p key = {person.key}>{person.name} {person.number}</p>)
    )
}

export default Name