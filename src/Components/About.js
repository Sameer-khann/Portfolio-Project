import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return (
        <div>                                                                               
            <Navbar/>
            <main role="main">
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="display-5">About Us</h1>
                        <p style={{ fontSize: 21 }}>Welcome to our Interior Design Section, where creativity meets functionality to transform spaces into captivating havens. Our talented team of designers is dedicated to crafting remarkable interiors that inspire and delight. With an unwavering passion for design and an eye for detail, we bring your vision to life, surpassing expectations every step of the way.</p>
                        <p><a class="btn btn-primary btn-sm" href="#" role="button">RP &raquo;</a></p>
                    </div>
                </div>
            </main>
            <div class="container">
                <img src={require('../images/a.png')} height="100%" width="100%" />
            </div>
            <Footer/>
        </div>
    )
}

export default About







// function About() {
//     return <>

//         <main role="main">
//             <div class="jumbotron">
//                 <div class="container">
//                     <h1 class="display-5">About Us</h1>
//                     <p style={{fontSize:21}}>Welcome to our Interior Design Section, where creativity meets functionality to transform spaces into captivating havens. Our talented team of designers is dedicated to crafting remarkable interiors that inspire and delight. With an unwavering passion for design and an eye for detail, we bring your vision to life, surpassing expectations every step of the way.</p>
//                     <p><a class="btn btn-primary btn-sm" href="#" role="button">RP &raquo;</a></p>
//                 </div>
//             </div>
//         </main>
//         <div class="container">
//         <img src={require('../images/a.png')} height="100%" width="100%"/>
//         </div>

//     </>
// }
// export default About;