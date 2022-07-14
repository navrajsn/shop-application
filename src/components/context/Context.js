import React from 'react'
import { createContext } from 'react'

const Shop = createContext()

const Context = ({ children }) => {
  return <Shop.Provider>{children}</Shop.Provider>
}

export default Context
