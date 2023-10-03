import React, { useState, useEffect, useContext } from 'react';
import { Card } from '@mui/material';
import CatTable from './Extra/CatTable';
import { subDays } from 'date-fns';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Label from 'src/components/Label';
import Image from 'next/image';
import EditTSmodal from '../Edit/EditTSmodal'
import DeleteCatModal from '../Edit/DeleteCatModal'
import Mstyles from '../../../Styles/home.module.css'
import { DO_SPACES_URL, DO_SPACES_FOLDER } from '../../../Data/config'
import Button from '@mui/material/Button';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import { LuTruck, LuArrowLeft } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";
import Badge from '@mui/material/Badge';

import {

    styled,

    IconButton,

    useTheme,

} from '@mui/material';

function RecentOrders() {

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()


    useEffect(() => {
        // check login
        try {
            if (localStorage.getItem('Token')) {
                setIsLoading(true)
                const JwtToken = localStorage.getItem('Token');
                const sendUser = { JwtToken }
                const data = fetch("/api/V3/Users/myorders", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUser)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        setRetdata(parsedUser.ReqData.ordersList)
                        setIsLoading(false)
                        console.log(parsedUser.ReqData.ordersList)

                    })
            } else {
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error)

        }


    }, [router.query]);
    const theme = useTheme();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (

        <>
            {!isLoading &&
                <div>
                    {Retdata.map((item, index) => {
                        return <div className={Mstyles.OrderItemList} key={item._id}>
                            <div className={Mstyles.OrderItemListA}>
                                <div>
                                    <span style={{ fontSize: '8px', fontWeight: 600 }}>ORDER ID : {item._id}</span>
                                </div>
                                <div>
                                    <span style={{ fontWeight: 600 }}>{item.OrderTitle.slice(0, 100) + '...'}</span>
                                </div>
                                <div style={{ minHeight: '10px' }}></div>
                                <div>
                                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#605957' }}>
                                        ₹{item.TotalItemAmt} <small style={{ fontSize: '10px' }}>+ {item.Deliveryfee} (Delivery fee)</small>
                                    </span>


                                </div>
                                <div>
                                    <span style={{ fontSize: '10px', fontWeight: 600 }}>Order date : {item.date},{item.time}</span>
                                </div>
                                <div style={{ minHeight: '10px' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Chip icon={<LuTruck size={20} />} label={item.OrderStatusText} variant="outlined" />
                                    <div style={{ width: '10px' }}></div>
                                    <Chip icon={<BsCurrencyRupee size={20} />} label={item.PaymentType} variant="outlined" />



                                </div>
                                <div style={{ minHeight: '10px' }}></div>
                                <div>
                                    <div className={Mstyles.DeliveryTime}>
                                        {item.ExpectedDelivery}
                                    </div>
                                </div>
                                <div style={{ minHeight: '10px' }}></div>
                                <div className={Mstyles.TrackBtnOrd}>
                                    {item.OrderStatus == 3 &&
                                        <Link href={`OrderStatus/${item._id}`}>
                                            <Button variant="outlined" size='small' fullWidth startIcon={<FiArrowRight />}>
                                                view details
                                            </Button>
                                        </Link>
                                    
                                    } 
                                    {item.OrderStatus !== 3 &&
                                         <Link href={`OrderStatus/${item._id}`}>
                                            <Button variant="outlined" size='small' fullWidth startIcon={<FiArrowRight />}>
                                                Track order
                                            </Button>
                                        </Link>
                                        
                                    
                                    } 
                                </div>

                            </div>

                        </div>
                    }

                    )}

                </div>

            }

        </>
    );
}

export default RecentOrders;
