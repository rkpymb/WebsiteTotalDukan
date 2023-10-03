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
import CatlistTagType from '../../../pages/components/List/CatlistTagType'
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../../../Data/config'



const Navbarmain = (props) => {
    const Contextdata = useContext(CheckloginContext)
  

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
            <div className={Mstyles.TopCatMenu}>
                <CatlistTagType/>
            </div>

        </>
    )
}

export default Navbarmain