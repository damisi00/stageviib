import { React, useState } from 'react';
import DropdownBtn from './DropdownBtn';
import CircleCBtn from './CircleCBtn';
import CharacterInfo from './CharacterInfo';
import { Row, Col, Container, Card, Offcanvas } from 'react-bootstrap';
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







let characterArr =  [
    {
        id: 1,
        url: Character1,
        ch_name: 'Brooklyn Simmons',
        friends_no: 23,
        pronoun: " She's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]
 
        
    },
    {
        id: 2,
        url: Character2,
        ch_name: 'Cameron Williamson',
        friends_no: 10,
        pronoun: " He's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]


     },
    {
        id: 3,
        url: Character3,
        ch_name: 'Leslie Alexander',
        friends_no: 9,
        pronoun: " She's ",
        friends_array: [
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
        url: Character4,
        ch_name: 'Kristin Watson',
        friends_no: 8,
        pronoun: " She's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character9,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character13,

            },
            {
                friend_name: 'Mark Wallace',
                url: Character14,

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

            }
        ]
       
    },
    {
        id: 5,
        url: Character5,
        ch_name: 'Jenny Wilson',
        friends_no: 13,
        pronoun: " She's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

    
    },
    {
        id: 6,
        url: Character6,
        ch_name: 'Marvin McKinney',
        friends_no: 20,
        pronoun: " He's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

        
    },
    {
        id: 7,
        url: Character7,
        ch_name: 'Jerome Bell',
        friends_no: 23,
        pronoun: " She's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

        
    },
    {
        id: 8,
        url: Character8,
        ch_name: 'Guy Hawkins',
        friends_no: 23,
        pronoun: " He's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

       
    },
    {
        id: 9,
        url: Character9,
        ch_name: 'Robert Fox',
        friends_no: 7,
        pronoun: " He's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

       
    },
    {
        id: 10,
        url: Character10,
        ch_name: 'Eleanor Pena',
        friends_no: 13,
        pronoun: " He's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

         
    },
    {
        id: 11,
        url: Character11,
        ch_name: 'Cody Fisher',
        friends_no: 23,
        pronoun: " He's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

       
    },
    {
        id: 12,
        url: Character12,
        ch_name: 'Annette Black',
        friends_no: 10,
        pronoun: " He's ",
        friends_array: [
            {
                friend_name: 'Olusegun Obasanjo',
                url: Character16,

            },
            {
                friend_name: 'Ebele Jonathan',
                url: Character16,

            },
            {
                friend_name: 'Prince Will',
                url: Character16,

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

            },
            {
                friend_name: 'Axel Thompson',
                url: Character15,

            }
        ]

        
    }
  ];

 
  
  

const Characters = () => {

    const [show, setShow] = useState(false);
    const [sidebarInfo, setSideBarInfo] = useState({});

    const handleClose = () => setShow(false);
    const toggleShow = (e, chInfo) => {
        e.preventDefault();
        
        if ( chInfo ) {
            setSideBarInfo(chInfo);
            setShow((s) => !s);
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-end"><DropdownBtn className="align-self-end"/></div>
                <Container className="char-container my-3 ">
                    <Row className=" row-cols-1 g-2 ">
                        {characterArr.map( (item, index)=> 
                        <Col key={index} md={3} sm={12} className=" mb-2  ">
                            <div className="h-100 ">
                                <div className="ch-card h-100 bg-white"> 
                                    <a href="/"  onClick={(ev) => toggleShow(ev,item)}   className="text-decoration-none d-flex border-1  flex-column h-auto">
                                       
                                        <div ><Card.Img src={item.url} alt="character image" className=" card-image align-self-center " /></div>
                                        <Card.Body className="character-des align-self-start text-start ps-3 py-2" id="">
                                        <Card.Title className="character-name   rounded-3 mb-0">{item.ch_name}</Card.Title>
                                        <Card.Text className="character-prop opacity-50 mt-1">{item.friends_no} friends</Card.Text>
                                        </Card.Body>
                                    </a>
                                </div>
                            </div>        
                        </Col>
                        )}
                    </Row>
                    <CircleCBtn href="/modalcharacteradd"/>
                </Container> 
               <CharacterInfo showSidebar={show} toClose={handleClose} info={sidebarInfo} />
        </div>
    )
}

export default Characters;
