import { useState, useEffect, useContext } from 'react';
import {
    Typography,
    Box,
    Card,
    Container,
    Button,
    styled
} from '@mui/material';
import Link from 'next/link'
import { LuShoppingBag, LuSearch, LuChevronRight, LuArrowLeft } from "react-icons/lu";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Footer from '../src/components/Parts/Footer'
import ProcedToCheckout from 'src/components/Parts/ProcedToCheckout'
import FooterMobile from '/src/components/Parts/FooterMobile'
import BaseLayout from 'src/layouts/BaseLayout';
import Mstyles from '../Styles/home.module.css'
import CheckloginContext from '../context/auth/CheckloginContext'
import Head from 'next/head';
import Navbarmain from '../src/components/Parts/Navbarmain'
import { useRouter, useParams } from 'next/router'
import { FiEdit, FiChevronRight, FiLogOut, FiShoppingCart, FiShoppingBag, FiList, FiMapPin } from 'react-icons/fi';
import NavbarmainCart from '../src/components/Parts/NavbarmainCart'
import MyOrdersList from './components/List/MyOrdersList'
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
const OverviewWrapper = styled(Box)(
    ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function Overview() {
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true);
    const Contextdata = useContext(CheckloginContext)

  
    useEffect(() => {
        if (Contextdata.IsLogin == true) {
            setIsLoading(false)
        } else {
            router.push('/Login')
        }

    });

  
    return (
        <OverviewWrapper>
            <Head>
                <title>My Orders : Toladukan.com</title>
            </Head>

            <div className={Mstyles.OnlyDesktop}>

                <Navbarmain />
            </div>
            <div className={Mstyles.OnlyMobile}>

                <NavbarmainCart Title={'My Orders'} />
            </div>
            <div className={Mstyles.ContainerMainBoxFull}>

                {!isLoading &&
                    <div className={Mstyles.container50}>

                        <div className={Mstyles.DesktopHeaderProfile}>
                            <div className={Mstyles.OnlyDesktop}>
                                <div className={Mstyles.MainTitleBoxCart}>
                                    <div className={Mstyles.MainTitleBoxCartA}>
                                        <div className={Mstyles.MainTitleBoxCartAIcon}>

                                            <IconButton aria-label="cart" onClick={() => router.back()}>
                                                <StyledBadge color="secondary" >
                                                    <LuArrowLeft />
                                                </StyledBadge>
                                            </IconButton>
                                        </div>
                                        <div>
                                            <span>My Orders</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={Mstyles.OrderListBox}>
                            <MyOrdersList/>
                           
                        </div>

                    </div>
                }
            </div>





            <div style={{ minHeight: '150px' }}></div>
            <div className={Mstyles.OnlyDesktop}>
                <Footer />
            </div>
            <ProcedToCheckout />
            <div className={Mstyles.OnlyMobile}>
                <FooterMobile />
            </div>

        </OverviewWrapper>
    );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};
