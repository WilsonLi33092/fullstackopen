const Note = ({note}) => {
    console.log(note.id)
    return (
        <li key = {note.id}>{note.content}</li>
    )
}
export default Note