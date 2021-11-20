import { React, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Characters from './Characters';
import Character13 from '../assets/characters/character-13.png';
import Character14 from '../assets/characters/character-14.png';
import Character15 from '../assets/characters/character-15.png';
import Character16 from '../assets/characters/character-16.png';
import Character1 from '../assets/characters/character-1.png';
import Character2 from '../assets/characters/character-2.png';
import Character3 from '../assets/characters/character-3.png';
import Character4 from '../assets/characters/character-4.png';
import Character5 from '../assets/characters/character-5.png';
import Character6 from '../assets/characters/character-6.png';
import Character7 from '../assets/characters/character-7.png';
import Character8 from '../assets/characters/character-8.png';
import Character9 from '../assets/characters/character-9.png';
import Character10 from '../assets/characters/character-10.png';
import Character11 from '../assets/characters/character-11.png';
import Character12 from '../assets/characters/character-12.png';


const CharacterInfo = ({showSidebar, toClose, info}) => {
    
    console.log(info);
    return (
        <div>
            
            
            <Offcanvas placement="end" show={showSidebar} size='sm' onHide={toClose}  className="modal-content mt-1" >

                <Offcanvas.Header closeButton className="modal-header d-flex flex-column-reverse">
                <Offcanvas.Title className="my-2 mod-tit align-self-start ">{info.ch_name} </Offcanvas.Title>
                </Offcanvas.Header>
                
                
                <Offcanvas.Body>
                    <p className=" opacity-50 fs-6"> {info.ch_name}  is a really nice person.{info.pronoun}  been living on planet Alpha for the past 10 years.</p>
                    <div className="first-sec  align-items-center text-start d-flex">
                        <div className="planet-name">
                            <p className="pb-1 fs-6 fw-400">Planet</p>
                            <h6 className="fw-bold fs-6">Alpha</h6>
                        </div>
                        <div className="friends-no">
                            <p className="pb-1 fw-400 fs-6">Friends</p>
                            <h6 className="fw-bold fs-6">{info.friends_no}</h6>
                        </div>
                    </div>
                    <h6 className="text-uppercase my-3 fw-bold opacity-50 ">Friends</h6>
                    <div className="friends-wrapper">
                        <div className="container">
                            <div className="row row-cols-1">
                                <div className="friends-crd p-0 h-100">
                                <div   className="row my-3 d-flex align-items-center">
                                    
                                    <div className=" col-3 ">
                                        <img src={Character14} alt="friend image"  width="72px" height="72px"/>
                                    </div>
                                    <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                        <h6 className="e">Toby Goop</h6>
                                        <p className="opacity-50 fs-7">Amiet minimm molit non deserunt ullamco e</p>
                                    </div>
                                    <div className=" col-3 ">
                                        <img src={Character15} alt="friend image"  width="72px" height="72px"/>
                                    </div>
                                    <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                        <h6 className="e">Andre Ighalo</h6>
                                        <p className="opacity-50 fs-7">Amiet minimm molit non deserunt ullamco e</p>
                                    </div>
                                </div>
                                {/* {info.friends_array.map((c, j) => 
                                    <div  key={j} className="row my-3 d-flex align-items-center">
                                    
                                        <div className=" col-3 ">
                                            <img src={c.url} alt="friend image"  width="72px" height="72px"/>
                                        </div>
                                        <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                            <h6 className="e">{c.friend_name}</h6>
                                            <p className="opacity-50 fs-7">Amiet minimm molit non deserunt ullamco e</p>
                                        </div>
                                    </div>
                                )} */}
                                </div>
                            </div>
                        </div>
                    </div>        
                    
                </Offcanvas.Body>
                </Offcanvas>               
           
            
        </div>
    )
}

export default CharacterInfo;
