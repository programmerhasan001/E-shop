import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

export default function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <Container>
            <LinkContainer to={"/"}>
              <Navbar.Brand>E-Shop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to={"/cart"}>
                  <Nav.Link>
                    <FaShoppingCart /> Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                        {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                      </Badge>
                    )}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/login"}>
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
