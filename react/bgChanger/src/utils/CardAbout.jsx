import React from 'react'

const CardAbout = ({ field, tech, image }) => {
    return (
        <div className='px-6 py-10 hover:shadow-md transition duration-200 hover:shadow-gray-300 shadow-sm shadow-gray-300'>
            <img src={image} className='mb-2' />
            <h3 className='font-semibold'>{field}</h3>
            <p className='font-medium text-gray-200'>{tech}</p>
            <p>Some para About field</p>
        </div>
    )
}

export default CardAbout