// Code Keypad Component Here
function Keypad() {
    function handleChange (e) {
        e.preventDefault();
        console.log('Entering password...')
    }

    return (
        <>
        <input onChange={handleChange} 
        type="password" 
        name="password" 
        placeholder="Enter password..." />
        </>
    )
}

export default Keypad;