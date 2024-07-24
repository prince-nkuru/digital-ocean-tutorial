import React from 'react';
import './AnimalCard.css'


export default function AnimalCard(props) {
return (
 <div>
 <h2>{props.name}</h2>
 <h3>{props.scientificName}</h3>
 <h4>{props.size}kg</h4>
 <div>{props.diet.join(', ')}.</div>
 </div>
 );
}
