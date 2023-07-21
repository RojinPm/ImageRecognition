import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png';
import styled from 'styled-components';

import './Logo.css'

function Logo() {
    return (
 
    
         <Container>

        <div className="ma4 mt0">

              <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner pa3"> <img className="Brain" src={brain} alt="" /></div>
             </Tilt>

        </div>

        </Container>
    )
}

const Container = styled.div`
 
 div{
  
  margin-top: -30px;


 }



`;



export default Logo
