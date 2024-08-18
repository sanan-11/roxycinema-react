import React, { useState } from 'react'
import { trending } from '../../home/dummy'
import { Home } from '../header/home/Home'
import "./trending.css"

export const Trending = () => {
    const [items,setitems] = useState(trending)
  return (
    <>
    <section className='trending'>
    <Home items={items}/>
    </section>
    </>
  )
}
