import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return(
        <div className = "smallcard-container">
            <img src={ props.image }/>
            <h4>{ props.information }</h4>
            <p>{ props.text }</p>
        </div>
    )
}

export default CardPequeno;