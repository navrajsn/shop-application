import React from 'react'
import { Container, Form, Navbar, Dropdown, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <a>Shop</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="me-auto my-2 my-lg-0">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark" style={{ minWidth: 100 }}>
                <Dropdown.Item href="#/filter-1" active>
                  1
                </Dropdown.Item>
                <Dropdown.Item href="#/filter-2"> 2 </Dropdown.Item>
                <Dropdown.Item href="#/filter-3"> 3 </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
