import React from 'react'
import './Style.css'
import './Style2.css'
import Nav from './Nav'
import Caro from './Caro'
import Footer from './Footer'
import Top from './Top'
const Home = () => {
  return (
    <>
   
    <div className='Main-Box'>
    <span className='shopkart'>Shopkart</span>
    <div className='wish-cart'>
        <span>WishList(0)</span>&nbsp;&nbsp;&nbsp;
        <span>Cart(0)</span>
    </div>
    <hr />
    <Nav/>

     <div className='box1'> </div>
     <div className='imgstar'></div>
     <div className='imgmen'></div>
     <div className='box2'> </div>
     <h1 className='text fresh'>Fresh</h1>
     <h1 className='text twenty'>2022</h1>
     <h1 className='text Look'>Look</h1>
    </div>
    <div className='cart'>
        <span className='arival'>New Arrivals</span><hr  className='arhr'/>
        <div className='listbox'>
            <div className='before-cr'>
                <p><span>Apparel</span></p>
                <p><b>Accesories</b></p>
                <p>Best sellers</p>
                <p>50% off</p>

            </div>
        </div>
       
       
    </div>
    <Caro/>
    <Footer/>
    </>
  )
}

export default Home