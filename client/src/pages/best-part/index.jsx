import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.scss'
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper"
import { useState } from 'react';
import axios from 'axios';


const BestPart = () => {
    const[best,setBest]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/products')
        setBest(await data.data)
    }
    useEffect(() => {
     getData()
    }, [])
    
  return (
    <div className='bestPart'>
         <div className='productTitle'>
            <h4>Popular Item in the market</h4>
            <h1>Best Sellers</h1>
        <div className='line'></div>
        </div>
         <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {best.map((element)=>{
            return(
                <SwiperSlide>
                    <div className='card'>
                        <div className='cardImg'><img src={element.img} alt="" /></div>
                        <div className='cardText'>
                            <h4>{element.catacory}</h4>
                            <h3>{element.name}</h3>
                            <h2>{element.price}$</h2>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
    </div>
  )
}

export default BestPart