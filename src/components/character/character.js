import React from 'react';

const Character = (props) => {
    let {id, name, status, image} = props;

    return (
        <div>
            <h2>{id} {name} {status}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;