import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Clients from './components/Clients'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Clients />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
