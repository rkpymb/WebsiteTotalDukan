import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton';
import Mstyles from '../../../Styles/home.module.css';
import { MediaFilesUrl, MediaFilesFolder } from '../../../Data/config'
import CatgridlistLoader from '/src/components/Parts/CatgridlistLoader'

import {

    useTheme,
} from '@mui/material';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

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

            const sendUM = { Group: 2 }
            const data = await fetch("/api/V3/List/CouponCodeList", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    setRetdata(parsed.ReqD.Coupons)
                    if (parsed.ReqD.Coupons.length > 0) {
                        setIsLoading(false)
                    }
                   
                })
        }
        handleSubmit()


    }, [router.query])


    return (<>
        {!isLoading &&
            <div>
                <div style={{ minHeight: '20px' }}></div>
                <div style={{ fontWeight:600}}> <span>Coupons & Discounts</span> </div>
                <div style={{ minHeight: '10px' }}></div>
                <Swiper

                    slidesPerView={1.5}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 3, // Display 2 slides on tablets (768px or more)
                        },
                        992: {
                            spaceBetween: 20,
                            slidesPerView: 3.5, // Display 3 slides on desktop (992px or more)
                        },
                    }}


                >


                    {Retdata.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <div className={Mstyles.CouponCodeBox}>
                                <div className={Mstyles.CouponCodeBoxA}>
                                    <div className={Mstyles.CouponCodeImage}>

                                        <Image
                                            src={`${MediaFilesUrl}${MediaFilesFolder}/${item.Image}`}
                                            alt="image"
                                            layout="responsive"
                                            placeholder='blur'
                                            width={50}
                                            height={50}
                                            quality={100}
                                            blurDataURL={blurredImageData}

                                        />

                                    </div>
                                </div>
                                <div className={Mstyles.CouponCodeBoxB}>
                                    <div className={Mstyles.Details}>
                                        <div style={{fontSize:'12px'}}>
                                            <small>Coupon Code</small>
                                        </div>
                                        <div className={Mstyles.Codetitle}>
                                            <span>{item.CouponCode}</span>
                                        </div>
                                        {/* <div>
                                            <small>{item.Details}</small>
                                        </div> */}
                                        <div className={Mstyles.DiscountTextc}>
                                            {item.Type == 1 &&

                                                <small>Discount upto ₹{item.MaxDiscount}</small>
                                            }
                                            {item.Type == 2 &&

                                                <small>Discount upto {item.MaxDiscount}%</small>
                                            }
                                          
                                            <div>
                                                <small>minimum order value ₹ {item.Minimumordervalue}</small>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            
                        </SwiperSlide>

                    }

                    )}


                </Swiper>
              
                <div style={{ minHeight: '30px' }}></div>
            </div>

        }






    </>
    );
}

export default RecentOrders;
