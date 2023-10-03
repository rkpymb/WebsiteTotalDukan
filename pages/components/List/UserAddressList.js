import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

import Mstyles from '../../../Styles/home.module.css'
import { DO_SPACES_URL, DO_SPACES_FOLDER } from '../../../Data/config'
import Button from '@mui/material/Button';
import { FiMapPin, FiChevronRight } from "react-icons/fi";

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
                const data = fetch("/api/V3/Users/UserAddressList", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUser)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        setRetdata(parsedUser.ReqData.AddList)
                        setIsLoading(false)
                       

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
                    {Retdata.map((address) => (
                        <div
                            key={address._id.$oid}
                            className={Mstyles.AddressNotSelect}
                            
                        >
                            <div className={Mstyles.AddressHeder}>
                                <div className={Mstyles.AddressHederA}>
                                    <div className={Mstyles.AddressHederADatabox}>
                                        <div className={Mstyles.AddressHederADataboxA}>
                                            <FiMapPin size={18} />
                                        </div>
                                        <div className={Mstyles.AddressHederADataboxB}>
                                            <div className={Mstyles.AddressHederADataboxBName}>
                                                {address.AdreessData.Name}
                                            </div>
                                            <div className={Mstyles.AddressHederADataboxBData}>
                                                <span>{address.AdreessData.Email}</span>
                                            </div>
                                            <div className={Mstyles.AddressHederADataboxBData}>
                                                <span>{address.AdreessData.Mobile}</span>
                                            </div>
                                            <div className={Mstyles.AddressHederADataboxBData}>
                                                <span>{address.AdreessData.Address}, {address.AdreessData.City},{address.AdreessData.State},{address.AdreessData.PinCode} , Landmark : {address.AdreessData.Landmark}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={Mstyles.AddressHederB}>
                                    {/* <Button
                                        onClick={() => handleAddressSelect(address)}
                                        size="small"
                                        variant="outlined"
                                        color='success'
                                        fullWidth
                                        endIcon={<FiChevronRight />}

                                    >
                                        Deliver here
                                    </Button> */}

                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            }

        </>
    );
}

export default RecentOrders;
