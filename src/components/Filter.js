import React from 'react'
import { Nav, Dropdown } from 'react-bootstrap'
import { ShopContext } from './context/Context'

const Filter = () => {
  const {
    productState: { type, searchQuery },
    productDispatch,
  } = ShopContext()
  return (
    <Nav className="me-auto my-2 my-lg-0">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" style={{ minWidth: 100 }}>
          <Dropdown.Item
            as="button"
            onClick={() => productDispatch({ type: 'Clear' })}
            active
          >
            All
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() =>
              productDispatch({ type: 'Filter_By_Type', payload: 'Beer' })
            }
          >
            Beer
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() =>
              productDispatch({ type: 'Filter_By_Type', payload: 'Wine' })
            }
          >
            Wine
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() =>
              productDispatch({ type: 'Filter_By_Type', payload: 'Cider' })
            }
          >
            Cider
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}

export default Filter
