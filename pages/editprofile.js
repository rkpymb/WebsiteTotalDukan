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
import NavbarmainCart from '../src/components/Parts/NavbarmainCart'
import { useRouter, useParams } from 'next/router'
import { FiEdit, FiChevronRight, FiLogOut, FiShoppingCart, FiShoppingBag, FiList, FiMapPin } from 'react-icons/fi';


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
    const [Retdata, setRetdata] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [LoadingBtn, setLoadingBtn] = useState(false);
    const Contextdata = useContext(CheckloginContext)

    const [Name, setName] = useState(Contextdata.Data.name);
    const [Mobile, setMobile] = useState(Contextdata.Data.mobile);
    const [Email, setEmail] = useState(Contextdata.Data.email);

    useEffect(() => {
        if (Contextdata.IsLogin == true) {
            setIsLoading(false)
        } else {
            router.push('/Login')
        }


    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Name !== '' && Email !== '' && Mobile) {
            setLoadingBtn(true)
            try {
                if (localStorage.getItem('Token')) {
                    const JwtToken = localStorage.getItem('Token');
                    const sendUser = {
                        JwtToken: JwtToken,
                        name: Name,
                        email: Email,
                        id: Contextdata.Data._id,
                    }
                    const data = fetch("/api/V3/Users/UpdateProfile", {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(sendUser)
                    }).then((a) => {
                        return a.json();
                    })
                        .then((parsedUser) => {
                            setLoadingBtn(false)
                           router.push('/Profile')

                        })
                }
            } catch (error) {
                console.error(error)

            }

        } else {
            setLoadingBtn(false)
            alert('All fields are required')
        }


    };
    return (
        <OverviewWrapper>
            <Head>
                <title>Edit Profile : Toladukan.com</title>
            </Head>
        

            <div className={Mstyles.OnlyDesktop}>

                <Navbarmain />
            </div>
            <div className={Mstyles.OnlyMobile}>

                <NavbarmainCart Title={'Edit Profile'} />
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
                                            <span>Edit Profile</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={Mstyles.ProfileMainBox}>
                            <form onSubmit={handleSubmit}>
                                <div className={Mstyles.InputBoxData}>
                                    <label>Full Name</label>
                                    <div style={{ minHeight: '8px' }}></div>
                                    <input
                                        required
                                        placeholder="Name"
                                        value={Name}
                                        onInput={e => setName(e.target.value)}

                                    />
                                </div>
                                <div className={Mstyles.InputBoxData}>
                                    <label>Mobile Number</label>
                                    <div style={{ minHeight: '8px' }}></div>
                                    <input
                                        required
                                        placeholder="Mobile"
                                        value={Mobile}

                                    />
                                </div>
                                <div className={Mstyles.InputBoxData}>
                                    <label>Email Address</label>
                                    <div style={{ minHeight: '8px' }}></div>
                                    <input
                                        required
                                        placeholder="Email"

                                        value={Email}
                                        onInput={e => setEmail(e.target.value)}

                                    />
                                </div>

                                <div style={{ minHeight: '20px' }}></div>



                                <LoadingButton
                                    fullWidth
                                    onClick={handleSubmit}
                                    endIcon={<FiChevronRight />}
                                    loading={LoadingBtn}
                                    loadingPosition="end"
                                    variant="contained"
                                >
                                    <span>Save Profile</span>
                                </LoadingButton>


                            </form>
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
