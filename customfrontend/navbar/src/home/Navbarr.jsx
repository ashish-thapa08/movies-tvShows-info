import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
export default function Navbarr() {
    let [activee, setActive] = useState(false);
    let Changebg = () => {
        window.scrollY >= 250 ? setActive(true) : setActive(false);
    }
    window.addEventListener('scroll', Changebg);
    // let Clickk = () => {
    //     setActive(true);
    // }
    return (
        <>
            <Navbar className="p-3 fixed-top navs" bg={activee ? 'light' : 'transparent'} expand="lg">
                <div className="container">
                    <Navbar.Brand href="#"><NavLink className={`heading ${activee ? 'text-dark' : 'text-white'}`} to="/"><span><img
                        src='./Bravegirl/logo.png'
                        width="75"
                        height="46"
                        className="d-inline-block mr-2 logoo"
                        alt="logo"
                    /></span>Brave Girls</NavLink></Navbar.Brand>
                    {/* <Navbar.Toggle className="border-white" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#" onClick={Clickk} ><Link className={activee ? 'text-dark' : 'text-white'} to='/aboutus'>About</Link></Nav.Link>
                            <Nav.Link href="#link" className={activee ? 'text-dark' : 'text-white'}>Link</Nav.Link>
                            <NavDropdown className="text-danger" title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse> */}
                </div>
            </Navbar>
            {/* <Switch>
                <Route exact path="/aboutus" component={About} />
            </Switch> */}
        </>
    )
}
