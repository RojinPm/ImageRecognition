import React from 'react'
import styled from 'styled-components'
function Rank() {
    return (

     <div>

      <Mainhead>
         <div className="white f3">

            {'Rojin, your current rank is........'}
            
         </div>

     </Mainhead>

     <Secondhead>

         <div className="white f1">

            {'#5'}
            
         </div>

        </Secondhead>

     </div>

    )
}

 const Mainhead = styled.div`
   
   position: relative;
 div{

 margin-top: -70px;

 @media (max-width:760px){

   margin-top: -27px;


 }

 }

 
 `;

 const Secondhead = styled.div`
 
  .f1{
 
     position: relative;
     bottom: 10px;

     @media (max-width:760px){
  
       font-size: 1.5rem;



     }
 

  }

 
 
 `; 






export default Rank
