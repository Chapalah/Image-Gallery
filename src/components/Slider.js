import React, {useState, useEffect} from 'react'

const Slider = ({images}) => {
    const [index, setIndex] = useState(0)
    const image = images[index]
    var tags = image.tags.split(', ')
    
    return (
        <div className="slider">
            <div className="slider-body">
                <div className="prev"
                    onClick={() => {index !== 0 && setIndex(index - 1)}}
                />
                <div className="slide">
                    <img src={image.webformatURL} alt="" />
                    <div className="slider-info">
                        <h2>Photo by {image.user}</h2>
                        <ul>
                            <li>Views: {image.views}</li>
                            <li>Downloads: {image.downloads}</li>
                            <li>Likes: {image.likes}</li>
                        </ul>
                        <div className="tags" key={image.id}>
                            {tags.map(tag => (
                                <span className="tag"> #{tag} </span>
                            ))}
                        </div>
                    </div>    
                   
                </div>
                <div className="next"
                    onClick={() => {index !== 19 && setIndex(index + 1)}}
                />
            </div>
      
        </div>
    )
}

export default Slider
