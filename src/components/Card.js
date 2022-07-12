import React from 'react';



const Card = ({id, name, username,email}) => {
    
    return (
        <div className='tc bg-light-green p3 ma2 grow dib br3 bw2 shadow-5 '>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;    