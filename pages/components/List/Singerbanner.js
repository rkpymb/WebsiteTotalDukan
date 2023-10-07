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
            const data = await fetch("/api/V3/List/Singerbanner", {
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
                    if (parsed.ReqD.Banners.length == 1) {
                        setIsLoading(false)
                    }
                    
                })
        }
        handleSubmit()


    }, [router.query])
    
 
    return (<>
        {!isLoading &&
            <div>
                {Retdata.map((item) => {
                    return <Link href={`/${item.url}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <div className={Mstyles.SinglePoster}>
                            <img
                                src={`${MediaFilesUrl}${MediaFilesFolder}/${item.image}`}
                                alt="image"
                                width={'100%'}
                            />
                        </div>
                    </Link>
                }

                )}
            </div>

        }

        {isLoading && 
            <div>
                <Skeleton variant="rounded" width={'100%'} height={250} />
            </div>
        }

        </>
    );
}

export default RecentOrders;
