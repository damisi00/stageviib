import React from 'react';
import Character3 from '../assets/characters/character-3.png';

const FriendsAdd = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center fr">
                <img src={Character3} />
                <p className="fs-6 fw-light">Jane Cooper</p>
                <button className="bg-secondary" closeButton></button>
            </div>
        </div>
    )
}

export default FriendsAdd;
