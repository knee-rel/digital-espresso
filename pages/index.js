import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Main />
      </main> 
      <footer>
        <Footer />
      </footer>
      
  </div>
  )
}
