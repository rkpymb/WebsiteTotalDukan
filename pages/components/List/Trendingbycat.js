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

     const [productData, setProductData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    const [CategoryList, setCategoryList] = useState([])
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';


    
    const GetAllCat = async () => {
        const dataid = '08c5th4rh86ht57h6g';
        const sendUM = { dataid }
        const data = await fetch("/api/V3/List/CatList", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed.ReqD.categories)
                setCategoryList(parsed.ReqD.categories)
                // setIsLoading(false)
            })
    }

    useEffect(() => {
        GetAllCat()

    }, [router.query]);


    useEffect(() => {
        async function fetchData() {

            try {
                const categoryToFetch = CategoryList[startIndex];



                if (categoryToFetch) {

                    const sendUM = { catid: categoryToFetch.slug }
                    const data = await fetch("/api/V3/List/Productsbycatid", {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(sendUM)
                    }).then((a) => {
                        return a.json();
                    })
                        .then((parsed) => {
                            console.log(parsed.ReqD.PS)
                            const RD = parsed.ReqD.PS
                            const categoryExists = productData.some((data) => data.category === categoryToFetch.title);

                            if (!categoryExists) {
                                setProductData((prevData) => [
                                    ...prevData,
                                    { category: categoryToFetch, products: RD },
                                ]);
                                setIsLoading(false)
                            }

                            setStartIndex(startIndex + 1);

                        })


                }
            } catch (error) {
                console.error(error);
            }

        }

        fetchData();

        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
                startIndex < CategoryList.length
            ) {
                fetchData();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [startIndex, CategoryList]);

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

                {!isLoading &&

                    <div>
                        {productData.map((categoryData, index) => (
                            <div key={index}>
                                <div>
                                    {categoryData.products.length > 0 &&
                                        <div>
                                            <div style={{ minHeight: '20px' }}></div>
                                            <div className={Mstyles.MainTitleBox}>
                                                <div className={Mstyles.MainTitleBoxA}>
                                                    <div className={Mstyles.MainTitleBoxAIcon}>
                                                        <Image
                                                            src={`${DO_SPACES_URL}${DO_SPACES_FOLDER}/${categoryData.category.image}`}
                                                            alt="image"
                                                           
                                                            placeholder='blur'
                                                            width={30}
                                                            height={30}
                                                            quality={100}
                                                            blurDataURL={blurredImageData}

                                                        />
                                                    </div>
                                                    <div className={Mstyles.MainTitleBoxAtext}>
                                                        {categoryData.category.name}
                                                    </div>
                                                </div>
                                                <div className={Mstyles.MainTitleBoxB}>
                                                    <Link href={`/Category/${categoryData.category.slug}`}>
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

                                                {categoryData.products.map((item, index) => {
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

                                </div>

                            </div>
                        ))}
                    </div>
                }
        
              
               
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
