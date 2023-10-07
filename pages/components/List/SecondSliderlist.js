import Head from 'next/head'
import Image from 'next/image'
import Mstyles from '../../../Styles/home.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
export default function HomeSliders() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
                breakpoints={{
                    768: {
                        slidesPerView: 2, // Display 2 slides on tablets (768px or more)
                    },
                    992: {
                        spaceBetween:20,
                        slidesPerView: 3, // Display 3 slides on desktop (992px or more)
                    },
                }}

            >
                <SwiperSlide>
                    <div className={Mstyles.SecondSwiperImg}>
                        <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/b306bb1f-84c5-4c7e-8891-adb4fdc40118-BANNER_CAROUSEL_WITHOUT_TITLE_1_-_2023-09-12T120829.498.png" />
                    </div>
                  

                </SwiperSlide>
               
                <SwiperSlide>
                    <div className={Mstyles.SecondSwiperImg}>
                        <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/ae898084-0c61-4590-ac68-e86507ea6cac-BANNER_CAROUSEL_WITHOUT_TITLE_1_-_2023-09-29T193903.284.png" />

                    </div>

                  
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Mstyles.SecondSwiperImg}>
                        <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/93708ef1-bff9-4f9c-a2fb-2bbcf9d46ca9-BANNER_CAROUSEL_WITHOUT_TITLE_1_(58).png" />

                    </div>
                   

                </SwiperSlide>
                <SwiperSlide>
                   
                    <div className={Mstyles.SecondSwiperImg}>
                        <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/7841f738-be6a-4a88-98c4-095e6a67c8d3-BANNER_CAROUSEL_WITHOUT_TITLE_1_(41).png" />

                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}
