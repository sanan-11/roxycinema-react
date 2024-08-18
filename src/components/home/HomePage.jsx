import React, { useState } from 'react';
// import { Upcoming } from "../components/Upcoming/Upcoming";
import { Upcoming } from '../Upcoming/Upcoming';
// import { Homes } from "../components/header/home/Homes";
import { Homes } from "../header/home/Homes";
// import { Trending } from '../components/trending/Trending';
import { Trending } from "../trending/Trending";
import { latest, recommended, upcome } from './dummy';

export const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);

  return (
    <>
      <div style={{ color: "white", fontWeight: "bolder", fontSize: "20px" }}>
      
       <Homes />
      <Upcoming items={items} title='Upcoming movies' />
      <Upcoming items={item} title='Latest movies' />
      <Upcoming items={rec} title='Recommended Movies' />
      <Trending />
       
      </div>
    </>
  );
};
