import { useState } from 'react'
import Header from './components/header/Header'
import Product from './components/product/Product'
import Props from './components/props/Props'
import Hero from './components/hero/Hero'

function App() {

  return (
    <>
     <Header/>
     <Product/>
     <Props/>
     <Hero/>
    </>
  )
}

export default App