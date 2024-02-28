import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavPrincipal() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Sistema Gestion Conoflex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/customers">Clientes</Nav.Link>
                        <Nav.Link href="/providers">Proveedores</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavPrincipal