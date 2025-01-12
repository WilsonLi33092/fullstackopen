const Filter = ({handleSearchChange}) => {
    return(
        <>
        <label htmlFor="search">filter shown with</label>
        <input type="text" onChange = {handleSearchChange} />
        </>
    )
}

export default Filter