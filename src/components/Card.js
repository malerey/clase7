import React from 'react';
import Button from './Button';
import './Card.scss'

const Card = ({name, shortDesc, img, isAvailable}) => {

  return(
    <div className={isAvailable ? "card" : "cardDisabled"}>
    <div className="card_img">
      <img alt={name} src={img} />
    </div>
    <div className="card_info">
      <h3>{name}</h3>
      <p>
        {shortDesc}
      </p>
      <Button mensaje={isAvailable ? 'Ver mas' : 'No disponible'} estilo={"cardButton"} />
    </div>
  </div>
  )
};

export default Card;










