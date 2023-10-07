import React, { useState, useEffect, useContext } from 'react';
import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';
import Image from 'next/image';
import { LuMinus, LuPlus } from "react-icons/lu";
import { FiChevronRight, FiX } from 'react-icons/fi';
import * as animationData from '../Data/Lottie/animation_lmuw02v7.json'
import Lottie from 'react-lottie'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { LuShoppingBag, LuSearch, LuChevronRight, LuArrowLeft } from "react-icons/lu";
import BaseLayout from 'src/layouts/BaseLayout';
import Mstyles from '../Styles/home.module.css'
import CheckloginContext from '../context/auth/CheckloginContext'
import Link from 'src/components/Link';
import Head from 'next/head';
import NavbarmainCart from '../src/components/Parts/NavbarmainCart'
import Navbarmain from '../src/components/Parts/Navbarmain'

import IconButton from '@mui/material/IconButton';
import { MediaFilesUrl, MediaFilesFolder } from '../Data/config'
import { useRouter, useParams } from 'next/router'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import LoadingButton from '@mui/lab/LoadingButton';
const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
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
const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Overview() {
  const router = useRouter()
  const [LoadingBtn, setLoadingBtn] = useState(false)
  const [Loading, setLoading] = useState(true);
  const [Step, setStep] = useState(0);
  const Contextdata = useContext(CheckloginContext)
  const [show, setShow] = useState(false)
  const [Deliveryfee, setDeliveryfee] = useState(0)
  const [changedProducts, setChangedProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(function () {
      setOpen(false);
    }, 5000);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
  useEffect(() => {

    if (Contextdata.IsLogin == true) {
      setLoading(false)
    } else {
      router.push('/Login')
    }

  }, []);

  const removeItem = (itemId) => {
    // console.log(itemId)
    Contextdata.FInalremoveFromCart(itemId, 1)

  };

  useEffect(() => {
    
    // Object.keys() ka use karke cart items ke changes ko check karen.
    Object.keys(Contextdata.cart).forEach((itemId) => {

      try {
        if (localStorage.getItem('Token')) {
        
          Object.keys(Contextdata.cart).forEach((itemId) => {
            const cartItem = Contextdata.cart[itemId];
            const JwtToken = localStorage.getItem('Token');
            const sendUser = { JwtToken, pid: cartItem.itemdata._id }

            const data = fetch("/api/V3/Users/Checkcart", {
              method: "POST",
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(sendUser)
            }).then((a) => {
              return a.json();
            })
              .then((parsedUser) => {
                let CurrentPSalePrice = parsedUser.ReqData.pdataRet[0].sprice
                CurrentPSalePrice++
                const currentP = parsedUser.ReqData.pdataRet[0]
                if (currentP.sprice == cartItem.price) {
                  // console.log('ok')
                  
                } else {

                  handleClickOpen()

                  // Update Cart
                  const updatedCartItem = {
                    ...cartItem,
                    price: currentP.sprice,

                    changed: true, // Flag to indicate changes
                  };

                  const updatedCartItems = { ...Contextdata.cart };
                  delete updatedCartItems[itemId];
                  Contextdata.setCart(updatedCartItems);

                  if (!changedProducts.some((p) => p.productId === cartItem.itemdata._id)) {
                    setChangedProducts((prevChangedProducts) => [
                      ...prevChangedProducts,
                      { productId: cartItem.itemdata._id, productName: cartItem.name },
                    ]);
                  }
                  removeItem(cartItem.itemdata._id);

                }
              })
          });
          setLoadingBtn(false)
        }
      } catch (error) {
        console.error(error)

      }

    });
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

  function calculateTotalDiscount(cart) {

    const totalDiscounts = {};
    let totalFinalDiscount = 0;
    for (const productId in cart) {
      const product = cart[productId];

      const discount = (product.mprice - product.price) * product.qty;
      totalDiscounts[productId] = discount;
      totalFinalDiscount += discount;
      Contextdata.setFinalDiscount(totalFinalDiscount)

    }

    return { totalDiscounts, totalFinalDiscount };;
  }

  const { totalDiscounts, totalFinalDiscount } = calculateTotalDiscount(Contextdata.cart);
  return (
    <OverviewWrapper>
      <Head>
        <title>My Bag : Toladukan.com</title>
      </Head>
      <div className={Mstyles.OnlyDesktop}>

        <Navbarmain />
      </div>
      <div className={Mstyles.OnlyMobile}>

        <NavbarmainCart Title={'Shopping bag'} />
      </div>
      {!Loading &&
        <div>
          {Contextdata.ItemsinCart > 0 &&

            <div>
              <div className={Mstyles.BagFlexBox}>
                <div className={Mstyles.BagFlexBoxA}>
                  <div className={Mstyles.OnlyDesktop}>
                    <div style={{ minHeight: '80px' }}></div>
                    <div className={Mstyles.MainTitleBoxCart}>
                      <div className={Mstyles.MainTitleBoxCartA}>
                        <div className={Mstyles.MainTitleBoxCartAIcon}>

                          <IconButton aria-label="cart" onClick={() => router.back()}>
                            <StyledBadge color="secondary" >
                              <LuArrowLeft />
                            </StyledBadge>
                          </IconButton>
                        </div>
                        <div className={Mstyles.MainTitleBoxCartAtext}>

                          {Contextdata.ItemsinCart > 1 &&
                            <span> Shopping bag ({Contextdata.ItemsinCart} Items)</span>
                          }
                          {Contextdata.ItemsinCart == 1 &&
                            <span> Shopping bag ({Contextdata.ItemsinCart} Item)</span>
                          }
                        </div>
                      </div>
                      <div className={Mstyles.ClearCartBox}>
                        <Button variant="outlined" size='small' endIcon={<FiX />} onClick={Contextdata.clearCart} >
                          Clear Bag
                        </Button>

                      </div>
                    </div>

                  </div>
                  <div className={Mstyles.CartitemBox}>
                    

                    <div className={Mstyles.OnlyMobile}>
                      <div style={{ minHeight: '80px' }}></div>
                      <div className={Mstyles.MobileCatH}>
                        <div className={Mstyles.MobileCatHA}>

                          {Contextdata.ItemsinCart > 1 &&
                            <span>{Contextdata.ItemsinCart} Items in your bag</span>
                          }
                          {Contextdata.ItemsinCart == 1 &&
                            <span>{Contextdata.ItemsinCart} Item in your ba</span>
                          }
                        </div>
                        <div className={Mstyles.MobileCatHB}>
                          <Button variant="outlined" size='small' endIcon={<FiX />} onClick={Contextdata.clearCart}>
                            Clear Bag
                          </Button>

                        </div>


                      </div>
                    </div>
                    <div className={Mstyles.CartListItemBox}>
                      {Object.keys(Contextdata.cart).map((k) => {
                        return <div key={k} className={Mstyles.CartListItem}>
                          <div className={Mstyles.CartListItemA}>
                            <Link href={`/`} style={{ textDecoration: 'none' }}>
                              <div className={Mstyles.CartListItemAImg}>
                                <Image
                                  src={`${MediaFilesUrl}${MediaFilesFolder}/${Contextdata.cart[k].itemImg}`}
                                  alt="image"
                                  layout="responsive"
                                  placeholder='blur'
                                  width={50}
                                  height={50}
                                  quality={100}
                                  blurDataURL={blurredImageData}

                                />
                              </div>
                            </Link>
                            <div className={Mstyles.CartListItemContent}>
                              <div className={Mstyles.CartListItemContentTitle}>
                                <span>{Contextdata.cart[k].name}</span>
                              </div>
                              <div className={Mstyles.OtherDataBoxCart}>
                                <span>unit:  {Contextdata.cart[k].itemdata.UnitNumber}{Contextdata.cart[k].itemdata.UnitText}</span>
                              </div>
                              {Contextdata.cart[k].changed &&
                                <div>
                                  <p>{Contextdata.cart[k].changed}</p>
                                </div>
                              }


                              <div className={Mstyles.CartListItemContentPrice}>
                                <span>₹{Contextdata.cart[k].price}</span>  <small><del>₹{Contextdata.cart[k].itemdata.mprice}</del></small>  x <small>{Contextdata.cart[k].qty}</small>
                              </div>
                              <div style={{ minHeight: '10px' }}></div>
                              <div className={Mstyles.Crtpagetags}>
                                <span>You saved ₹{totalDiscounts[Contextdata.cart[k].itemdata._id]}</span>
                              </div>
                            </div>

                          </div>
                          <div className={Mstyles.CartListItemB}>
                            <div className={Mstyles.AddcartbtnGroup}>

                              <IconButton size='small' styles={{ color: 'white' }} aria-label="Remove from cart" onClick={() => { Contextdata.removeFromCart(Contextdata.cart[k].itemdata._id, 1) }} >
                                <LuMinus />
                              </IconButton>
                              <div className={Mstyles.AddcartbtnQty}>
                                <span>{Contextdata.cart[k].qty}</span>
                              </div>

                              <IconButton size='small' styles={{ color: 'white' }} aria-label="Add to cart" onClick={(() => { Contextdata.addtoCart(Contextdata.cart[k].itemdata._id, 1, Contextdata.cart[k].itemdata.sprice, Contextdata.cart[k].itemdata.title, Contextdata.cart[k].itemdata.img, Contextdata.cart[k].itemdata.UnitNumber, Contextdata.cart[k].itemdata.UnitText, Contextdata.cart[k].itemdata.mprice, Contextdata.cart[k].itemdata) })}  >
                                <LuPlus />
                              </IconButton>
                            </div>
                          </div>


                        </div>
                      })}

                    </div>


                  </div>


                </div>
                <div className={Mstyles.BagFlexBoxB}>
                  <div className={Mstyles.BagFlexBoxBCupon}>
                    <div className={Mstyles.BagFlexBoxBCuponA}>
                      <div className={Mstyles.discountimg}>
                        <Image
                          src={`/discount.png`}
                          alt="image"
                          layout="responsive"
                          placeholder='blur'
                          width={50}
                          height={50}
                          quality={100}
                          blurDataURL={blurredImageData}

                        />
                      </div>
                      <div className={Mstyles.discountText}>
                        <div><span>Coupons and offers</span></div>
                        <small>Save more with Coupons and offers</small>
                      </div>
                    </div>

                    <div>
                      <Button variant="outlined" endIcon={<FiChevronRight />}

                      >
                        Apply
                      </Button>

                    </div>
                  </div>
                  <div className={Mstyles.CartSummybox}>
                    <div className={Mstyles.CartSummyboxA}>
                     
                      <div className={Mstyles.CartSummyboxListBoxItem}>
                        <div className={Mstyles.CartSummyboxListBoxItemA}>
                          <span>Item total</span>
                        </div>
                        <div className={Mstyles.CartSummyboxListBoxItemB}>
                          <span className={Mstyles.amttext}>₹ {Contextdata.AmtWithoutDiscount}</span>
                        </div>
                      </div>
                      <div className={Mstyles.CartSummyboxListBoxItem}>
                        <div className={Mstyles.CartSummyboxListBoxItemA}>
                          <span>Delivery fee</span>

                        </div>
                        <div className={Mstyles.CartSummyboxListBoxItemB}>
                          <span className={Mstyles.amttext}>₹ {Contextdata.Deliveryfee}</span>
                        </div>
                      </div>
                      <div className={Mstyles.CartSummyboxListBoxItem}>
                        <div className={Mstyles.CartSummyboxListBoxItemA}>
                          <span>Discount</span>

                        </div>
                        <div className={Mstyles.CartSummyboxListBoxItemB}>
                          <span className={Mstyles.amttext}>₹ {Contextdata.FinalDiscount}</span>
                        </div>
                      </div>
                      <div style={{ minHeight: '10px' }}></div>
                      <div className={Mstyles.deviderCart}></div>
                      <div style={{ minHeight: '10px' }}></div>
                      <div className={Mstyles.CartSummyboxListBoxItem}>
                        <div className={Mstyles.CartSummyboxListBoxItemA}>
                          <span>Grand total</span>
                          <div><small>Inclusive of all taxes</small></div>

                        </div>
                        <div className={Mstyles.CartSummyboxListBoxItemB}>
                          <span className={Mstyles.amttextSub}>₹ {Contextdata.subTotal + Contextdata.Deliveryfee}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={Mstyles.OnlyDesktop}>
                    <div style={{ minHeight: '30px' }}></div>
                    <div className={Mstyles.OnlyDesktopCheckoutBtn}>
                      <Link href='/Checkout' style={{width: '100%'}}>
                        <LoadingButton
                          fullWidth

                          endIcon={<FiChevronRight />}
                          loading={LoadingBtn}
                          loadingPosition="end"
                          variant="contained"
                        >
                          <span> Procced to Checkout</span>
                        </LoadingButton>
                      </Link>

                      
                     
                      <div style={{ minHeight: '20px' }}></div>
                      <div className={Mstyles.totalFinalDiscountBox}>
                        <span>Wow 😍 You saved </span>   <span className={Mstyles.totalFinalDiscount} >₹{Contextdata.FinalDiscount} </span> <span>on this order </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div className={Mstyles.OnlyMobile}>

                <div style={{ minHeight: '120px' }}></div>
              </div>
              <div className={Mstyles.OnlyMobile}>
                <div className={Mstyles.CheckoutMobileBoxFooter}>
                  <div className={Mstyles.OnlyDesktopCheckoutBtn}>
                    <div className={Mstyles.totalFinalDiscountBox}>
                      <span>Wow 😍 You saved </span>   <span className={Mstyles.totalFinalDiscount} >₹{Contextdata.FinalDiscount} </span> <span>on this order </span>
                    </div>
                    <div style={{ minHeight: '10px' }}></div>
                   

                    <Link href='/Checkout' style={{ width: '100%' }}>
                      <Button variant="contained" color={"primary"} fullWidth endIcon={<FiChevronRight />}>
                        Procced to Checkout  <span className={Mstyles.checkputamt}>₹ {Contextdata.subTotal + Deliveryfee}</span>
                      </Button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          }

          {Contextdata.ItemsinCart == 0 &&
            <div className={Mstyles.EmptyCartBox}>
              <div>
                <Lottie options={defaultOptions}
                  width='100%'
                  height={400}
                  isStopped={false}
                  isPaused={false} />
              </div>
              <div className={Mstyles.EmptyCartBoxText}>
                Your bag is Empty
              </div>
              <div style={{ minHeight: '10px' }}></div>
              <Link href='/'>
                <Button variant="outlined" color={"primary"} endIcon={<FiChevronRight />}>
                  Add items to bag
                </Button>
              </Link>
            </div>
          }
          <div>

            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Products removed from Bag"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  due to changes in price and stock availability product remove from your bag
                </DialogContentText>
                {/* <div>
                  <h2>Changed Products:</h2>
                  <ul>
                    {changedProducts.map((product, index) => (
                      <li key={index}>
                        {product.productName} (Product ID: {product.productId})
                      </li>
                    ))}
                  </ul>
                </div> */}

              </DialogContent>
              <DialogActions>

                <Button onClick={handleClose}>ok</Button>
              </DialogActions>
            </Dialog>
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
