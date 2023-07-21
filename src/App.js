
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Clarifai from 'clarifai'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecoginition from './Components/FaceRecoginition/FaceRecoginition';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
 import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js'
import {useState } from 'react/cjs/react.development';





//  console.log(Clarifai)


function App() {

 const [input, setInput] = useState('');
 const [imageUrl, setimageUrl] = useState('');
 const [box, setBox] = useState({});
 const [route, setRoute] = useState('signin');
 const [isSignedIn, setSignedIn] = useState(false)

 const app = new Clarifai.App({
  apiKey: '851d7f1bb68a49f7b0a161a4381a32c8'

 });
 
const calculateFaceLocation = (data) => {

const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(clarifaiFace.left_col);
    console.log(clarifaiFace.top_row);
    // console.log( width - (clarifaiFace.right_col));
    // console.log(height - (clarifaiFace.bottom_row));
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
     
    }
 

}


const displayFaceBox = (box) =>{

  console.log(box)

  setBox(box);



}



const onInputChange = (event) =>{


  setInput(event.target.value);


}


const onButtonSubmit = () =>{

   setimageUrl(input)

   app.models.predict(Clarifai.FACE_DETECT_MODEL, input)


   .then(response => displayFaceBox(calculateFaceLocation(response)))

   .catch(err => console.log(err));
 

} 

const onRouteChange = (route) =>{

  if(route === 'signout'){

    setSignedIn(false)
    
  }else if(route === 'home'){

    setSignedIn(true)

  }
 setRoute(route);


}
 



  return (

    <div className="App">

           <Particles className="Particles"
              params={{
            		particles: {
            		
                  number:{

                     value:30,
                     density:{

                       enable:true,
                       value_area: 300

                     }

                  }


            		}
            	}}
              
            /> 

   
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />

        
       
           { route === 'home' ? <div>
               
               <Logo />
               <Rank />
               <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
              <FaceRecoginition box={box} imageUrl={imageUrl} />
    
            </div> 
            
            : ( route === 'signin' 
            
            ? <Signin onRouteChange={onRouteChange} />
            : <Register onRouteChange={onRouteChange} />
                         

               )
          
            }
            
      
      
      
      

        
       

    </div>
  );
}



export default App;
