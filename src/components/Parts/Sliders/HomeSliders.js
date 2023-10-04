import Head from 'next/head'
import Image from 'next/image'
import Mstyles from '../../../../Styles/home.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
export default function HomeSliders() {
    return (
        <>
            <Swiper

                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
              
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                slidesPerView={1}
            >
               
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://dms.mydukaan.io/600x600/webp/7040442/efa8431e-3064-4941-b9fe-4f83d24f8beb/image-cf32db6d-8358-4389-b591-0d155657dc75.png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://dms.mydukaan.io/600x600/webp/upload_file_service/618cfff7-b69d-4a68-a23d-253f64de84e2/image.png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://dms.mydukaan.io/600x600/webp/7040442/efa8431e-3064-4941-b9fe-4f83d24f8beb/image-8713c65e-6927-4a72-896f-a46016616bce.png" LuUser2 />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://dms.mydukaan.io/600x600/webp/7040442/efa8431e-3064-4941-b9fe-4f83d24f8beb/image-8713c65e-6927-4a72-896f-a46016616bce.png" LuUser2 />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://dms.mydukaan.io/600x600/webp/7040442/efa8431e-3064-4941-b9fe-4f83d24f8beb/image-8713c65e-6927-4a72-896f-a46016616bce.png" LuUser2 />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://dms.mydukaan.io/600x600/webp/7040442/efa8431e-3064-4941-b9fe-4f83d24f8beb/image-8713c65e-6927-4a72-896f-a46016616bce.png" LuUser2 />

                </SwiperSlide>
            </Swiper>
        </>
    )
}
