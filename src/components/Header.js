import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import Filter from './Filter'
import { ShopContext } from './context/Context'

const Header = () => {
  const { productDispatch } = ShopContext()
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
              onChange={(e) =>
                productDispatch({
                  type: 'Filter_By_Search',
                  payload: e.target.value,
                })
              }
            />
          </Form>
        </Navbar.Collapse>
      </Container>
      <Filter />
    </Navbar>
  )
}

export default Header
