import React from 'react'
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';

import pic1 from '../images/study1.jpg'
import pic2 from '../images/study2.jpg'
import pic3 from '../images/study3.jpg'

const images = [
  pic1,
  pic2,
  pic3,
  // Add more image URLs here
];

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel images={images}/>
      <main role="main">
             <div class="jumbotron">
                 <div class="container">
                     <h1 class="display-5">Home</h1>
                     <p style={{fontSize:21}}>Step into our Interior Design Section, where innovation merges with practicality. Our skilled team of designers creates captivating environments that spark inspiration. Whether it's residential or commercial projects, we customize designs to match unique tastes. Immerse yourself in the pinnacle of interior design excellence with us.</p>
                     <p><a class="btn btn-primary btn-sm" href="#" role="button">RP &raquo;</a></p>
                 </div>
             </div>
         </main>
         <div class="container">
         <img src={require('../images/b.jpg')} height="100%" width="100%"/>
         </div>
      <Footer/>
    </div>
  )
}

export default Home
