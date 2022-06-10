import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Blogs, Gigs,  Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Blogs/>
      <Gigs/>
      <Footer />
    </div>
  )
}

export default App
