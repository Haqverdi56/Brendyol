import SkeletonLoader from '../../components/Skeleton'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../../components/product/Product'
import LandingCarousel from '../../components/carousels/LandingCarousel'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import './homepage.scss'
import toast, { Toaster } from 'react-hot-toast';
import PanoLeft from '../../assets/images/salered.jpg'
import PanoMiddle from '../../assets/images/young-woman.jpg'
import PanoRight from '../../assets/images/salered2.jfif'

function HomePage({userData}) {
  const [data, setData] = useState([])
  const [laptops, setLaptops] = useState([])
  const [acc, setAcc] = useState([])
  const [skeleton, setSkeleton] = useState(true)
  const notify = () => toast.success('Product added to cart');

  const productFetch = async () => {
    await axios.get('https://brendyol-fashion-backend.vercel.app/api/products?limit=10')
    .then(res => {
      setData(res.data);
      setSkeleton(false)
    })
  }
  const laptopFetch = async () => {
    await axios.get('https://brendyol-fashion-backend.vercel.app/api/products?limit=10&skip=10')
    .then(res => {
      setLaptops(res.data)  
      setSkeleton(false)
    })
  }
  const accFetch = async () => {
    await axios.get('https://brendyol-fashion-backend.vercel.app/api/products?limit=10&skip=15')
    .then(res => {
      setAcc(res.data)  
      setSkeleton(false)
    })
  }

  useEffect(() => {
    productFetch();
    laptopFetch()
    accFetch()
  }, [])

  const clickToast = () => {
    notify()
  }
  
  return (
    <div className='homepage'>
      <LandingCarousel />
      <div className="products">
        <h3 className='products-slide-title'>Çantalar</h3>
        {
          !skeleton ?
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              350: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}>
            {data && data.map((item, i) => (
            <SwiperSlide key={i}>
              <Product item={item} clickToast={clickToast} />
            </SwiperSlide>
          ))}
          </Swiper>
          :
          <SkeletonLoader />
        }
      </div>
      <div className="products">
      <h3 className='products-slide-title'>Bestsellers</h3>
        {
          !skeleton ?
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              350: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}>
            {laptops && laptops.map((item, i) => (
            <SwiperSlide key={i}>
              <Product item={item} clickToast={clickToast} userData={userData}/>
            </SwiperSlide>
          ))}
          </Swiper>
          : <SkeletonLoader />
        }
        <Toaster 
          position="top-right"
          reverseOrder={true}
          gutter={8}
          toastOptions={{
            className: '',
            duration: 2000,
            success: {
              theme: {
                primary: 'green',
                secondary: 'black',
            },
          },
        }}/>
      </div>
      <div className='pano-div'>
        <div>
          <img src={PanoLeft} alt="" />
        </div>
        <div>
          <img src={PanoMiddle} alt="" />
        </div>
        <div>
          <img src={PanoRight} alt="" />
        </div>
      </div>
      <div className="products">
      <h3 className='products-slide-title'>New Accessories</h3>
        {
          !skeleton ?
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              350: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}>
            {acc && acc.map((item, i) => (
            <SwiperSlide key={i}>
              <Product item={item} clickToast={clickToast} userData={userData}/>
            </SwiperSlide>
          ))}
          </Swiper>
          : <SkeletonLoader />
        }
        <Toaster 
          position="top-right"
          reverseOrder={true}
          gutter={8}
          toastOptions={{
            className: '',
            duration: 2000,
            success: {
              theme: {
                primary: 'green',
                secondary: 'black',
            },
          },
        }}/>
      </div>
    </div>
  )
}

export default HomePage