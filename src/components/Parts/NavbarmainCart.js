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
import { LuShoppingBag, LuSearch, LuChevronRight, LuArrowLeft } from "react-icons/lu";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../../../Data/config'


import { useRouter, useParams } from 'next/router'
const NavbarmainCart = (props) => {
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

    return (
        <>
            <div className={Mstyles.navbarBox}>
                <div className={Mstyles.Navbar}>
                    <div className={Mstyles.NavA}>


                        <div className={Mstyles.OnlyMobile}>
                            <div className={Mstyles.CartIconBox}>

                                <IconButton aria-label="cart" onClick={() => router.back()}>
                                    <StyledBadge color="secondary">
                                        <LuArrowLeft />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                        </div>
                        <div className={Mstyles.HeadingTitleText}>
                            {props.Title}
                        </div>

                       



                    </div>
                    <div className={Mstyles.NavLeft}>


                        <div className={Mstyles.loginbtnTopBtns}>
                            {!Contextdata.IsLogin && (
                                <Link href='Login' style={{ textDecoration: 'none' }}>
                                    <div className={Mstyles.loginbtnTop}>
                                        <span><AiOutlineLogin /></span>
                                        <small>Login</small>
                                    </div>
                                </Link>

                            )}
                            {Contextdata.IsLogin && (
                                <div className={Mstyles.UserAvaTarBox}>
                                    <div>
                                        <Avatar alt="Remy Sharp" src="/userdpfile.jpg" />
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

                            )}

                        </div>



                    </div>
                </div>
            </div >

        </>
    )
}

export default NavbarmainCart