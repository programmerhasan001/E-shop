import React from 'react'
import Header from "./components/Header"
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main> 
        <Container>
          <h2>Hello from E-commerce App</h2>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App