import Head from 'next/head'
import Image from 'next/image'
import Mstyles from '../../../../Styles/home.module.css'
// Import Swiper React components


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function HomeSliders() {
    return (
        <Swiper

            breakpoints={{
                // when window width is >= 640px
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 3,
                },
            }}


            spaceBetween={15}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}

            modules={[Autoplay, Pagination, Navigation]}
        >


            <SwiperSlide className={Mstyles.SwiperImgae}>
                <img src="https://dms.mydukaan.io/600x600/webp/7040442/efa8431e-3064-4941-b9fe-4f83d24f8beb/image-cf32db6d-8358-4389-b591-0d155657dc75.png"  />

            </SwiperSlide>
            <SwiperSlide className={Mstyles.SwiperImgae}>
                <img src="https://dms.mydukaan.io/600x600/webp/upload_file_service/618cfff7-b69d-4a68-a23d-253f64de84e2/image.png"  />

            </SwiperSlide>
            <SwiperSlide className={Mstyles.SwiperImgae}>
                <img src="https://dms.mydukaan.io/600x600/webp/7040442/efa8431e-3064-4941-b9fe-4f83d24f8beb/image-8713c65e-6927-4a72-896f-a46016616bce.png" LuUser2 />

            </SwiperSlide>
          
        </Swiper>
    )
}
