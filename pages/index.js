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
import HomeSliders from './components/List/HomeSliders'
import HomeSliders2 from './components/List/HomeSliders2'
import CatlistGrid from './components/List/CatlistGrid'
import Singerbanner from './components/List/Singerbanner'

import TrendingProducts from './components/List/TrendingProducts'
import Trendingbycat from './components/List/Trendingbycat'

import Footer from '../src/components/Parts/Footer'

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
         
          <div className={Mstyles.ContainerMainBoxFullindex}>
            <div className={Mstyles.ContainerMain}>
            
              <HomeSliders />
             

            </div>
           
            <div className={Mstyles.ContainerMain}>
            
              <div className={Mstyles.OnlyDesktop}>
                <div style={{ minHeight: '30px' }}></div>
              </div>
              <CatlistGrid />
              <div className={Mstyles.cv}>
                <div style={{ minHeight: '30px' }}></div>
              </div>
              <div>
                <Singerbanner />
              </div>
            </div>
           
            <div className={Mstyles.ContainerFullindex}>
              <div className={Mstyles.OnlyDesktop}>
                <div style={{ minHeight: '30px' }}></div>
              </div>
              <div className={Mstyles.ContainerMain}>
                <TrendingProducts />
              </div>
              <div className={Mstyles.OnlyDesktop}>
                <div style={{ minHeight: '30px' }}></div>
              </div>
            </div>
           

            <div className={Mstyles.ContainerMainSlider}>
              <div style={{ minHeight: '20px' }}></div>
              <HomeSliders2 />
              
            </div>
            <div className={Mstyles.OnlyDesktop}>
              <div style={{ minHeight: '20px' }}></div>
            </div>
            <div className={Mstyles.ContainerMain}>
              <Trendingbycat />
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
