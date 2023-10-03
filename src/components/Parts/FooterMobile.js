import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../../../context/auth/CheckloginContext'
import Mstyles from '../../../Styles/home.module.css'

import { LuShoppingBag, LuSearch, LuHome, LuLayoutList, LuPercent } from "react-icons/lu";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../../../Data/config'



const FooterMobile = (props) => {
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
            <div className={Mstyles.FooterMobileBox}>
                <div className={Mstyles.FooterMobileMenuBox}>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <div className={Mstyles.FooterMobileMenuBoxItem}>
                            <div className={Mstyles.FooterMobileMenuBoxItemA}>
                                <IconButton aria-label="cart">
                                    <StyledBadge color="secondary">
                                        <LuHome />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.FooterMobileMenuBoxItemB}>
                                <span>Home</span>
                            </div>
                        </div>
                    </Link>
                    <Link href='/Categories' style={{ textDecoration: 'none' }}>
                        <div className={Mstyles.FooterMobileMenuBoxItem}>
                            <div className={Mstyles.FooterMobileMenuBoxItemA}>
                                <IconButton aria-label="cart">
                                    <StyledBadge color="secondary">
                                        <LuLayoutList />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.FooterMobileMenuBoxItemB}>
                                <span>Category</span>
                            </div>
                        </div>
                    </Link>
                    <Link href='/bag' style={{ textDecoration: 'none' }}>

                        <div className={Mstyles.FooterMobileMenuBoxItem}>
                            <div className={Mstyles.FooterMobileMenuBoxItemA}>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={Contextdata.ItemsinCart} color="secondary">
                                        <LuShoppingBag />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.FooterMobileMenuBoxItemB}>
                                <span>Bag</span>
                            </div>
                        </div>
                    </Link>
                    <Link href='/Search' style={{ textDecoration: 'none' }}>
                        <div className={Mstyles.FooterMobileMenuBoxItem}>
                            <div className={Mstyles.FooterMobileMenuBoxItemA}>
                                <IconButton aria-label="cart">
                                    <StyledBadge color="secondary">
                                        <LuSearch />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.FooterMobileMenuBoxItemB}>
                                <span>Search</span>
                            </div>
                        </div>
                    </Link>
                    <Link href='/Offers' style={{ textDecoration: 'none' }}>
                        <div className={Mstyles.FooterMobileMenuBoxItem}>
                            <div className={Mstyles.FooterMobileMenuBoxItemA}>
                                <IconButton aria-label="cart">
                                    <StyledBadge color="secondary">
                                        <LuPercent />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className={Mstyles.FooterMobileMenuBoxItemB}>
                                <span>Offers</span>
                            </div>
                        </div>
                    </Link>





                </div>
            </div>

        </>
    )
}

export default FooterMobile