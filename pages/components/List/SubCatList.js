import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router'
import Link from 'next/link';

import Image from 'next/image';

import Mstyles from '../../../Styles/home.module.css';
import { DO_SPACES_URL, DO_SPACES_FOLDER } from '../../../Data/config'

import {
   
    useTheme,
   
} from '@mui/material';

function RecentOrders(props) {
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    useEffect(() => {

        const handleSubmit = async () => {

            const sendUM = { MainCat: props.catid }
            const data = await fetch("/api/V3/List/SubCategoriesList", {
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
                    setRetdata(parsed.ReqD.categories)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])

    const theme = useTheme();

    return (<>
        {!isLoading &&
            <div className={Mstyles.CatGrid}>

                {Retdata.map((item) => {
                    return <Link href={`/Category/Item/${item.slug}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <div className={Mstyles.CatGridItem}>
                            <div className={Mstyles.CatGridItemA}>
                                {/* <Image 
                                    src={`${DO_SPACES_URL}${DO_SPACES_FOLDER}/${item.image}`}
                                    alt="image"
                                    layout="responsive"
                                    placeholder='blur'
                                    width={50}
                                    height={50}
                                    quality={100}
                                    blurDataURL={blurredImageData}

                                /> */}
                                <Image
                                    src={`/groc.png`}
                                    alt="image"
                                    layout="responsive"
                                    placeholder='blur'
                                    width={50}
                                    height={50}
                                    quality={100}
                                    blurDataURL={blurredImageData}

                                />
                            </div>

                            <div div className={Mstyles.OnlyDesktop}>
                                <div div className={Mstyles.CatListItemBoxText}>
                                    <span>{item.name.slice(0, 30) + '...'}</span>
                                </div>
                            </div>
                            <div div className={Mstyles.OnlyMobile}>
                                <div div className={Mstyles.CatListItemBoxText}>
                                    <span>{item.name.slice(0, 20) + '...'}</span>
                                </div>
                            </div>




                        </div>
                    </Link>
                }

                )}
            </div>

        }

    </>
    );
}

export default RecentOrders;
