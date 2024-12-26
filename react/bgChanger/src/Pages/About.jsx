import React from 'react'
import CardAbout from '../utils/cardAbout'

const About = () => {
    const data = [
        {
            field: 'Frontend',
            tech: 'Html CSS JS React',
            image: `hey/src`
        },
        {
            field: 'Frontend',
            tech: 'Html CSS JS React',
            image: `hey/src`
        },
        {
            field: 'Frontend',
            tech: 'Html CSS JS React',
            image: `hey/src`
        }
    ]
    const Tools = [
        {
            image: "src",
            alt: "html"
        },
        {
            image: "src",
            alt: "html"
        },
        {
            image: "src",
            alt: "html"
        }
    ];

    return (
        <section className='px-7 lg:px-32 mt-20 md:px-28 min-h-screen pb-10 w-screen pt-10'>
            <h3 className='text-4xl font-medium mb-5 text-center'>About Me</h3>
            <div className='flex items-center'>
                <div className='w-1/2 pr-7'>
                    <p>lorem I am Sachin Chandra Bhatt Full Stack Web Developerlorem I am Sachin Chandra Bhatt Full Stack Web Developerlorem I am Sachin Chandra Bhatt.lorem I am Sachin Chandra Bhatt Full Stack erlorem I am Sachin Chandra Bhatt Full Stack Web Developerlorem I am Sachin Chandra Bhatt.lorem I am Sachin Chandra Bhatt Full Stack Web Developerlorem I am Sachin Chandra Bhatt Full Stack Web Developerlorem I am Sachin Chandra Bhatt.</p>
                </div>
                <div className='mt-16 flex flex-col w-1/2 md:flex-row gap-4'>
                    {
                        data.map((data, index) => {
                            return <CardAbout field={data.field} tech={data.tech} image={data.tech} key={index} />
                            {/* alert={data} */ }
                            {/* <CardAbout /> */ }
                        })
                    }
                    {/* <CardAbout /> */}
                </div>
            </div>
            <div>
                <h2 className='text-xl mt-7'>Tools and Technolgies</h2>
                <div className='flex gap-3 mt-5'>
                    {
                        Tools.map((data, idx) => {
                            return <div key={idx}>
                                <img src={data.image} alt={data.alt} />
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default About