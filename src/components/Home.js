import React from 'react'
import { ShopContext } from './context/Context'
import ProductCard from './ProductCard'
import Spinner from 'react-bootstrap/Spinner'
import './styles.css'

const Home = () => {
  const {
    products,
    productState: { type, searchQuery },
  } = ShopContext()

  const updatedView = () => {
    let filteredProducts = products
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.productName.toLowerCase().includes(searchQuery),
      )
    }
    if (type !== 'All') {
      filteredProducts = filteredProducts.filter((prod) => type === prod.type)
    }
    return filteredProducts.length > 0 ? filteredProducts : products
  }

  return (
    <>
      <div className="home">
        {products ? (
          <div className="productContainer">
            {updatedView().map((product) => {
              return <ProductCard key={product.index} product={product} />
            })}
          </div>
        ) : (
          <Spinner animation="border" role="status" />
        )}
      </div>
    </>
  )
}

export default Home
