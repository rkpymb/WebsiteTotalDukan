import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router'
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Link from 'next/link';

import Image from 'next/image';
import { FiChevronRight } from "react-icons/fi";
import Mstyles from '../../../Styles/home.module.css';
import { MediaFilesUrl, MediaFilesFolder } from '../../../Data/config'
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

    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()

    const [productData, setProductData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    const [Datalist, setDatalist] = useState([])
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';



    const GetAllData = async () => {
        const dataid = '08c5th4rh86ht57h6g';
        const sendUM = { dataid }
        const data = await fetch("/api/V3/List/CatlistWithproduct", {
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
                setDatalist(parsed.ReqD)
                setIsLoading(false)
            })
    }


    useEffect(() => {
        GetAllData()
    }, [router.query]);



    const theme = useTheme();




    return (<>
        {!isLoading &&

            <div>
                {Datalist.map((categoryProduct) => (
                    <div key={categoryProduct.category._id}>
                        <div style={{ minHeight: '25px' }}></div>
                        <div className={Mstyles.MainTitleBox}>
                            <div className={Mstyles.MainTitleBoxA}>
                                <div className={Mstyles.smallcatimg}>
                                    <Image
                                        src={`${MediaFilesUrl}${MediaFilesFolder}/${categoryProduct.category.image}`}
                                        alt="image"
                                        layout="responsive"
                                        placeholder='blur'
                                        width={50}
                                        height={50}
                                        quality={100}
                                        blurDataURL={blurredImageData}

                                    />
                                </div>
                                <div className={Mstyles.MainTitleBoxAtext}>
                                    {categoryProduct.category.name}
                                </div>
                            </div>
                            <div className={Mstyles.MainTitleBoxB}>

                                <Link href={`/Category/${categoryProduct.category.slug}`}>
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
                            {categoryProduct.products.map((item,index) => (
                                <div className={Mstyles.ProductGridItem}>
                                    <Link href={`/Product/${item.slug}`} key={index} style={{ textDecoration: 'none' }}>
                                        <div className={Mstyles.ProductItemImage}>
                                            <Image
                                                src={`${MediaFilesUrl}${MediaFilesFolder}/${item.img}`}
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
                            ))}
                        </div>

                    </div>
                ))}
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
