import { React } from 'react';
import {  Nav } from 'react-bootstrap';
// import Characters from './Characters';

const Buttons = () => {
    // const [key, setKey] = useState('home');
    
    return (
        <div>
            <Nav className="header-btns "   >
        
                <Nav.Link href="/planet"   className=" text-uppercase btn-plt border-0 " >
                       Planets
                </Nav.Link>

                <Nav.Link href="/characters" className=" text-uppercase btn-char border-0 ">
                    Characters
                </Nav.Link>
                  
            </Nav>  
        </div>
    )
}

export default Buttons;
