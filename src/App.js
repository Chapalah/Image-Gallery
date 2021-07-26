import React, {useState, useEffect} from 'react';
import Card from './components/Card'
import Search from './components/Search';
import Slider from './components/Slider';
import './style.css';

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSlider, setIsSlider] = useState(false)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22514744-0bee0be8c594903bd32976011&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [term])

  return (
   <div className='container'>
     <Search searchText={(text) => setTerm(text)}/>
     <div className="settings">
       <div onClick={() => {setIsSlider(false)}} className={`item ${isSlider ? '' : 'active'}`}>Grid</div>
       <div onClick={() => {setIsSlider(true)}} className={`item ${!isSlider ? '' : 'active'}`}>Slider</div>
     </div>
     {isLoading ? <h1 className="error">Loading</h1> : ''}
     {images.length === 0 && !isLoading ? <h1 className="error">Sorry, images with '{term}' not founded </h1> : ''}
     {isSlider && images.length > 0 ? <Slider images={images}/> : <div className="cards">
       {images.map(image => (
         <Card key={image.id} image={image}/>
       ))}
     </div>}
 
   </div>
  );
}

export default App;
