import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';

const DropdownBtn = () => {
    return (
        <div>
            <Navbar style={{color: "#121c33"}}  >
                <NavDropdown title="Planet: All"   className="dropdown dp-btn position-absolute"  id="allplanet" >
                        <NavDropdown.Item >
                        Header
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                        Action
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        Another Action
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        Another Action
                        </NavDropdown.Item>   
                </NavDropdown>    
            </Navbar>
        </div>
    )

}
export default DropdownBtn;
