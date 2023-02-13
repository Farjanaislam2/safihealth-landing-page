import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopNav.css'


const TopNav = () => {
    return (
      <div>
          <Navbar className='ps-5 pe-5 border-bottom border-success ms-5 me-5' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className='d-lg-flex d-none d-sm-none logoImg ' style={{ width: '5rem' }} src="https://safihealth.org/public/upload/logo/202209041040SAFI-01%20(1)%20(1).jpg" alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
           
            </Nav>
            
           <div className='d-flex gap-3'>
           <Form className="justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search" 
              />
             
            </Form>
           <img style={{width:'20px', height: '20px'}} src="https://safihealth.org/public/frontend/assets/img/icons/shopping-basket-1.png" alt=""/>
           <h6>EN</h6>
           </div>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      <Nav className="justify-content-center border-bottom d-lg-flex d-none d-sm-none" activeKey="/home">
      
   
      <NavDropdown className='text-dark' title="About Safihealth" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <ul>
                    <li>
                    About Safihealth
                    </li>
                </ul>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               <ul>
                <li> Vision mission & values</li>
               </ul>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='text-dark' title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Physiotherapy Service</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <ul>
                    <li>
                    Nanny service
                    </li>
                </ul>
           
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Care Giver Service
                    </li>
                </ul>
             
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Dietitian
                    </li>
                </ul>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Orphanage
                    </li>
                </ul>
             
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Hospital
                    </li>
                </ul>
             
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Telemedicine
                    </li>
                </ul>
            
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Special consultation
                    </li>
                </ul>
              
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Ambulance
                    </li>
                </ul>
             
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    HEALTH PACKAGES
                    </li>
                </ul>
              
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Nursing Service
                    </li>
                </ul>
             
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <ul>
                    <li>
                    Old care
                    </li>
                </ul>
         
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='text-dark' title="Medical Travel" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <ul>
                    <li>
                    Medical Travel
                    </li>
                </ul>
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown className='text-dark' style={{background:"brown"}} title="Packages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <ul>
                    <li>
                    Shapla
                    </li>
                </ul>
                <ul>
                    <li>
                    Child Health Care
                    </li>
                </ul>
                <ul>
                    <li>
                    Diagnostic sleep study
                    </li>
                </ul>
                <ul>
                    <li>
                    full body checkup in Safi health
                    </li>
                </ul>
                <ul>
                    <li>
                    Safi health yearly family package
                    </li>
                </ul>
                <ul>
                    <li>
                    Daily Doctor Home visit package
                    </li>
                </ul>
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown className='text-dark' title="Insurance" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <ul>
                    <li>
                    Insurance
                    </li>
                </ul>
                <ul>
                    <li>
                    Insurance Good vibes 2022
                    </li>
                </ul>
                <ul>
                    <li>
                    Insurance Packages and Promotions 2022
                    </li>
                </ul>
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown className='text-dark' title="Contact us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <ul>
                    <li>
               Contact us
                    </li>
                </ul>
              
              </NavDropdown.Item>
             
            </NavDropdown>
           
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#home"><img 
            style={{width:10}} src="https://safihealth.org/public/frontend/assets/img/icons/iphone.png" alt=""/>+880151234544</Nav.Link>
                </Nav>
                <Nav className="justify-content-center logoImg d-lg-flex d-none d-sm-none" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Find a Doctor</Nav.Link>
        </Nav.Item>
        <NavDropdown className='text-dark' title="Make Appointment" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <ul>
                    <li>
              Doctor Appointment
                    </li>
                </ul>
                <ul>
                    <li>
             Nurse Appointment
                    </li>
                </ul>
                <ul>
                    <li >
             Ambulence Service
                    </li>
                </ul>
              
              </NavDropdown.Item>
             
            </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Make Inquery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">
            Clinic & centers
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">
            Terms & conditions
          </Nav.Link>
        </Nav.Item>
      </Nav>
     
      </div>
      
    );
};

export default TopNav;