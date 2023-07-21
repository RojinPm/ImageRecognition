import React from 'react'
import styled from 'styled-components'

function Navigation({ onRouteChange, isSignedIn}) {
   

        if (isSignedIn){


            return(
            
                <Nav>

                <p className="f3 link dim black underline pa2 pointer " onClick={ () => onRouteChange('signout')}>Sign Out</p>
    
                </Nav>
                    
                    
            )

    
        }else{

            return(
                
                     <Nav>

                <p className="f3 link dim black underline pa2 pointer " onClick={ () => onRouteChange('signin')}>Sign In </p>
                <p className="f3 link dim black underline pa2 pointer " onClick={ () => onRouteChange('register')}>Register</p>

                    </Nav>
                
    
        
                    
            )
            
        }
        
       
    
}


const Nav = styled.nav`

display: flex;
justify-content: flex-end;
margin-top:30px;
margin-right: 60px;
@media (max-width:700px){

    display: flex;
justify-content: flex-end;
margin-right:20px;


}


`





export default Navigation

