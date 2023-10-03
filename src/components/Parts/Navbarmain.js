import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Mstyles from '../../../Styles/home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount, VscVerified } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import HeaderMenuLeft from '../Subparts/HeaderMenuLeft'
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


    useEffect(() => {
        window.scrollTo(0, 0)
        if (Contextdata.IsLogin == true) {
            if (Contextdata.Data.name == '' || Contextdata.Data.email == '') {
                router.push('/editprofile')
                
            }
        }


    },[]);
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

                        <Link href='/bag' className={Mstyles.CartIconBox}>

                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={Contextdata.ItemsinCart} color="secondary">
                                    <LuShoppingBag />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <div className={Mstyles.OnlyMobile}>
                            <div className={Mstyles.CartIconBox}>
                                <Link href='/Search'>
                                    <IconButton aria-label="cart">
                                        <StyledBadge color="secondary">
                                            <LuSearch />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                               
                            </div>
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
                                            <Avatar src="/userdp.png"  />
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