import "./assets/styles/card.css"

export default function Card({image, text}){
    return(
        <div>
            <img src={image} alt="memory card" className="cardImage"></img>
            <p>{text}</p>
        </div>
    )
} 