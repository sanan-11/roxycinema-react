import React, { useState } from 'react'
import { homeData } from '../../../home/dummy'
// import { HomeCard } from './HomeCard'
import { Home } from './Home'
import "./homes.css"

export const Homes = () => {
    const[items, setItem] = useState(homeData)
  return (
    <>
    <section>
    <Home items = {items}/>
    </section>
    <div className="margin"></div>
    </>
  )
}
