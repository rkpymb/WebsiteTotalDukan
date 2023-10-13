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
import { LuShoppingBag, LuSearch, LuBell, LuArrowLeft } from "react-icons/lu";
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
    const [Retdata, setRetdata] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const Contextdata = useContext(CheckloginContext)
    useEffect(() => {
        setIsLoading(false)

    });
    return (
        <OverviewWrapper>
            <Head>
                <title>About us: Toladukan.com</title>
            </Head>
            <div className={Mstyles.OnlyDesktop}>

                <Navbarmain />
            </div>
            <div className={Mstyles.OnlyMobile}>

                <NavbarmainCart Title={'About us'} />
            </div>
            <div className={Mstyles.ContainerMainBoxFull}>
                <div className={Mstyles.container50}>
                    
                    <div className={Mstyles.ContentPageHead}>
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
                                        <span>About us</span>
                                    </div>

                                </div>
                               
                            </div>
                        </div>
                    </div>
                  
                    <div>
                        <p>
                            Welcome to Toladukan.com, your ultimate online shopping destination! We're thrilled to have you here and would like to share our story with you.
                        </p>
                        <div>
                            <div style={{ fontWeight: 600 }}>Our Vision</div>
                            <p>
                                At Toladukan.com, we believe in making your shopping experience enjoyable and hassle-free. Our vision is to provide you with a one-stop platform that offers an extensive range of products, top-notch customer service, and a seamless shopping experience that you'll love.
                            </p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Who We Are</div>
                            <p>
                                We are a team of passionate individuals who are dedicated to redefining the way you shop online. Our diverse team includes tech-savvy experts, creative minds, and customer-focused professionals. We come together to curate a marketplace that caters to your every need, from the latest trends in fashion to cutting-edge gadgets and everything in between.
                            </p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Why Choose Toladukan.com</div>
                            <p>
                                We understand that online shopping should be more than just a transaction. It should be a memorable experience that leaves you satisfied and coming back for more. Here's why you should choose Toladukan.com:
                            </p>
                            <li> Quality Assurance: We carefully curate our products to ensure quality and authenticity.</li>

                            <li> Secure Shopping: Your data and transactions are safe with us. We use the latest security measures to protect your information.</li>

                            <li>Customer-Centric: Our dedicated customer support team is always ready to assist you with any queries or concerns.
</li>
                            <li>
                                Fast Delivery: We aim to get your purchases to your doorstep as quickly as possible, so you can enjoy them sooner.
                           </li>

                            <li> Easy Returns: If for any reason you're not satisfied with your purchase, our return process is simple and hassle-free.</li>

                            <div>
                                <p>Thank you for choosing Toladukan.com. Join us on this exciting journey of online shopping, and we look forward to being your preferred e-commerce destination.</p>

                                Happy Shopping 😊

                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>



            <div style={{ minHeight: '150px' }}></div>
            <div className={Mstyles.OnlyDesktop}>
                <Footer />
            </div>
          
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
