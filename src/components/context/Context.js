import React from 'react'
import { createContext, useEffect, useState, useContext } from 'react'
import axios from 'axios'

const Shop = createContext()

const Context = ({ children }) => {
  const [products, setProducts] = useState()
  useEffect(() => {
    axios
      .get('data.json')
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return <Shop.Provider value={{ products }}>{children}</Shop.Provider>
}

export default Context

export const ShopContext = () => {
  return useContext(Shop)
}
