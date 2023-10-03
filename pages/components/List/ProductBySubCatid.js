import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router'
import Link from 'next/link';

import Image from 'next/image';
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Mstyles from '../../../Styles/home.module.css';
import { DO_SPACES_URL, DO_SPACES_FOLDER } from '../../../Data/config'
import ProductGridlistLoader from '/src/components/Parts/ProductGridlistLoader'
import Skeleton from '@mui/material/Skeleton';
import { LuFilter, LuLayoutList, LuIndianRupee } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { LuMinus, LuPlus } from "react-icons/lu";
import {
    Button,
    useTheme,
    IconButton,
   
} from '@mui/material';

function RecentOrders(props) {
    const Contextdata = useContext(CheckloginContext)
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [FilterText, setFilterText] = useState('All');
    const router = useRouter()
    useEffect(() => {

        const handleSubmit = async () => {

            const sendUM = { subcatid: props.subcatid }
            const data = await fetch("/api/V3/List/ProductBySubCatid", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    console.log(parsed.ReqD)
                    setRetdata(parsed.ReqD.PS)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [])

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

    const theme = useTheme();

    return (<>
        {!isLoading &&

            <div>

                <div className={Mstyles.MainTitleBox}>
                    <div className={Mstyles.MainTitleBoxA}>
                        <div className={Mstyles.MainTitleBoxAIcon}>
                            <LuLayoutList size={20} />
                        </div>
                        <div className={Mstyles.MainTitleBoxAtext}>
                            {props.subcatid}
                        </div>
                    </div>
                    <div className={Mstyles.MainTitleBoxB}>
                        <div className={Mstyles.OnlyDesktop}>
                            <div style={{ margin: 10 }}>
                                <span>{FilterText}</span>
                            </div>
                        </div>
                        <Button variant="contained" endIcon={<LuFilter />}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Filter
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={sortLowToHigh}>

                                <small>Low to High Price</small>
                            </MenuItem>
                            <MenuItem onClick={sortHighToLow}>
                                <small>High to Low Price</small>
                            </MenuItem>


                        </Menu>
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
