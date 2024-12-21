import React, { useState } from 'react'
import Button from '../../utils/Button'

const Header = () => {
    const [right, setright] = useState(`translate-x-[100%]`)
    const remove = () => {
        setright(`translate-x-[100%]`);
        // console.log(right);
    }
    const add = () => {
        setright(`translate-x-[0%]`);
        // setright(0)
    }
    return (
        <header>
            <nav className='flex fixed backdrop-blur-xl z-40 overflow-x-hidden justify-between items-center w-screen h-20 px-7 lg:px-32 md:px-28 shadow-sm  shadow-gray-200'>
                <div className='text-4xl font-bold'>
                    Logo
                </div>
                <div className='text-lg md:block hidden'>
                    <ul className='hidden  md:flex gap-7'>
                        {/* <li>hey</li> */}
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='flex items-center gap-6'>
                    <div className='text-lg'>Moon</div>
                    <div className='text-lg hidden lg:block'>
                        <Button text="Contact" lin={false} gredient='hey' color="black" bgColor="white" borderColor="black" />
                    </div>
                    <div className='block md:hidden' onClick={() => {
                        add()
                    }}>
                        <span>ham</span>
                    </div>
                </div>
            </nav>
            <div className={`md:hidden ${right} h-screen fixed top-0 flex items-center justify-center right-0 bottom-0 text-whiye bg-black z-50 transition duration-1000 w-scree`}>
                <ul className='flex flex-col gap-7 text-6xl'>
                    <div className='text-xl absolute top-8 right-10' onClick={() => {
                        remove()
                    }}>
                        Rem
                    </div>
                    {/* <li>hey</li> */}
                    <li className='border border-b-black w-screen py-7 px-5 text-right'>Home</li>
                    <li className='border border-b-black w-screen py-7 px-5 text-right'>About</li>
                    <li className='border border-b-black w-screen py-7 px-5 text-right'>Projects</li>
                    <li className='border border-b-black w-screen py-7 px-5 text-right'>Contact</li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header