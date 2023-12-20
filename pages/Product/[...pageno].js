import React, { useState, useEffect, useContext } from 'react';
import {
    Typography,
    Box,
    Card,
    Container,
    Button,
    styled
} from '@mui/material';
import { MediaFilesUrl, MediaFilesFolder } from '../../Data/config'
import ProcedToCheckout from '/src/components/Parts/ProcedToCheckout'

import { LuMinus, LuPlus } from "react-icons/lu";
import BaseLayout from 'src/layouts/BaseLayout';
import Mstyles from '../../Styles/home.module.css'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { LuArrowLeft } from "react-icons/lu";
import CheckloginContext from '../../context/auth/CheckloginContext'
import Link from 'src/components/Link';
import Head from 'next/head';
import Navbarmain from '../../src/components/Parts/Navbarmain'
import { FiShare2 } from "react-icons/fi";
import TrendingProducts from '../components/List/TrendingProducts'
import Slide from '@mui/material/Slide';
import CouponCodeList from '../components/List/CouponCodeList'
import Image from 'next/image'
import { useRouter, useParams } from 'next/router'

import Skeleton from '@mui/material/Skeleton';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export async function getServerSideProps(context) {
    const DataSlug = context.query.pageno[0];
    const KEY = process.env.MYKEY
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: DataSlug, token: KEY })
    };
    const response = await fetch(`${process.env.API_URL}home/ProductData`, requestOptions);
    const Pdata = await response.json();

    return {

        props: { Pdata },
    }

}


const HeaderWrapper = styled(Card)(
    ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const OverviewWrapper = styled(Box)(
    ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function Overview({ Pdata }) {
    const Contextdata = useContext(CheckloginContext)
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    const router = useRouter()
    const [IsLoading, setIsLoading] = useState(true);
    const [ImgLoading, setImgLoading] = useState(true);
    const [ShareImg, setShareImg] = useState(`${MediaFilesUrl}${MediaFilesFolder}/${Pdata.img}`);


    const [Retdata, setRetdata] = useState([]);



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const GetImglist = async () => {

        const sendUM = {
            pid: Pdata._id,
            slug: Pdata.slug,
        }
        const data = await fetch("/api/V3/List/ProductimgList", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed.ReqD.Productimg)

                if (parsed.ReqD.Productimg) {
                    setRetdata(parsed.ReqD.Productimg)
                    setImgLoading(false)
                }

            })
    }


    useEffect(() => {
        GetImglist()
    }, []);




    const shareContent = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Share this with your friends',
                    text: 'Check out this awesome website!',
                    url: window.location.href,
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                alert('Web Share API is not supported in this browser.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <OverviewWrapper>
            <Head>
                <title>{Pdata && Pdata.title} : Toladukan.com</title>
                <meta name="description" content={Pdata && Pdata.details} />
                <meta property="og:image" content={ShareImg} />
            </Head>
            <Navbarmain />

            <div className={Mstyles.ProductBoxMianContainer}>
                <div className={Mstyles.ContainerMain}>
                    <div className={Mstyles.OnlyDesktop}>
                        <div className={Mstyles.MainTitleBoxCart}>
                            <div className={Mstyles.MainTitleBoxCartA}>
                                <div className={Mstyles.MainTitleBoxCartAIcon}>

                                    <IconButton aria-label="cart" onClick={() => router.back()}>
                                        <StyledBadge color="secondary" >
                                            <LuArrowLeft />
                                        </StyledBadge>
                                    </IconButton>
                                </div>
                                <div className={Mstyles.MainTitleBoxCartAtext}>
                                    <span>{Pdata.title}</span>
                                </div>

                            </div>
                            <div className={Mstyles.ClearCartBox}>

                                <Button
                                    onClick={shareContent}
                                    size="small"
                                    variant="outlined"
                                    startIcon={<FiShare2 fontSize="small" />}
                                >
                                    Share
                                </Button>

                            </div>
                        </div>

                    </div>
                    <div className={Mstyles.ProductBox}>
                        <div className={Mstyles.ProductBoxA}>

                            <div className={Mstyles.ProductImageBox}>



                                {!ImgLoading &&
                                    <div>
                                        <Swiper
                                            breakpoints={{
                                                768: {
                                                    slidesPerView: 1, // Display 2 slides on tablets (768px or more)
                                                },
                                                992: {
                                                    slidesPerView: 1, // Display 3 slides on desktop (992px or more)
                                                },
                                            }}
                                            spaceBetween={5}
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

                                            <SwiperSlide className={Mstyles.Productimg}>
                                                <img src={`${MediaFilesUrl}${MediaFilesFolder}/${Pdata.img}`} />

                                            </SwiperSlide>
                                            {Retdata.map((item, index) => {
                                                return <SwiperSlide key={index} className={Mstyles.Productimg}>
                                                    <img src={`${MediaFilesUrl}${MediaFilesFolder}/${item.image}`} />

                                                </SwiperSlide>

                                            }

                                            )}


                                        </Swiper>

                                    </div>

                                }



                                {ImgLoading &&
                                    <div>

                                        <Swiper

                                            breakpoints={{
                                                768: {
                                                    slidesPerView: 1, // Display 2 slides on tablets (768px or more)
                                                },
                                                992: {
                                                    slidesPerView: 1, // Display 3 slides on desktop (992px or more)
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

                            </div>

                        </div>

                        <div className={Mstyles.ProductBoxB}>
                            <div className={Mstyles.ProductBoxBBox}>
                                <div className={Mstyles.LinkStep}>
                                    <span>
                                        <Link href='/' style={{ textDecoration: 'none', color: '#818e94' }}>
                                            <small>Home</small>
                                        </Link>
                                    </span>

                                    <small> {`>`} </small>

                                    <span>
                                        <Link href={`/Category/${Pdata.catid}`} style={{ textDecoration: 'none', color: '#818e94' }}>
                                            <small>{Pdata.catid}</small>
                                        </Link>
                                    </span>

                                    <small> {`>`} </small>

                                    <span>
                                        <Link href={`/Category/Item/${Pdata.subcatid}`} style={{ textDecoration: 'none', color: '#818e94' }}>
                                            <small>{Pdata.subcatid}</small>
                                        </Link>
                                    </span>



                                </div>

                                <div><h2>{Pdata.title}</h2></div>

                                <div>
                                    <span>{Pdata.tagline}</span>
                                </div>
                                <div className={Mstyles.PriceboxProduct}>
                                    <span>₹ {Pdata.sprice}</span>
                                    <small> <del> {Pdata.mprice}</del></small>
                                    <small> ({Pdata.UnitNumber}</small>  <small>{Pdata.UnitText})</small>
                                </div>
                                <div className={Mstyles.ProductDetailsbox}>
                                    <span>{Pdata.details}</span>

                                </div>

                            </div>

                            <div className={Mstyles.OnlyDesktop}>
                                <div style={{ minHeight: '30px' }}></div>
                            </div>
                            <div className={Mstyles.Productpageaddtocartbox}>
                                <div className={Mstyles.ProductpageaddtocartboxA}>
                                    {(Pdata._id in Contextdata.cart) &&
                                        <div className={Mstyles.AddcartbtnGroup2}>

                                            <IconButton size='small' styles={{ color: 'white' }} aria-label="Remove from cart" onClick={() => { Contextdata.removeFromCart(Pdata._id, 1) }} >
                                                <LuMinus />
                                            </IconButton>
                                            <div className={Mstyles.AddcartbtnQty}>
                                                <span>{Contextdata.cart[Pdata._id].qty}</span>
                                            </div>

                                            <IconButton size='small' styles={{ color: 'white' }} aria-label="Add to cart" onClick={(() => { Contextdata.addtoCart(Pdata._id, 1, Pdata.sprice, Pdata.title, Pdata.img, Pdata.UnitNumber, Pdata.UnitText, Pdata.mprice, Pdata) })}  >
                                                <LuPlus />
                                            </IconButton>
                                        </div>


                                    }
                                    {!(Pdata._id in Contextdata.cart) &&
                                        <div className={Mstyles.Addcartbtn2} onClick={(() => { Contextdata.addtoCart(Pdata._id, 1, Pdata.sprice, Pdata.title, Pdata.img, Pdata.UnitNumber, Pdata.UnitText, Pdata.mprice, Pdata) })}>
                                            <span>ADD TO CART</span>
                                        </div>
                                    }
                                </div>
                                <div className={Mstyles.ProductshareMobile}>
                                    <Button
                                        fullWidth
                                        onClick={shareContent}
                                        size="small"
                                        variant="outlined"
                                        startIcon={<FiShare2 fontSize="small" />}
                                    >
                                        Share
                                    </Button>

                                </div>

                            </div>
                            <div className={Mstyles.OnlyDesktop}>
                                <div style={{ minHeight: '30px' }}></div>
                            </div>
                            <CouponCodeList />

                        </div>
                    </div>
                    <div className={Mstyles.OnlyDesktop}>

                        <div style={{ minHeight: '50px' }}></div>
                    </div>

                    <div className={Mstyles.OnlyMobile}>

                        <div style={{ minHeight: '20px' }}></div>
                    </div>

                    <TrendingProducts />
                    <div style={{ minHeight: '150px' }}></div>
                </div>

            </div>


            <ProcedToCheckout />

        </OverviewWrapper>
    );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};
