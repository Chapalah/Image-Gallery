import React from 'react'

const Card = ({ image }) => {
    var tags = image.tags.split(', ')

    return (
    <div className="card">
        <img src={image.webformatURL} alt="" />
        <div className="card-info" key={image.id}>
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
    )
}

export default Card
