import { useState, useEffect, useContext } from 'react';
import {
    Typography,
    Box,
    Card,
    Container,
    Button,
    styled
} from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import Mstyles from '../../Styles/home.module.css'
import CircularProgress from '@mui/material/CircularProgress';

import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount, VscVerified } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import CheckloginContext from '../../context/auth/CheckloginContext'
import Link from 'src/components/Link';
import Head from 'next/head';
import NavbarPG from '../../src/components/Parts/NavbarPG'

import crypto from 'crypto';
import { MYKEY } from '../../Data/config'
import Image from 'next/image'
import { useRouter, useParams } from 'next/router'

export async function getServerSideProps(context) {
    const OrderID = context.query.pageno[0];
   

    return {

        props: { OrderID }, // will be passed to the page component as props
    }

}

const HeaderWrapper = styled(Card)(
    ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
    ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview({OrderID }) {

    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    const router = useRouter()
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(OrderID)
       
    }, [router.query]);



    return (
        <OverviewWrapper>
            <div>
                sds

         </div>





        </OverviewWrapper>
    );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};
