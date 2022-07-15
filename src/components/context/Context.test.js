import axios from 'axios'
import { render, screen } from '@testing-library/react'
import Context from './Context'
import Home from '../Home'
import ProductCard from '../ProductCard'
import Header from '../Header'
jest.mock('axios')

const mockData = [
  {
    index: 6,
    isSale: true,
    price: '$69.99',
    productImage: 'Product_7.jpeg',
    productName: 'Grey Goose Orginal 10x12x50ml',
    type: 'Spirits',
  },
  {
    index: 7,
    isSale: false,
    price: '$49.99',
    productImage: 'Product_8.jpeg',
    productName: 'Scrumpy RBerry 6x1.25L',
    type: 'Cider',
  },
]

describe('Context component', () => {
  test('it renders', async () => {
    axios.get.mockResolvedValue({ data: mockData })
    render(
      <Context>
        <Home />
      </Context>,
    )
    const userList = screen.getByTestId('home')
    expect(userList).toBeInTheDocument()

    render(
      <Context>
        <Header />
      </Context>,
    )
    const elementSearch = screen.getByTestId('search')
    expect(elementSearch).toBeInTheDocument()

    const elementFilter = screen.getByTestId('filter')
    expect(elementFilter).toBeInTheDocument()

    render(<ProductCard product={mockData} />)
    const element = screen.getByTestId('products')
    expect(element).toBeInTheDocument()

    const productName = screen.getByTestId('productName')
    expect(productName).toBeInTheDocument()
  })
})
