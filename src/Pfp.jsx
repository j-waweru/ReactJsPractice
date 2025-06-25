
function Pfp() {
    const imageurl = "./src/assets/pfp2.jpg"

    const handleclick=(e)=>{e.target.style.display="none"}
    return (

        <img src={imageurl} onClick={(e)=>handleclick(e)}></img>
    );
} export default Pfp