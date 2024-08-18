import React from 'react'
import { Link } from 'react-router-dom'
// import {dummy} from "../home/"

export const HomeCard = ({item : {id,cover,name,rating,time,desc,starring,genres,tags,video}}) => {
  return (
    <>
    
    <div className="box">
        <div className="coverimage">
            <img src={cover} alt="" />
        </div>
        <div className="content flex">
        <div className="detail row">
            <h1>{name}</h1>
            <div className="rating flex">
                <i className='fa fa-stars'></i>
                <i className='fa fa-stars'></i>
                <i className='fa fa-stars'></i>
                <i className='fa fa-stars-half'></i>
            <label>{rating}</label>
            <span>GP </span>
            </div>
            <label>{time}</label>
        
        <p>{desc}</p>
        <div className="cast">
            <h4>
                <span>Starring: </span>
                {starring}
            </h4>
            <h4>
                <span>Genres: </span>
                {genres}
            </h4>
            <h4>
                <span>Tags: </span>
                {tags}
            </h4>
            </div>
            <button className="primary-btn">
        <i className='fas fa-play'></i>PLAY NOW
        </button>
        </div>
        <div className="playButton row">
            <Link to={`/singlePage/${id}`}>
                <button>
                    <div className="img">
                        <img src="./images/play-button.jpg" alt="" />
                        <img src="./images/play.png" alt="" className='change' />
                    </div>
                    WATCH TRAILER
                </button>
            </Link>
        </div>
    </div>
    </div>
    </>
  )
}
