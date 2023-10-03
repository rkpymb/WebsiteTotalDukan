import { useState, useEffect, useContext } from 'react';
import {
    Typography,
    Box,
    Card,
    Container,
    Button,
    styled
} from '@mui/material';
import Footer from '../../src/components/Parts/Footer'
import ProcedToCheckout from '../../src/components/Parts/ProcedToCheckout'
import FooterMobile from '../../src/components/Parts/FooterMobile'
import { LuShare2 } from "react-icons/lu";
import CatlistTagType from '../../pages/components/List/CatlistTagType'
import BaseLayout from 'src/layouts/BaseLayout';
import Mstyles from '../../Styles/home.module.css'
import CheckloginContext from '../../context/auth/CheckloginContext'
import Link from 'src/components/Link';
import Head from 'next/head';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import Navbarmain from '../../src/components/Parts/Navbarmain'
import { BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle, FiAward, FiClock } from "react-icons/fi";

import { useRouter, useParams } from 'next/router'
import { DO_SPACES_URL, DO_SPACES_FOLDER, AppName } from '../../Data/config'
import { TbDiscount2 } from "react-icons/tb";
import SubCatList from '../components/List/SubCatList'
import ProductByCatid from '../components/List/ProductByCatid'
export async function getServerSideProps(context) {
    const catid = context.query.pageno[0];
  

    return {

        props: { catid }, // will be passed to the page component as props
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

function Overview({  catid }) {
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
                <title>{catid} : Toladukan.com</title>
                

            </Head>
            <Navbarmain />
            <div className={Mstyles.ContainerMainBoxFull}>
                
                <div className={Mstyles.container}>
                    <div style={{ minHeight: '20px' }}></div>
                    <SubCatList catid={catid} />
                    <div style={{ minHeight: '20px' }}></div>
                    <ProductByCatid catid={catid} />
                    <div style={{ minHeight: '20px' }}></div>
                </div>
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
