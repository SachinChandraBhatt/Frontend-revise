import React from 'react'
import { Link } from 'react-router-dom'

const CardProject = () => {
    return (
        <div className='rounded-lg w-60 p-3 bg-green-900 m-5'>
            <div>
                <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*bX6EaTdfyH51epEoggg5JQ.png' />
            </div>
            <div>
            <p>  "name": "07reactrouter",
                "private": ite build",
                "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
                "preview": "vite preview"
            </p>
            </div>
            <div>
                <span>html</span>
                <span>css</span>
            </div>
            <div>
                <Link >Know More</Link>
            </div>
        </div>
    )
}

export default CardProject