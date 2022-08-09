import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import data from '../Data.js'
import '../CSS/Home.css'

const UserContext = createContext();

const Home = () => {

   const[arr,setArr] = useState([])

  
 
    const addToCart = (event)=>{
    
      let btn_val = event.target.id; // id of array of that perticulart button.
      
      //fetch data from data.js file where id = btn_val
      
      console.log(data[btn_val]); // 


      if(data[btn_val]){

        let obj = {Title: data[btn_val].title, Price:data[btn_val].price, Img:data[btn_val].images, Rating:data[btn_val].rating}

        
       
        setArr([...arr, obj])
     

      }

}

 const increament = ()=>{

 }

 const decreament = ()=>{

 }

  return (
    <>
       <div>
          <Navbar/>

          <div className='card-container'  >
            {
              data.map((val)=>{
                   
                       return(

                        <>
               
                          <div className='child-container'>

                              <div >
                                <img src={val.images}  alt='' width='100%' height='510px' id='img'/>

                              </div>

                              <p style={{textAlign:"center",fontSize:"22px" }} id='title'>{val.title}</p>

                              <div style={{display:"flex",justifyContent:"space-around"}}>
                                <p style={{fontSize:"22px"}} id='price'>{val.price}</p> 
                                <p  style={{fontSize:"22px"}} id='rating'>{val.rating}</p>
                              </div>
                                
                              <div style={{textAlign:"center"}}>
                                  <button id={val.id} className='add_cart'  onClick={addToCart}>ADD TO CART</ button>
                              </div> 

                          </div>
   
                        </>
                       )
                })
              }

       </div>


    </div>

{/* .........<========= CART DISPLAY =========>............. */}


<UserContext.Provider value={arr}>

</UserContext.Provider>


 <div style={{clear:'left'}}>
    <hr></hr>
    <h1 style={{textAlign:"center"}}>CART DISPLAY</h1>
    <hr></hr>
 </div>

  <div  className='cart-container-div'>
   {
    arr.map((val)=>{
      
      
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
                          <button id='incr' onClick={increament}>+</button>
                          <button id='decr' onClick={decreament}>-</button>
                        </div>
                    </div>
           </div>
        </>
      )

    })

   }

</div>


    
    </>
  
  )
}

export default Home;
export {UserContext};
