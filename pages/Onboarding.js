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
import Lottie from 'react-lottie'
import * as animationData from '../Data/Lottie/animation_lnccj619.json'
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
function Overview(props) {
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    const router = useRouter()
    const [Retdata, setRetdata] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [LoadingBtn, setLoadingBtn] = useState(false);
    const Contextdata = useContext(CheckloginContext)

    const [Name, setName] = useState('');
   
    const [Email, setEmail] = useState('');

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    useEffect(() => {
        if (localStorage.getItem('Token')) {
            setIsLoading(false)
        } else {
            router.push('/')
        }
    

    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Name !== '') {
            setLoadingBtn(true)
            try {
                if (localStorage.getItem('Token')) {
                    const JwtToken = localStorage.getItem('Token');
                    const sendUser = {
                        JwtToken: JwtToken,
                        name: Name,
                        email: Email,
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
                           router.push('/Profile')
                        })
                }
            } catch (error) {
                console.error(error)

            }

        } else {
            setLoadingBtn(false)
            props.notify('Your Name is required for complete registration')
           
        }


    };
    return (
        <OverviewWrapper>
            <Head>
                <title>Onboarding : Toladukan.com</title>
            </Head>
           
            <div className={Mstyles.LoginFull}>
                <div className={Mstyles.LoginBox}>
                    <div className={Mstyles.LoginBoxItem}>
                        
                        {!isLoading &&
                            <div>
                                <div>
                                    <Lottie options={defaultOptions}
                                        height={150}
                                        width={null}

                                        isStopped={false}
                                        isPaused={false} />
                                </div>
                                <div style={{ minHeight: '50px' }}></div>
                               
                                <div className={Mstyles.logomainBox}>
                                    <div style={{ minHeight: '10px' }}></div>
                                    <div>
                                        <h1 style={{ margin: 0 }}>Almost Done 👍</h1>
                                        <div>
                                            <span>Please Complete your Profile</span>
                                        </div>

                                    </div>
                                    
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
                                            <label>Email Address (optional)</label>
                                            <div style={{ minHeight: '8px' }}></div>
                                            <input
                                                required
                                                placeholder="Email"

                                                value={Email}
                                                onInput={e => setEmail(e.target.value)}

                                            />
                                        </div>

                                        <div style={{ minHeight: '20px' }}></div>
                                    


                                    </form>
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
                                    <div style={{ minHeight: '10px' }}></div>
                                </div>

                            </div>
                        }
                    </div>
                  

                </div>
            </div>




          

        </OverviewWrapper>
    );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};
