import { useState } from 'react'
import './App.css'
import BubbleSort from './Component/BubbleSort'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {

  return (
    <>
    <Header/>
      <BubbleSort/>
      <Footer/>
    </>
  )
}

export default App
