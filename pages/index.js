import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Testimonies from '../components/Testimonies'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Main />
        <Testimonies />
      </main> 
      <footer>
        <Footer />
      </footer>
      
  </div>
  )
}
