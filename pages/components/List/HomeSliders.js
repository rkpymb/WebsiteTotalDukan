import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import Mstyles from '../../../Styles/home.module.css';
import { MediaFilesUrl, MediaFilesFolder } from '../../../Data/config'


import {

    useTheme,
} from '@mui/material';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function RecentOrders() {

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    useEffect(() => {

        const handleSubmit = async () => {

            const sendUM = { Group:1 }
            const data = await fetch("/api/V3/List/HomepageBannersList", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    setRetdata(parsed.ReqD.Banners)
                    if (parsed.ReqD.Banners.length > 2) {
                        setIsLoading(false)
                    }
                   
                })
        }
        handleSubmit()


    }, [router.query])


    return (<>
        {!isLoading &&
            <div>
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

                   
                    {Retdata.map((item,index) => {
                        return <SwiperSlide key={index} className={Mstyles.SwiperImgae}>
                            <Link href={`/${item.url}`} >
                                <img src={`${MediaFilesUrl}${MediaFilesFolder}/${item.image}`} />
                            </Link>
                           
                        </SwiperSlide>

                    }

                    )}


                </Swiper>

            </div>

        }



        {isLoading &&
            <div>
               
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
                        <Skeleton variant="rounded" width={'100%'} height={230} />
                    </SwiperSlide>
                    <SwiperSlide className={Mstyles.SwiperImgae}>
                        <Skeleton variant="rounded" width={'100%'} height={230} />
                    </SwiperSlide>
                    <SwiperSlide className={Mstyles.SwiperImgae}>
                        <Skeleton variant="rounded" width={'100%'} height={230} />
                    </SwiperSlide>
                    <SwiperSlide className={Mstyles.SwiperImgae}>
                        <Skeleton variant="rounded" width={'100%'} height={230} />
                    </SwiperSlide>

                  


                </Swiper>
           </div>
        }

    </>
    );
}

export default RecentOrders;
