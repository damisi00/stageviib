import { React, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Planet from './Planet';
import Character1 from '../assets/characters/character-1.png';
import Character2 from '../assets/characters/character-2.png';
import Character3 from '../assets/characters/character-3.png';
import Character4 from '../assets/characters/character-4.png';
import Character5 from '../assets/characters/character-5.png';
import Character6 from '../assets/characters/character-6.png';
import Character7 from '../assets/characters/character-7.png';
import Character8 from '../assets/characters/character-8.png';

const PlanetInfo = ({showSidebar, toClose, info}) => {
    return (
        <div>
             <Offcanvas  placement="end" backdrop={false} show={showSidebar} size='sm' onHide={toClose}  className="modal-content-s mt-1" >

                <Offcanvas.Header closeButton className="modal-header d-flex flex-column-reverse">
                <Offcanvas.Title className="my-2 mod-tit align-self-start ">Planet {info.name} </Offcanvas.Title>
                </Offcanvas.Header>


                <Offcanvas.Body>
                    <p className=" opacity-50 fs-6">  Planet {info.name} is the place to be if you like everything related to planets. I know it's a bit meta, but come see by yourself.</p>
                    <div className="first-sec  align-items-center text-start d-flex">
                        <div className="planet-name">
                            <p className="pb-1 fs-6 fw-400">Population</p>
                            <h6 className="fw-bold fs-6">{info.no}</h6>
                        </div>
                    </div>
                    <div class="second-sec d-flex justify-content-between align-items-center">
                        <h6 class="text-uppercase my-3 fw-bold opacity-50 ">characters</h6>
                        <a  href="/" className="plus-cont2  d-flex justify-content-center align-items-center text-decoration-none ">
                            <div className="plus2 display-6 "></div>
                        </a>
                    </div>
                    <h6 className="text-uppercase my-3 fw-bold opacity-50 ">Friends</h6>
                    <div className="friends-wrapper">
                        <div className="container">
                            <div className="row row-cols-1">
                                <div className="friends-crd p-0 h-100">
                                    <div   className="row my-3 d-flex align-items-center">
                                        
                                        <div className=" col-3 ">
                                            <img src={Character4} alt="friend image"  width="72px" height="72px"/>
                                        </div>
                                        <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                            <h6 className="">Alberto Friedmann</h6>
                                            <p className="opacity-50 fs-7">23 friends</p>
                                        </div>
                                    </div>
                                    <div   className="row my-3 d-flex align-items-center">
                                        
                                        <div className=" col-3 ">
                                            <img src={Character1} alt="friend image"  width="72px" height="72px"/>
                                        </div>
                                        <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                            <h6 className="">Grace Montonya</h6>
                                            <p className="opacity-50 fs-7">100 friends</p>
                                        </div>
                                    </div>
                                    <div   className="row my-3 d-flex align-items-center">
                                        
                                        <div className=" col-3 ">
                                            <img src={Character2} alt="friend image"  width="72px" height="72px"/>
                                        </div>
                                        <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                            <h6 className="">Julia Montes</h6>
                                            <p className="opacity-50 fs-7">9 friends</p>
                                        </div>
                                    </div>
                                    <div   className="row my-3 d-flex align-items-center">
                                        
                                        <div className=" col-3 ">
                                            <img src={Character5} alt="friend image"  width="72px" height="72px"/>
                                        </div>
                                        <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                            <h6 className="">Cisco Ramon</h6>
                                            <p className="opacity-50 fs-7">13 friends</p>
                                        </div>
                                    </div>
                                {/* {info.friendsArr.filter((c, j) => 
                                    <div  key={j} className="row my-3 d-flex align-items-center">
                                    
                                        <div className=" col-3 ">
                                            <img src={c.url} alt="friend image"  width="72px" height="72px"/>
                                        </div>
                                        <div className="name-des  col-9 d-flex justify-content-evenly align-items-start flex-column text-start">
                                            <h6 className="e">{c.friend_name}</h6>
                                            <p className="opacity-50 fs-7">23 friends</p>
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

export default PlanetInfo;
