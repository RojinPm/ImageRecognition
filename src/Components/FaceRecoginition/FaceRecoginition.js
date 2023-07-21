import React from 'react'
import styled from 'styled-components'
import './FaceRecoginition.css'

function FaceRecoginition({ imageUrl, box }) {
    return (
        <div className="center ma">

 
    
         <div className="absolute mt2">
  
      <IMAGE><img id='inputimage' src={imageUrl} alt="" height='300px' /></IMAGE>
  
      <div className="bounding_box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
        

         </div>


         
           
        </div>
    )

    }

     const IMAGE=styled.div`
     
 


   
     
     
     `

    
     
     
     
     
     


export default FaceRecoginition
