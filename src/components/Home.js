import React from 'react'
import { ShopContext } from './context/Context'

const Home = () => {
  const { products } = ShopContext()
  console.log(products)
  return (
    <>
      {products ? (
        <div className="home">
          {products.map((product) => (
            <span>{product.productName}</span>
          ))}
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  )
}

export default Home
