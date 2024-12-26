import React from 'react'
import CardProject from '../utils/CardProject';
// import { data } from 'autoprefixer';

const Projects = () => {
  const projectsList = [
    {
      name: "hey"
    },
    {
      name: "bye"
    },
    {
      name: "hello"
    },
    {
      name: "bye"
    },
    {
      name: "hello"
    },
    {
      name: "bye"
    },
    {
      name: "hello"
    },
    {
      name: "bye"
    },
    {
      name: "hello"
    }
  ];
  // flex flex-col w-full mt-24 min-h-screen justify-center items-center px-7 lg:px-32 md:px-28 
  return (
    <div className='px-7 lg:px-32 mt-20 md:px-28 flex flex-col items-center min-h-screen pb-10 w-screen pt-10'>
      <div className='flex justify-center w-full mb-7'>
        <h2 className='text-4xl'>Projects</h2>
      </div>
      <div className='flex flex-wrap justify-center'>
        {
          projectsList.map((data, idx) => {
            return <CardProject key={idx} />
          })
        }
      </div>
    </div>
  )
}

export default Projects