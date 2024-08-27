import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            UltraComics
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/Comic" as={NavLink}>
              Comics
            </Nav.Link>
            <Nav.Link to="/category/Manga" as={NavLink}>
              Mangas
            </Nav.Link>
            <Nav.Link to="/otros" as={NavLink}>
              Otros
            </Nav.Link>
            <Nav.Link to="/registro" as={NavLink}>
              Registrarse
            </Nav.Link>
            <Nav.Link to="/iniciosesion" as={NavLink}>
              Iniciar Sesión
            </Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
