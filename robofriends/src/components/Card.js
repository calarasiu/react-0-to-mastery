import React from 'react';

const Card = ({name, email, id}) =>{
  // we can deconstruct the props directly in the parameter or by storing them in a variable -> const {name, email, id} = props;
  return (
    <div className = 'tc bg-light-green dib br3 pa-3 grow bw-2 shadow-5 mh3 mv2'>
      <img src={`https://robohash.org/${id}`} alt="robots"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
