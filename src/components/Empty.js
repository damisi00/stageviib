import React from 'react';
import { Link } from 'react-router-dom';
import PlanetLoader from '../assets/assets/planet-loader.svg';
import CreatePlanetBtn from './CreatePlanetBtn';
import CirclePBtn from './CirclePBtn';

const Empty = () => {
    return (
        <div>
            
                <section className="d-flex flex-column align-items-center my-5">
                    <img src={PlanetLoader} alt="Planet logo" className="mb-3" />
                    <h2 className="empty-txt mb-3">
                        Space doesn't have to be so empty.
                    </h2>
                    <Link to="/planet"><CreatePlanetBtn/></Link>
                </section>
                <CirclePBtn href="/modalplanetadd"/>
            
        </div>
    )
}

export default Empty;
