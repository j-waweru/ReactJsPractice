import pfp from "./assets/default-avatar-icon-of-social-media-user-vector.jpg"
import "./App.css"
import "./index.css"


function Card() {
    return(
  <div className="card">
    <img src={pfp} alt="profile picture"></img>
    <h2>Entrancing Visuals</h2>
    <p>I am a dev and I make art</p>
  </div>
  );
}
export default Card
