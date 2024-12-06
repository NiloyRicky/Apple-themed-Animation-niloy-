import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import {rightImg, watchImg} from '../utils'
import VideoCarousel from './VideoCarousel'


function Highlights() {
  useGSAP(()=>{
    gsap.to("#title",{
      opacity:1,y:0
    })
    gsap.to(".link",{
      opacity:1,
      y:0,
      stagger:0.25,
      duration:1
    })
  })
  return (
    <section className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full items-end md:flex  justify-between'>
          <h1 id="title" className='section-heading'>
            Get the highlights
          </h1>
          <div className='flex flex-wrap items-end gap-1'>
            <p className='link'>Watch the film
              <img src={watchImg} className='ml-2'/>
            </p>

            <p className='link'>Watch the event
              <img src={rightImg} className='ml-2'/>
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights