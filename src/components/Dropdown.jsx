import { useState } from "react"
import '../styles/Dropdown.css'

export default function Dropdown(props){
    const [isOpened, setIsOpened] = useState(false)

    function toggleIsOpened(){
        setIsOpened(prevValue => !prevValue)
    }

    const elements = props.elements.map(el => {
        return ( 
        <div className="element" key={el.id}>
            {el.iconUrl ? <img src={el.iconUrl} alt="Element icon"></img> : <></>}
            <p className="element-name">{el.name}</p>
        </div>)
    })

    return (
        <div className="dropdown-container">
            <div className="dropdown-title" onClick={toggleIsOpened}>
                <p>{props.title}</p>
                <img src={`/images/icon-arrow-${isOpened ? "up" : "down"}.svg`} className="dropdown-icon" alt='Arrow icon'></img>
            </div>
            {isOpened && <div className={`dropdown-content ${props.title.toLowerCase()}`}>
                {elements}
            </div>}
        </div>
    )
}