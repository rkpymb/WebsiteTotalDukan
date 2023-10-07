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

const loadritem = [
    {
        data:1
    },
    {
        data: 1
    },
    {
        data: 1
    },
    {
        data: 1
    },
    {
        data: 1
    },
    {
        data: 1
    },
    {
        data: 1
    },
    {
        data: 1
    },
    {
        data: 1
    },
    {
        data: 1
    }

]

function RecentOrders() {

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    useEffect(() => {

        const handleSubmit = async () => {
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
                    setRetdata(parsed.ReqD.categories)
                    if (parsed.ReqD.categories.length > 0) {
                        setIsLoading(false)
                    }
                    
                })
        }
        handleSubmit()


    }, [router.query])
    
 
    return (<>
        {!isLoading &&
            <div className={Mstyles.CatGrid}>

                {Retdata.map((item) => {
                    return <Link href={`/Category/${item.slug}`} key={item.id} style={{ textDecoration: 'none' }}>
                        
                        <div className={Mstyles.CatGridItem}>
                            <div className={Mstyles.CatGridItemA}>
                                <Image 
                                    src={`${MediaFilesUrl}${MediaFilesFolder}/${item.image}`}
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
                                    <span>{item.name.slice(0, 30) }</span>
                                </div>
                            </div>
                            <div div className={Mstyles.OnlyMobile}>
                                <div div className={Mstyles.CatListItemBoxText}>
                                    <span>{item.name.slice(0, 20)}</span>
                                </div>
                            </div>
                          

                         

                        </div>
                    </Link>
                }

                )}
            </div>

        }

        {isLoading && 
            <div>
                <div className={Mstyles.CatGrid}>

                    {loadritem.map((item) => {
                        return <div className={Mstyles.CatGridItemLoader}>
                            <Skeleton variant="rounded" width={50} height={50} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'50%'} />
                        </div>


                    }

                    )}
                   
                   
                    
                </div>
            </div>
        }

        </>
    );
}

export default RecentOrders;
