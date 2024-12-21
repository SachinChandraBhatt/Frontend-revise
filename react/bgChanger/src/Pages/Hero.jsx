import React from 'react'
import Button from '../utils/Button'

const Hero = () => {
  return (
    <section className='flex flex-col w-full h-screen justify-center items-center px-7 lg:px-32 md:px-28 '>
      <img src="C:\Users\Admin\OneDrive\Pictures\Screenshots\Screenshot (12).png" />
      <h2 className='md:text-3xl font-thin mb-6 text-center'>I am Sachin Chandra Bhatt</h2>
      <h1 className='md:text-6xl text-2xl font-medium mb-4 text-center'>Full Stack Web Developer</h1>
      <p className='text-center mb-6'>lorem I am Sachin Chandra Bhatt Full Stack Web Developerlorem I am Sachin Chandra Bhatt Full Stack Web Developerlorem I am Sachin Chandra Bhatt. </p>
      <div className='flex flex-col md:flex-row gap-5'>
        <Button text='Contact me' color='white' lin={true} bgColor='hey' gredient='linear-gradient(to right ,red, green ,blue)' borderColor='white' />
        <Button text='My Resume' bgColor='white' color='black' borderColor='grey' />
      </div>
    </section>
    // #800080 ,#ff4500 ,@ff69b4
  )
}

export default Hero