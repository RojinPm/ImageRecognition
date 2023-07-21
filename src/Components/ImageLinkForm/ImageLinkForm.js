import React from 'react'
import styled from 'styled-components'
import './ImageLinkForm.css'
function ImageLinkForm({ onInputChange, onButtonSubmit, OnsetReminder }) {
    return (
        <div>
            
            <p className="f3">

             {'This Magic Brain will detect the face in the picture'}


            </p>
 
          <Content>  

            <div className="form pa4 br3 shadow-5"> 

             <input className="f4 pa2 w-70 center"type="text" placeholder=""  onChange={onInputChange}/>

                <button className="w-40 grow f4 link ph3 pv2 dib white"
                
                 onClick={onButtonSubmit}
                
                >Detect</button>

           </div>
  
            </Content>


        </div>
    )
}

const Content = styled.div`
/* /*  */
display: flex;
justify-content:center;
align-items: center;
margin-top:-30px;
padding: 5px;

p{



}

div{

    display: flex;
  justify-content:center;
  flex-direction: row;

  button{

  background-color: #ff00d9;

    @media (max-width:760px){

     margin-top: 5px;
 

    }


  }

  @media (max-width:760px){

    display: flex;
   justify-content:center;
   flex-direction: column;
   align-items: center;
   padding: 1.5rem;
 

  }

}


`

export default ImageLinkForm
