import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import Filter from './Filter'
import { ShopContext } from './context/Context'

const Header = () => {
  const { productDispatch } = ShopContext()
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <a>Shop</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form
          data-testid="search"
          className="d-flex me-auto"
          style={{ width: '80%' }}
        >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-auto"
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
      <Filter />
    </Navbar>
  )
}

export default Header
