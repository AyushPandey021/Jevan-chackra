import React from 'react'
import Pg02 from '../Components/Pg02'
import StatsCounter from '../Components/ui/StatsCounter'
import Gallery from '../Components/ui/Gallery'
import Card from '../Components/ui/ProductsCard'
import SushmitaAbbi from '../Components/SushmitaAbbi'
import Youtube from '../Components/ui/YoutubeGallery'
import TestimonialMarquee from '../Components/ui/TestimonialMarquee'

const Home = () => {
  return (
    <div className='bg-[#EAC3D0]'>
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
      <TestimonialMarquee />


    </div>
  )
}

export default Home
