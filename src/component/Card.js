import React from 'react';

const Card = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="bg-teal-100 rounded-lg overflow-hidden mx-auto w-80 m-4 space-x-0 sm:w-80 hover:shadow-2xl text-left">
      <img src={image.webformatURL} alt="" className="w-full h-36 md:h-48 object-contain m-4 mx-auto mb-4"/>
      <div className="px-6 py-4">
        <div className="font-bold text-teal-600 text-lg mb-3">
          Photo by {image.user}
        </div>
        <ul className='text-teal-400'>
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
      <div className="grid grid-cols-2 lg:grid-cols-2 mx-auto gap-4 p-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full py-1 px-2 text-sm font-semibold text-gray-700">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default Card;