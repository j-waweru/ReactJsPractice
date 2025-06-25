import { useEffect, useRef } from "react";
function UseRefComp (){

    const inputRef=useRef(0)
    console.log(inputRef);

    useEffect(()=>{console.log("Rerendered")})
    function hancli(){
        inputRef.current++;
        console.log(inputRef.current);
    }

    return(<div >
        <button onClick={hancli}>Click Me</button><br></br>
       
    </div>);
}export default UseRefComp