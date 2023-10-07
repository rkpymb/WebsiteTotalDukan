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
                    768: {
                        slidesPerView: 2, // Display 2 slides on tablets (768px or more)
                    },
                    992: {
                        slidesPerView: 3, // Display 3 slides on desktop (992px or more)
                    },
                }}
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
               
                
            >
               
               
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/0b46da39-0f7f-45a9-956f-d396f48de3c6-Banner_carousel_(2).png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/a99b3567-11fb-47b4-81fa-bdf7ffbb1269-BANNER_CAROUSEL_Brand_2_-_Rahul_Lodha_(2).png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/3341a6e1-8f4f-42c2-af23-9a46d3621f41-Monetisation_Banners_GuidelinesBANNER_CAROUSEL_Brand_2_(1)_-_Rahul_Lodha.png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-499,pr-true,f-webp,q-80/inventory/banner/f2af0cba-b166-46f9-9e5e-2e42e6cda62a-BANNER_CAROUSEL_Fasting__eseentials.png" />

                </SwiperSlide>
               
              
               
            </Swiper>
        </>
    )
}
