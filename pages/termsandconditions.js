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
                <title>Terms & Conditions: Toladukan.com</title>
            </Head>
            <div className={Mstyles.OnlyDesktop}>

                <Navbarmain />
            </div>
            <div className={Mstyles.OnlyMobile}>

                <NavbarmainCart Title={'Terms & Conditions'} />
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
                                        <span>Terms & Conditions</span>
                                    </div>

                                </div>
                               
                            </div>
                        </div>
                    </div>
                  
                    <div>
                        
                       

                        <p>These terms and conditions ("Terms") govern your use of the website Toladukan.com ("Website") and any products or services offered by Toladukan.com ("Company"). By accessing or using the Website or purchasing products or services from us, you agree to be bound by these Terms.</p>

                        <h2>1. Acceptance of Terms</h2>

                        <p>By using this Website or purchasing products/services from us, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with these Terms, please do not use the Website or purchase any products/services from us.</p>

                        <h2>2. Eligibility</h2>

                        <p>You must be at least 18 years of age or have the legal capacity to enter into a binding contract to use this Website or purchase products/services. By using this Website, you warrant that you are of legal age and have the capacity to enter into a contract.</p>

                        <h2>3. Products and Services</h2>

                        <p>a. <strong>Product Descriptions:</strong> The Company makes every effort to accurately display and describe the products and services offered on the Website. However, we do not guarantee that descriptions or prices are error-free.</p>

                        <p>b. <strong>Pricing:</strong> Prices are subject to change without notice. The Company reserves the right to modify or discontinue any product or service at any time.</p>

                        <h2>4. Payment</h2>

                        <p>a. <strong>Payment Methods:</strong> Payment for products and services can be made using the methods specified on the Website.</p>

                        <p>b. <strong>Taxes:</strong> You are responsible for any applicable taxes and fees associated with your purchases.</p>

                        <h2>5. Shipping and Delivery</h2>

                        <p>a. Shipping and delivery details will be provided during the checkout process. The Company is not responsible for any delays or issues caused by third-party carriers.</p>

                        <h2>6. Returns and Refunds</h2>

                        <p>Please refer to our <a href="link-to-return-policy">Return Policy</a> for information regarding returns, exchanges, and refunds.</p>

                        <h2>7. Privacy</h2>

                        <p>Your use of the Website is governed by our <a href="privacypolicy">Privacy Policy</a>, which can be accessed on the Website.</p>

                        <h2>8. Intellectual Property</h2>

                        <p>All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of the Company and is protected by copyright and other intellectual property laws.</p>

                        <h2>9. Limitation of Liability</h2>

                        <p>The Company shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Website or purchase of products/services.</p>

                        <h2>11. Changes to Terms and Website</h2>

                        <p>The Company reserves the right to modify these Terms and the Website at any time without prior notice. It is your responsibility to review these Terms regularly for any updates or changes.</p>

                        <h2>12. Contact Information</h2>

                        <p>If you have any questions or concerns about these Terms, please contact us at hi@toladukan.com</p>

                        <p>By using this Website, you agree to these Terms and Conditions. If you do not agree with any part of these Terms, please do not use the Website or purchase products/services from us.</p>

                        <p>Last Updated:  15/10/2023</p>
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
