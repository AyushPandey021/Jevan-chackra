import React from 'react'
import Gallery from './Components/Gallery'
import Card from './Components/Card'
import Pg02 from './Components/Pg02'
import StatsCounter from './Components/StatsCounter'
import SushmitaAbbi from './Components/SushmitaAbbi'
import YouTubeGallery from './Components/YoutubeGallery'
import ProductPage from './Components/ProductPage'
import LamaFeraHealing from './Components/LamaFara'
import Footer from './Components/Footer'

// import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";



const App = () => {
  return (
     
    <div>
      <div style={{ height: '100vh' }}>
      <iframe
        src="/HomeBg.html"
        title="My Static HTML Page"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
   
  
      <Pg02/>
      <LamaFeraHealing/>
           <StatsCounter/>
    <Gallery/>
    <Card/>

    
    <SushmitaAbbi/>
    <YouTubeGallery/>
    <ProductPage/>
    <Footer/>
    </div>
  )
}

export default App
