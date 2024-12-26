import React, { useState } from 'react'
import { Link , NavLink } from 'react-router-dom'
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
            <nav className='flex fixed top-0 backdrop-blur-xl z-40 overflow-x-hidden justify-between items-center w-screen h-20 px-7 lg:px-32 md:px-28 shadow-sm  shadow-gray-200'>
                <div className='text-4xl font-bold'>
                <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        Logo
                    </Link>
                </div>
                <div className='text-lg md:block hidden'>
                    <ul className='hidden  md:flex gap-7'>
                        {/* <li>hey</li> */}
                        <li>
                        <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                        </li>
                        <li>
                        <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                About
                                </NavLink>
                        </li>
                        <li>
                        <NavLink
                                to="/projects"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Projects
                                </NavLink>
                        </li>
                        <li>
                        <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-6'>
                    <div className='text-lg'>Moon</div>
                    <div className='text-lg hidden lg:block'>
                        {/* <Button text="Contact" lin={false} gredient='hey' color="black" bgColor="white" borderColor="black" /> */}
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
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