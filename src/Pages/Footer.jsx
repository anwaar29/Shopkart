import React from 'react'
import './Style2.css'
import Form from './Form'
const Footer = () => {
  return (
    <>
    <div className='footerbox'>
        <div className='newsleter'>
        <h1>Newslleter</h1>
        <p>Get news about articles and updates <br /> in your inbox.</p>
        </div>
        <Form/>
       <div className='getin'>
        <p>GET</p>
        <p>IN TOUCH</p>
       </div>
       <div className="last">Copyright 2022 All Right Reserved By SG</div>
    </div>
    </>
  )
}

export default Footer