import React, { createContext, useContext } from 'react'
import Navbar from './Navbar'

const Cart = () => {

  const user = useContext(createContext)

  return (
    <div>
            <Navbar/>
             <h1>this is cart page</h1>

                        
              <div  className='cart-container-div'>
              {
                user.map((val)=>{
                  
                  
                  return(
                    <>
                  
                      <div className='cart-container' >
                                <div className='sub-cart'>
                                    <div>
                                      <img src={val.Img} alt='' width='250px' height='200px'/>

                                    </div>
                                      
                                    <div id='lid'>

                                      <h2 className='pid'>{`Price:- ${val.Price}`}</h2>
                                      <h2 className='pid'>{`Rating:- ${val.Rating}`}</h2>
                                      <button id='incr' >+</button>
                                      <button id='decr' >-</button>
                                    </div>
                                </div>
                      </div>
                    </>
                  )

                })

              }

            </div>


    </div>
  )
}

export default Cart
