import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router'
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Link from 'next/link';

import Image from 'next/image';
import { FiChevronRight } from "react-icons/fi";
import Mstyles from '../../../Styles/home.module.css';
import { DO_SPACES_URL, DO_SPACES_FOLDER } from '../../../Data/config'
import ProductGridlistLoader from '/src/components/Parts/ProductGridlistLoader'
import { LuFilter, LuLayoutList, LuIndianRupee } from "react-icons/lu";
import { FiBarChart, FiBarChart2 } from "react-icons/fi";
import Skeleton from '@mui/material/Skeleton';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {

    IconButton,
   
    useTheme,
    Button
} from '@mui/material';
import { LuMinus, LuPlus } from "react-icons/lu";
function RecentOrders() {
    const Contextdata = useContext(CheckloginContext)
    const [Retdata, setRetdata] = useState([]);
    const [FilterText, setFilterText] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/V3/List/ProductsList", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    // console.log(parsed.ReqD.PS)
                    setRetdata(parsed.ReqD.PS)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])

    const theme = useTheme();


    //   filter product
    // Function to sort products by price from low to high
    const sortLowToHigh = () => {
        const sortedProducts = [...Retdata].sort((a, b) => a.mprice - b.mprice);
        setRetdata(sortedProducts);
        setAnchorEl(null);
        setFilterText('Low to High Price')
    };

    // Function to sort products by price from high to low
    const sortHighToLow = () => {
        const sortedProducts = [...Retdata].sort((a, b) => b.mprice - a.mprice);
        setRetdata(sortedProducts);
        setAnchorEl(null);
        setFilterText('High to Low Price')
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
        {!isLoading &&
        
            <div>
        
                <div className={Mstyles.MainTitleBox}>
                    <div className={Mstyles.MainTitleBoxA}>
                        <div className={Mstyles.MainTitleBoxAIcon}>
                            <LuLayoutList size={20} />
                        </div>
                        <div className={Mstyles.MainTitleBoxAtext}>
                            Today's Bestsallers
                        </div>
                    </div>
                    <div className={Mstyles.MainTitleBoxB}>
                       
                        <Link href={`/Bestsallers`}>
                            <Button variant="outlined" endIcon={<FiChevronRight />}

                                size='small'
                            >
                                see all
                            </Button>
                        </Link>

                    </div>


                </div>
                <div style={{ minHeight: '20px' }}></div>
                <div className={Mstyles.ProductGrid}>

                    {Retdata.map((item, index) => {
                        return <div className={Mstyles.ProductGridItem}>
                            <Link href={`/Category/${item.slug}`} key={item.id} style={{ textDecoration: 'none' }}>
                                <div className={Mstyles.ProductItemImage}>
                                    <Image
                                        src={`${DO_SPACES_URL}${DO_SPACES_FOLDER}/${item.img}`}
                                        alt="image"
                                        layout="responsive"
                                        placeholder='blur'
                                        width={50}
                                        height={50}
                                        quality={100}
                                        blurDataURL={blurredImageData}

                                    />
                                </div>
                            </Link>

                            <div className={Mstyles.ProductItemTitle}>
                                <span>{item.title.slice(0, 35) + '...'}</span>
                            </div>
                            <div className={Mstyles.ProductItemPrice}>
                                <span>₹{item.sprice}</span> <del>{item.mprice}</del>
                            </div>
                            <div style={{ minHeight: '10px' }}></div>
                            <div className={Mstyles.ProductItemFooter}>
                                <div style={{ minHeight: '10px' }}></div>
                                <div className={Mstyles.ProductItemFooterA}>
                                    <span>{item.UnitNumber}/{item.UnitText}</span>
                                </div>
                                <div style={{ minHeight: '10px' }}></div>
                                <div className={Mstyles.ProductItemFooterB}>
                                    {(item._id in Contextdata.cart) &&


                                        <div className={Mstyles.AddcartbtnGroup}>

                                            <IconButton size='small' styles={{ color: 'white' }} aria-label="Remove from cart" onClick={() => { Contextdata.removeFromCart(item._id, 1) }} >
                                                <LuMinus />
                                            </IconButton>
                                            <div className={Mstyles.AddcartbtnQty}>
                                                <span>{Contextdata.cart[item._id].qty}</span>
                                            </div>

                                            <IconButton size='small' styles={{ color: 'white' }} aria-label="Add to cart" onClick={(() => { Contextdata.addtoCart(item._id, 1, item.sprice, item.title, item.img, item.UnitNumber, item.UnitText, item.mprice, item) })}  >
                                                <LuPlus />
                                            </IconButton>
                                        </div>


                                    }
                                    {!(item._id in Contextdata.cart) &&
                                        <div className={Mstyles.Addcartbtn} onClick={(() => { Contextdata.addtoCart(item._id, 1, item.sprice, item.title, item.img, item.UnitNumber, item.UnitText, item.mprice, item) })}>
                                            <span>ADD</span>
                                        </div>
                                    }
                                </div>
                                <div style={{ minHeight: '10px' }}></div>
                            </div>
                        </div>
                    }

                    )}
                </div>
           </div>

        }

        {isLoading &&
            <div >

                <ProductGridlistLoader />
            </div>

        }

    </>
    );
}

export default RecentOrders;
