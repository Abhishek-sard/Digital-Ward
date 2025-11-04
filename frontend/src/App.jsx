import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Section from './Components/Home/Section';
import Blogs from './Components/Home/Blogs';
import Image from './Components/Home/Image';

const App = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Blogs />
      <Image />
      <Footer />

    </div>
  )
}

export default App
