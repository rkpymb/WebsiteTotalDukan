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
        if (Contextdata.IsLogin == true) {
            setIsLoading(false)
        } else {
            router.push('/Login')
        }


    });
    return (
        <OverviewWrapper>
            <Head>
                <title>Privacy Policy: Toladukan.com</title>
            </Head>
            <div className={Mstyles.OnlyDesktop}>

                <Navbarmain />
            </div>
            <div className={Mstyles.OnlyMobile}>

                <NavbarmainCart Title={'Privacy Policy'} />
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
                                        <span>Privacy Policy</span>
                                    </div>

                                </div>
                               
                            </div>
                        </div>
                    </div>
                  
                    <div>
                        
                       

                        <p>Effective Date: 15/10/2023</p>

                        <p>This privacy policy applies to the website toladukan.com (the "Website") operated by toladukan.com ("we," "us," or "our"). We are committed to protecting your privacy and your personal information. This policy describes how we collect, use, and disclose your personal information when you use our Website. By accessing or using our Website, you consent to the practices described in this privacy policy.</p>

                        <h2>1. Information We Collect</h2>

                        <p>We may collect various types of information when you visit our Website, including:</p>

                        <ul>
                            <li><strong>Personal Information:</strong> This may include your name, email address, postal address, and other information you provide when contacting us or making a purchase.</li>
                            <li><strong>Usage Information:</strong> We may collect information about your interactions with our Website, such as your IP address, browser type, and pages visited.</li>
                            <li><strong>Cookies:</strong> We use cookies and similar technologies to collect data about your usage of our Website.</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>

                        <p>We may use the information we collect for various purposes, including:</p>

                        <ul>
                            <li>Providing, maintaining, and improving our Website and services.</li>
                            <li>Responding to your inquiries and providing customer support.</li>
                            <li>Sending you marketing and promotional communications if you've opted in to receive them.</li>
                            <li>Complying with legal obligations and protecting our rights.</li>
                        </ul>

                        <h2>3. How We Share Your Information</h2>

                        <p>We may share your information with third parties under the following circumstances:</p>

                        <ul>
                            <li>With service providers who assist us in operating our Website and providing our services.</li>
                            <li>With your consent or at your direction.</li>
                            <li>In response to a legal request or when required to comply with applicable laws or regulations.</li>
                        </ul>

                        <h2>4. Your Choices</h2>

                        <p>You may have choices about the information you provide to us and how it's used:</p>

                        <ul>
                            <li>You can update or delete your personal information by contacting us.</li>
                            <li>You can opt out of receiving marketing communications from us.</li>
                        </ul>

                        <h2>5. Security</h2>

                        <p>We take reasonable measures to protect your personal information, but no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.</p>

                        <h2>6. Changes to this Privacy Policy</h2>

                        <p>We may update this privacy policy from time to time. We'll notify you of any significant changes by posting the new policy on our Website.</p>

                        <h2>7. Contact Information</h2>

                        <p>If you have any questions or concerns about this privacy policy, please contact us at hi@toladukan.com</p>

                      
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
