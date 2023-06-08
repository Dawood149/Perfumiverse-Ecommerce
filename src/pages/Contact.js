import React from 'react'
import Layout from '../components/Layouts/layout'
import { NavLink } from 'react-router-dom'  
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {AiOutlineInstagram} from 'react-icons/ai'

function Contact() {
  return (
    <Layout>
      <img src="/Images/contact.contact.jpeg" alt="contactus"
            style={{ width: "100%" }}/>

  <div className='contactus'>
    <div className='heading bg-dark p-3 mb-3 text-white text-center'>
  <h1>CONTACT US</h1>
  </div>
  <p>
    Feel free to contact regarding any product. We would be glad to answer any of your queries 24/7
  </p>
  <p>
    <BsFillTelephoneOutboundFill/> +92 348 0458374
  </p>
  <p>
    <TfiEmail/> info@chanel.com
  </p>
  <p>
  <AiOutlineInstagram/> <NavLink to="https://www.instagram.com/">Instagram</NavLink>
  </p>
    </div>
    </Layout>
  )
}

export default Contact
