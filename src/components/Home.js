import React from 'react'
import { ShopContext } from './context/Context'
import ProductCard from './ProductCard'
import './styles.css'
const Home = () => {
  const { products } = ShopContext()
  return (
    <>
      {products ? (
        <div className="home">
          <div className="productContainer">
            {products.map((product) => {
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
