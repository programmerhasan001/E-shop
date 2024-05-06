import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from "react-icons/fa"

export default function Header() {
  return (
    <div>
        <header>
            <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/e-shop">E-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="ms-auto">
                            <Nav.Link href='/cart'><FaShoppingCart /></Nav.Link>
                            <Nav.Link href='/login'><FaUser /> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </div>
  )
}
