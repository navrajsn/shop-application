import React from 'react'
import { ShopContext } from './context/Context'
import ProductCard from './ProductCard'
import './styles.css'
const Home = () => {
  const {
    products,
    productState: { type, searchQuery },
  } = ShopContext()

  const updatedView = () => {
    let filteredProducts = products
    if (searchQuery) {
      filteredProducts = products.filter((prod) =>
        prod.productName.toLowerCase().includes(searchQuery),
      )
    }
    if (type !== 'All') {
      filteredProducts = filteredProducts.filter((prod) => type === prod.type)
    }
    return filteredProducts
  }

  return (
    <>
      {products ? (
        <div className="home">
          <div className="productContainer">
            {updatedView().map((product) => {
              return <ProductCard key={product.index} product={product} />
            })}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  )
}

export default Home
