import React from 'react'
import {
  createContext,
  useEffect,
  useState,
  useContext,
  useReducer,
} from 'react'
import axios from 'axios'
import { productReducer } from './ProductReducer'

const Shop = createContext()

const Context = ({ children }) => {
  const [products, setProducts] = useState()
  useEffect(() => {
    axios
      .get('data.json')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const [productState, productDispatch] = useReducer(productReducer, {
    type: 'All',
    searchQuery: '',
  })

  return (
    <Shop.Provider value={{ products, productState, productDispatch }}>
      {children}
    </Shop.Provider>
  )
}

export default Context

export const ShopContext = () => {
  return useContext(Shop)
}
