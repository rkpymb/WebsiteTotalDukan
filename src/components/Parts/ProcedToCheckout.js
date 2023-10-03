import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Mstyles from '../../../Styles/home.module.css'

import { LuShoppingBag, LuSearch, LuHome, LuLayoutList, LuPercent } from "react-icons/lu";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../../../Data/config'



const FooterMobile = (props) => {
    const Contextdata = useContext(CheckloginContext)

 

    return (
        <>
            {Contextdata.ItemsinCart > 0 &&
                <div className={Mstyles.FooterMobileBoxCheckout}>
                    <div className={Mstyles.QuickCheckoutBox}>
                        <div className={Mstyles.QuickCheckoutBoxA}>
                            

                            {Contextdata.ItemsinCart > 1 && 
                            <span>{Contextdata.ItemsinCart} Items</span>
                            }
                            {Contextdata.ItemsinCart == 1 &&
                                <span>{Contextdata.ItemsinCart} Item</span>
                            }
                            <small> in your bag</small>
                        </div>
                        <Link href='/bag' className={Mstyles.QuickCheckoutBoxB}>
                            <Button variant="contained" endIcon={<SendIcon />}>
                                Checkout
                            </Button>
                        </Link>

                    </div>
                </div>
            }
           

        </>
    )
}

export default FooterMobile