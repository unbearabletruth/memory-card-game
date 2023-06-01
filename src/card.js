import "./assets/styles/card.css"

export default function Card({image, name, onClick}){
    return(
        <div id="card" onClick={onClick}>
            <img name={name} src={image} alt="memory card" className="cardImage"></img>
            <p className="cardText"> {name}</p>
        </div>
    )
} 