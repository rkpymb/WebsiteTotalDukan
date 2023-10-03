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
import Mstyles from '../Styles/home.module.css'
import CheckloginContext from '../context/auth/CheckloginContext'
import Link from 'src/components/Link';
import Head from 'next/head';
import Navbarmain from '../src/components/Parts/Navbarmain'
import FooterMobile from '../src/components/Parts/FooterMobile'
import ProcedToCheckout from '../src/components/Parts/ProcedToCheckout'
import HomeSliders from '../src/components/Parts/Sliders/HomeSliders'
import CatlistGrid from './components/List/CatlistGrid'
import TopCatMenu from '../src/components/Parts/TopCatMenu'
import TrendingProducts from './components/List/TrendingProducts'

import Footer from '../src/components/Parts/Footer'
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { useRouter, useParams } from 'next/router'
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

function Overview() {
  const router = useRouter()
  const [Loading, setLoading] = useState(true);
  const Contextdata = useContext(CheckloginContext)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setLoading(false)
    if (Contextdata.IsLogin == true) {
      // router.push('/dashboards/main')
    } else {
      // router.push('/Login')
    }
   
  });

  const controlNavbar = () => {
    if (window.scrollY > 450) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  return (
    <OverviewWrapper>
      <Head> 
        <title>Toladukan.com</title>
      </Head>
      <Navbarmain />
     
      
      {!Loading &&
        <div>
          <div className={Mstyles.ContainerMainBoxFull}>
            <HomeSliders />
            <div className={Mstyles.ContainerMain}>
              <div className={Mstyles.OnlyDesktop}>
                <div style={{ minHeight: '30px' }}></div>
              </div>
              <CatlistGrid />
              <div className={Mstyles.OnlyDesktop}>
                <div style={{ minHeight: '30px' }}></div>
              </div>
            </div>
            <div className={Mstyles.ContainerMain}>
              <TrendingProducts />
            </div>
          </div>         
          <div className={Mstyles.containerFull}>
            <div className={Mstyles.OnlyDesktop}>
              <div style={{ minHeight: '20px' }}></div>
            </div>
            <div style={{ minHeight: '150px' }}></div>
            <div className={Mstyles.OnlyDesktop}>
              <Footer />
            </div>
            <ProcedToCheckout/>
            <div className={Mstyles.OnlyMobile}>
              <FooterMobile />
            </div>
            

          </div>
       
        </div>
       
      }

     
     
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
