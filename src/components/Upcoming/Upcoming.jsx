import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Card } from './Card';
// import { HomeCard } from './HomeCard';

const SampleNextArrow = (props) => {
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='next'>
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
export const Upcoming = ({items, title}) => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive : [
        {
            breakpoint : 800,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
      };
  return (
    <>
    <section className='upcome'>
        <div className="container">
            <div className="heading flexSB">
                <h1>{title}</h1>
                <Link to='/'>View All</Link>
            </div>
            <div className="content">
            <Slider {...settings}>
                {items.map((item) =>(
                    <Card key={item.id} item={item}/>
                ))}
                </Slider>
            </div>
        </div>
    </section>
    </>
  )
}
