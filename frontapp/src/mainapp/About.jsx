import React from 'react'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import Footer from '../component/Footer'
import a1 from '../component/img/about-overview-08.jpg';

const About = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <div className='row my-5'>
        <div className='col-md-5 mx-auto my-auto'>
            <h1>About Us</h1>
            <p className='text-justify'>KARAM is a specialized corporation in the business of producing and serving safety products that are intentionally made for installation on the heavy-duty, large-scale construction projects.
 Personal protective equipment (PPE), safety harnesses, scaffolding systems and fall protection devices are the company's product range. 
Safety Top brings their dynamic range of products with the commitment to workers' safety and legal compliance. They place themselves as a pioneer by providing innovative, cost-effective products that will make the site completely safe and efficient.
 To minimize the occurrence of workplace accidents, Safety Top assures that they do not make compromises in offering quality and reliability rather than the usual. Karam provide the best products and services to our workers for their safety.
By using our products a person can work confidently without thinking of injuries.

            </p>
        </div>
        <div className='col-md-5 mx-auto'>
            <img src={a1}  className='w-100'/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About