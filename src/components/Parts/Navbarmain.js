import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Mstyles from '../../../Styles/home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import Lottie from 'react-lottie'
import * as animationData from '../../../Data/Lottie/animation_lnfa1lxooffers.json'
import { LuShoppingBag, LuSearch, LuChevronRight } from "react-icons/lu";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../../../Data/config'
import { useRouter, useParams } from 'next/router'
import SearchModal from './SearchModal'

const Navbarmain = (props) => {
    const Contextdata = useContext(CheckloginContext)
    const router = useRouter()

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <>
            <div className={Mstyles.navbarBox}>
                <div className={Mstyles.Navbar}>
                    <div className={Mstyles.NavA}>
                        <div className={Mstyles.logo}>
                            <Link href='/'>
                                <div className={Mstyles.logomain}>
                                    <img src='/tolodukanLogoWeb.svg' alt='logo' className={Mstyles.NavLogo} />
                                </div>
                            </Link>
                        </div>

                        <div className={Mstyles.OnlyDesktop}>
                            <Link href='/Search'>
                                <div className={Mstyles.SearchTopBox}>
                                    <div className={Mstyles.SearchTopBoxA}>
                                        <LuSearch size={20} />
                                    </div>
                                    <div className={Mstyles.SearchTopBoxB}>
                                        <span>Search for Products ...</span>
                                    </div>
                                </div>
                            </Link>

                        </div>



                    </div>
                    <div className={Mstyles.NavLeft}>
                        <div className={Mstyles.OnlyDesktop}>
                            <Link href='/Offers'>
                                <div className={Mstyles.OfferTabTop}>
                                    <div>
                                        <Lottie options={defaultOptions2}
                                            width={30}
                                            height={30}
                                            isStopped={false}
                                            isPaused={false} />
                                    </div>
                                    <div className={Mstyles.OfferTabTopB}>
                                        <span>Best Offers</span>
                                    </div>

                                </div>

                            </Link>
                        </div>
                        <div style={{ minWidth: '20px' }}></div>
                        <div className={Mstyles.OnlyDesktop}>
                            <Link href='/bag' className={Mstyles.CartIconBox}>

                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={Contextdata.ItemsinCart} color="secondary">
                                        <LuShoppingBag />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                        </div>

                        <div className={Mstyles.loginbtnTopBtns}>
                            {!Contextdata.IsLogin && (
                                <Link href='/Login' style={{ textDecoration: 'none' }}>
                                    <div className={Mstyles.loginbtnTop}>
                                        <span><AiOutlineLogin /></span>
                                        <small>Login</small>
                                    </div>
                                </Link>

                            )}
                            {Contextdata.IsLogin && (
                                <Link href='/Profile' >
                                    <div className={Mstyles.UserAvaTarBox}>
                                        <div >
                                            <Avatar src="/userdp.png" />
                                        </div>
                                        <div className={Mstyles.OnlyDesktop}>
                                            <div className={Mstyles.UserAvaTarBoxCircleTextBox}>
                                                <span>{Contextdata.Data.name}</span>
                                                <div className={Mstyles.ViewPbtn}>
                                                    <small>View Profile</small> <LuChevronRight />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>

                            )}

                        </div>



                    </div>
                </div>
            </div >

        </>
    )
}

export default Navbarmain