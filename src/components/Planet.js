import { React, useState } from 'react';
import CirclePBtn from './CirclePBtn';
import{ Offcanvas } from 'react-bootstrap';
import PlanetInfo from './PlanetInfo';
import Planet1 from '../assets/planets/planet-1.svg';
import Planet2 from '../assets/planets/planet-2.svg';
import Planet3 from '../assets/planets/planet-3.svg';
import Planet4 from '../assets/planets/planet-4.svg';
import Planet5 from '../assets/planets/planet-5.svg';
import Planet6 from '../assets/planets/planet-6.svg';
import Planet7 from '../assets/planets/planet-7.svg';
import Planet8 from '../assets/planets/planet-8.svg';
import Planet9 from '../assets/planets/planet-9.svg';
import Planet10 from '../assets/planets/planet-10.svg';
import Planet11 from '../assets/planets/planet-11.svg';
import Planet12 from '../assets/planets/planet-12.svg';
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
import Character13 from '../assets/characters/character-13.png';
import Character14 from '../assets/characters/character-14.png';
import Character15 from '../assets/characters/character-15.png';
import Character16 from '../assets/characters/character-16.png';


let planetArr =  [
    {
        id: 1,
        url: Planet1,
        name: 'Alpha',
        no: 300,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 2,
        url: Planet2,
        name:'Beta',
       no:200,
       friendsArr: [
        {
            friend_name: 'Olusegun Obasanjo',
            url: Character13,

        },
        {
            friend_name: 'Ebele Jonathan',
            url: Character1,

        },
        {
            friend_name: 'Prince Will',
            url: Character10,

        },
        {
            friend_name: 'Mark Wallace',
            url: Character16,

        },
        {
            friend_name: 'Harryson Wells',
            url: Character16,

        },
        {
            friend_name: 'Iris West-Allen',
            url: Character13,

        },
        {
            friend_name: 'Lillian Luthor',
            url: Character14,

        },
        {
            friend_name: 'Kara Zo El',
            url: Character10,

        },
        {
            friend_name: 'David Clifton',
            url: Character11,

        }
       
    ]
    },
    {
        id: 3,
        url: Planet3,
        name:'Gamma',
        no:100,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 4,
        url: Planet4,
        name:'Delta',
        no:700,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 5,
        url: Planet5,
        name:'Psi',
        no:400,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 6,
        url: Planet6,
        name: 'Sigma',
        no: 600,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 7,
        url: Planet7,
        name: 'Rho',
        no:220,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 8,
        url: Planet8,
        name:'Omega',
        no:600,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 9,
        url: Planet9,
        name:'Omicron',
        no:500,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 10,
        url: Planet10,
        name:'Theta',
        no:60,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 11,
        url: Planet11,
        name:'Zeta',
        no: 1000,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    },
    {
        id: 12,
        url: Planet12,
        name:'Chi',
        no:900,
        friendsArr: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character13,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character1,

            },
            {
                friend_name: 'Prince Will',
                url: Character10,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character16,

            },
            {
                friend_name: 'Harryson Wells',
                url: Character16,

            },
            {
                friend_name: 'Iris West-Allen',
                url: Character13,

            },
            {
                friend_name: 'Lillian Luthor',
                url: Character14,

            },
            {
                friend_name: 'Kara Zo El',
                url: Character10,

            },
            {
                friend_name: 'David Clifton',
                url: Character11,

            }
           
        ]
    }
  ];
  
const Planet = () => {
    const [show, setShow] = useState(false);
    const [sidebarInfo, setSideBarInfo] = useState({});

    const handleClose = () => setShow(false);
    const toggleShow = (e, plInfo) => {
        e.preventDefault();
        
        if ( plInfo ) {
            setSideBarInfo(plInfo);
            setShow((s) => !s);
        }
    }
    return (
        <div>
           
           <div className="planet-container container my-3">
                <div className="row row-cols-1 g-3">
                {planetArr.map( (item, index)=>  
                    <div key={index} class="col-md-3 col-sm-12">
                     <div class=" h-100 g-2">
                       
                        <div  className="p-0  pl-card bg-white ">
                            <a href="/" onClick={(ev) => toggleShow(ev,item)} className="text-decoration-none d-flex  flex-column">
                                <img src={item.url} alt="planet" width="140px" className="my-3 align-self-center"/>
                                <div className="planet-des align-self-start text-start ps-3" id="">
                                    <h4 className="planet-name  py-2 rounded-3">Planet {item.name}</h4>
                                    <p className="planet-prop opacity-50 ">Pop: { item.no}</p>
                                </div>
                            </a> 
                        </div>
                               
                     </div>
                     </div>
                      )} 
                </div>
                <CirclePBtn href="/modalplanetadd"/>
                <PlanetInfo showSidebar={show} toClose={handleClose} info={sidebarInfo} />
    
            </div> 
        </div>
    )
}

export default Planet;
