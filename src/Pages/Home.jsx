import React from 'react'
import Pg02 from '../Components/Pg02'
import StatsCounter from '../Components/StatsCounter'
import Gallery from '../Components/Gallery'
import Card from '../Components/Card'
import SushmitaAbbi from '../Components/SushmitaAbbi'
import Youtube from '../Components/YoutubeGallery'

const Home = () => {
  return (
    <div>
      <div style={{ height: '100vh' }}>
        <iframe
          src="/HomeBg.html"
          title="My Static HTML Page"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
      <Pg02 />
      <StatsCounter />

      <Gallery />
      <Card />

      <SushmitaAbbi />
      <Youtube />


    </div>
  )
}

export default Home
