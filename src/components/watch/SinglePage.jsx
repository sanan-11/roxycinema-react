import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData, recommended } from '../../home/dummy'
import { Upcoming } from '../Upcoming/Upcoming'
import "./style.css"

export const SinglePage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() =>{
        let item = homeData.find((item)=> item.id === parseInt(id))
        if(item){
            setItem(item)
        }
    }, [id])
    const [rec, setrec] = useState(recommended)
  return <> {item? (
    <>
    <section className='singlePage'>
        <div className="singleHeading">
            <h1>{item.name}</h1>
            <span> | {item.time} | </span> <span>HD</span>
        </div>
        <div className="container">
            <video src={item.video} controls></video>
            <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>Get access to the direct project overview with this report. Just by a quick glance you'll have an idea of the total tasks allocated to the team, number of milestones given and completed,total links created for the project and the total time taken by all the users. Each section would elaboarte the data further,if chosen</p>
                <p>Get access to the direct project overview with this report. Just by a quick glance you'll have an idea of the total tasks allocated to the team, number of milestones given and completed,total links created for the project and the total time taken by all the users. Each section would elaboarte the data further,if chosen</p>
                <p>Get access to the direct project overview with this report. Just by a quick glance you'll have an idea of the total tasks allocated to the team, number of milestones given and completed,total links created for the project and the total time taken by all the users. Each section would elaboarte the data further,if chosen</p>
            </div>
            <div className="social">
                <h3>Share</h3>
            </div>
        </div>
    </section>
    <Upcoming items={rec} title = 'Recommended Movies'/>
    </>
  ):null} </>
  
}
