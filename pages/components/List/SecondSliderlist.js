import Head from 'next/head'
import Image from 'next/image'
import Mstyles from '../../../Styles/home.module.css'
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
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 1,
                    },
                }}
             
                spaceBetween={30}
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
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/6a3c3c6a-5dda-4b2e-ab7e-0c4366481c93-BLR_Mid_week_refresh_(1).png" LuUser2 />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-499,pr-true,f-webp,q-80/inventory/banner/f2af0cba-b166-46f9-9e5e-2e42e6cda62a-BANNER_CAROUSEL_Fasting__eseentials.png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/0b46da39-0f7f-45a9-956f-d396f48de3c6-Banner_carousel_(2).png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/0a7b09b8-4abc-4807-b851-47f77932ccca-BANNER_CAROUSEL_WITHOUT_TITLE_1_-_2023-08-30T170601.464.png" />

                </SwiperSlide>
                <SwiperSlide className={Mstyles.SwiperImgae}>
                    <img src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/aaca333e-5aa4-405f-96c5-9b8e9222cb08-BANNER_CAROUSEL_WITHOUT_TITLE_1_-_2023-10-03T133900.700.png" LuUser2 />

                </SwiperSlide>

            </Swiper>
        </>
    )
}
