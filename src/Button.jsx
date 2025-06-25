function Button() {
    let count = 0;
    const handleclick = () => {
        if (count < 3) {
            console.log(`You have clicked ${count} times`);
            count++;
        }
        else {
            console.log("Stop clicking");
        }
    };
    


    const handleclick2 = (event) => { event.target.textContent="Ouch" };
    return (


        <button onClick={(event) => handleclick2(event)}>Click me 😊</button>
    );

} export default Button