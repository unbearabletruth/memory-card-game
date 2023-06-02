import "./assets/styles/card.css"

export default function Card({image, name, onClick}){
    return(
        <div id={name} className="card" onClick={onClick}>
            <img id={name} src={image} alt="memory card" className="cardImage"></img>
            <p id={name} className="cardText">{name}</p>
        </div>
    )
} 