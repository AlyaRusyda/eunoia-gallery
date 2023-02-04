import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="bg-teal-100 rounded-lg overflow-hidden mx-auto w-48 m-4 space-x-0 sm:w-80 hover:shadow-2xl text-left">
      <img src={image.webformatURL} alt="" className="w-80 h-48"/>
      <div className="px-6 py-4">
        <div className="font-bold text-teal-700 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul className='text-teal-600'>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;
