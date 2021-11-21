import React, { useState } from 'react'
import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import './styledComponents/Navigation.css'
import Button from "react-bootstrap/Button";
import Planet from './Planet';
import Character from './Character';


function Navigation() {

    const [swap, setSwap] = useState(false)


    return (
        <div>
        <Navbar>
            <Container>
                <NavbarBrand href="#">Spacious</NavbarBrand>
            </Container>
        </Navbar>
        <Container>
        <Navbar  className="me-auto">
                <NavLink href="#">
                    <Button variant="light" onClick={()=>setSwap(false)}>
                        PLANETS
                    </Button>
                </NavLink>
                <NavLink href="#">
                    <Button variant="light"onClick={()=>setSwap(true)}>
                        CHARACTERS
                    </Button>
                </NavLink>
        </Navbar>
        </Container>
        {!swap?<Planet/>:<Character/>}
         
        </div>
    )
}

export default Navigation
