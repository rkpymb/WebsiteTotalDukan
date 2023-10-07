import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router'
import Link from 'next/link';

import Image from 'next/image';

import Mstyles from '../../../Styles/home.module.css';
import { MediaFilesUrl, MediaFilesFolder } from '../../../Data/config'

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
            <div className={Mstyles.SubCatGrid}>

                {Retdata.map((item) => {
                    return <Link href={`/Category/Item/${item.slug}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <div className={Mstyles.SubCatGridItem}>
                            <div className={Mstyles.SubCatGridItemA}>
                                <Image 
                                    src={`${MediaFilesUrl}${MediaFilesFolder}/${item.image}`}
                                    alt="image"
                                    layout="responsive"
                                    placeholder='blur'
                                    width={45}
                                    height={45}
                                    quality={100}
                                    blurDataURL={blurredImageData}

                                />
                                
                            </div>
                            <div div className={Mstyles.SubCatListItemBoxText}>
                                <span>{item.name.slice(0, 25)}</span>
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
