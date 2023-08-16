import React from 'react'
import Feed from "../components/Feed"

const page = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover and Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>
                AI-Powered Prompts
            </span>
            <p className='desc text-center'>
                Prompt Share is an Open-Source AI Prompting tool 
                for Modern world to discover , create and share creative prompts.
            </p>

            <Feed/>
        </h1>
    </section>
  )
}

export default page