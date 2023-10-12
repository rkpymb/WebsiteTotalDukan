import React, { useState, useEffect, useContext } from 'react';
import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';

import crypto from "crypto"

import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton';
import { FiChevronRight, FiCheck, FiMapPin } from 'react-icons/fi';
import * as animationData from '../Data/Lottie/animation_lmwmfe78.json'
import * as animationData2 from '../Data/Lottie/animation_lmylccya.json'
import Lottie from 'react-lottie'
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
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
import AddAddress from './components/Add/AddAddress'

import IconButton from '@mui/material/IconButton';



import { useRouter, useParams } from 'next/router'
import Skeleton from '@mui/material/Skeleton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CryptoKey } from '../Data/config'
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
  const [Loading, setLoading] = useState(true);
  const [Step, setStep] = useState(0);
  const Contextdata = useContext(CheckloginContext)
  const [show, setShow] = useState(false)
  const [LoadingBtn, setLoadingBtn] = useState(false)
  const [CreateOrderBtnText, setCreateOrderBtnText] = useState('Place your Order')
  const [changedProducts, setChangedProducts] = useState([]);
  const [AlertOpen, setAlertOpen] = useState(false);
 
  const [Retdata, setRetdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [OrderDone, setOrderDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [FinalAddress, setFinalAddress] = useState(null);
  const [FinalAddressText, setFinalAddressText] = useState('');
  const [UserToken, setUserToken] = useState(null);
  const [Coupon, setCoupon] = useState('N/A');
  const [PaymentType, setPaymentType] = useState('COD');
  const [Paymentid, setPaymentid] = useState('N/A');
  const [refid, setRefid] = useState('N/A');
  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [Landmark, setLandmark] = useState('');
  const [PinCode, setPinCode] = useState('');
  const [City, setCity] = useState('');
  const [States, setStates] = useState('');

  const [productNames, setProductNames] = useState();
  // crypto data
  const algorithm = "aes-256-cbc";
  const initVector = crypto.randomBytes(16);
  // crypto data end

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
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
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
  useEffect(() => {
    const itemObject = {
      item1: { name: 'Item 1', price: 10 },
      item2: { name: 'Item 2', price: 20 },
      item3: { name: 'Item 3', price: 15 },
      // Aur aapke paas aur bhi items honge
    };

    // Object keys se item names ko ek line mein dikhana
    const itemNames = Object.values(Contextdata.cart).map(item => item.name).join(', ');

    setProductNames(itemNames);
    if (Contextdata.IsLogin == true) {
      setLoading(false)
      GetAddressList()

    } else {
      router.push('/')
    }

  }, []);

  const GetAddressList = async (e) => {
    try {
      if (localStorage.getItem('Token')) {
        setIsLoading(true)
        const JwtToken = localStorage.getItem('Token');
        setUserToken(JwtToken)
        const sendUser = { JwtToken }
        const data = fetch("/api/V3/Users/UserAddressList", {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(sendUser)
        }).then((a) => {
          return a.json();
        })
          .then((parsedUser) => {

            setRetdata(parsedUser.ReqData.AddList)
            setIsLoading(false)
            setLoadingBtn(false)
            if (parsedUser.ReqData.AddList.length == 0) {
              setOpen(true)
            }

          })
      }
    } catch (error) {
      console.error(error)

    }

  }




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Name !== '' && Email !== '' && Mobile !== '' && Address !== '' && Landmark !== '' && PinCode !== '' && City !== '' && States !== '') {

      try {
        if (localStorage.getItem('Token')) {
          const JwtToken = localStorage.getItem('Token');
          const AdreessData = {
            Name: Name,
            Email: Email,
            Mobile: Mobile,
            Address: Address,
            Landmark: Landmark,
            PinCode: PinCode,
            City: City,
            State: States,
          }
          const sendUser = { JwtToken, AdreessData }
          const data = fetch("/api/V3/Users/AddAddress", {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUser)
          }).then((a) => {
            return a.json();
          })
            .then((parsedUser) => {
              setOpen(false)
              GetAddressList()


            })
        }
      } catch (error) {
        console.error(error)

      }

    } else {
      alert('All fields are required')
    }

  };
  const RedirectToStatus = async (e) => {
    setTimeout(function () {
      setCreateOrderBtnText('Order Placed Succesfully 😍 ')
      router.push(`OrderStatus/${e}`)
    }, 3000); //Time before execution

  };



  const CretateOrder = async () => {

    if (FinalAddress !== null && UserToken !== null) {
      setCreateOrderBtnText('Placing Your Order 😎 ...')
      setLoadingBtn(true)

      const JwtToken = UserToken
      const data = fetch("/api/V3/Users/CreateOrder", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          JwtToken: JwtToken,
          Mprice: Contextdata.AmtWithoutDiscount,
          TotalItemAmt: Contextdata.Grandtotal - Contextdata.Deliveryfee,
          FinalItemAmt: Contextdata.Grandtotal,
          Discount: Contextdata.FinalDiscount,
          Coupon: Contextdata.CouponData.Ccode,
          PaymentType: PaymentType,
          Paymentid: "N/A",
          refid: "N/A",
          OrderStatus: 0,
          PayStatus: 0,
          OrderStatusText: "Order Placed",
          PayStatusText: "Payment Pending",
          CartList: Contextdata.cart,
          OrderTitle: productNames,
          AddressID: FinalAddress,
          Deliveryfee: Contextdata.Deliveryfee,
          ExpectedDelivery: Contextdata.ExpectedDelivery,
        })
      }).then((a) => {
        return a.json();
      })
        .then((OrderRes) => {

          if (OrderRes.ReqData.OrderData) {
            setTimeout(function () {
              window.scrollTo(0, 0)
              setCreateOrderBtnText('Order Placed Succesfully 😍 ')
              setOrderDone(true)
              Contextdata.clearCart()
              RedirectToStatus(OrderRes.ReqData.OrderData._id)
            
            }, 1000); //Time before execution
          } else {
            alert('Something Went Wrong Try again')
            setLoadingBtn(false)
          }
        })

    } else {
      setLoadingBtn(false)

      alert('Please Choose Delivery Address')
    }

  };

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressSelect = (address) => {
    setFinalAddress(address)
    setFinalAddressText(`${address.AdreessData.Address},${address.AdreessData.City},${address.AdreessData.State},${address.AdreessData.PinCode}`)
    console.log(address)
    yourCustomFunction()
    setSelectedAddress(address === selectedAddress ? null : address);
  };

  const handleSmoothScroll = (targetElement) => {
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop,
      });
    }
  };

  const yourCustomFunction = () => {
    // Specify the section ID you want to scroll to
    const targetId = 'PaymentBox'; // Replace 'section2' with your desired section ID
    const targetElement = document.getElementById(targetId);

    // Call the handleSmoothScroll function to scroll to the target element
    handleSmoothScroll(targetElement);
  };

  return (
    <OverviewWrapper>
      <Head>
        <title>Checkout : Toladukan.com</title>
      </Head>
      <div className={Mstyles.OnlyDesktop}>

        <Navbarmain />
      </div>
      <div className={Mstyles.OnlyMobile}>

        <NavbarmainCart Title={'Checkout'} />
      </div>
      {!Loading &&
        <div>
          <div>
            {!OrderDone &&
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
                                <span>Select a delivery address</span>
                              </div>

                            </div>
                            <div className={Mstyles.ClearCartBox}>
                              <Button
                                onClick={handleClickOpen('paper')}
                                size="small"
                                variant="outlined"
                                startIcon={<AddTwoToneIcon fontSize="small" />}
                              >
                                Add new
                              </Button>

                            </div>
                          </div>

                        </div>
                        <div className={Mstyles.CartitemBox}>
                          

                          <div className={Mstyles.OnlyMobile}>
                            <div style={{ minHeight: '80px' }}></div>
                            <div className={Mstyles.MobileCatH}>
                              <div className={Mstyles.MobileCatHA}>
                                <span>Select delivery address</span>
                              </div>
                              <Button
                                onClick={handleClickOpen('paper')}
                                size="small"
                                variant="outlined"
                                startIcon={<AddTwoToneIcon fontSize="small" />}
                              >
                                Add new
                              </Button>
                            </div>
                          </div>
                          <div>
                            {isLoading &&
                              <div>
                                <div style={{ margin: '10px ' }}>
                                  <Skeleton variant="rounded" width={'100%'} height={80} />

                                </div>
                                <div style={{ margin: '10px ' }}>
                                  <Skeleton variant="rounded" width={'100%'} height={80} />

                                </div>
                                <div style={{ margin: '10px ' }}>
                                  <Skeleton variant="rounded" width={'100%'} height={80} />

                                </div>
                              </div>

                            }
                            {!isLoading &&
                              <div>
                                {Retdata.map((address) => (
                                  <div
                                    key={address._id.$oid}
                                    className={`${Mstyles.AddressNotSelect} ${selectedAddress === address ? Mstyles.AddressSelect : ''}`}
                                    onClick={() => handleAddressSelect(address)}
                                  >
                                    <div className={Mstyles.AddressHeder}>
                                      <div className={Mstyles.AddressHederA}>
                                        <div className={Mstyles.AddressHederADatabox}>
                                          <div className={Mstyles.AddressHederADataboxA}>
                                            <FiMapPin size={18} />
                                          </div>
                                          <div className={Mstyles.AddressHederADataboxB}>
                                            <div className={Mstyles.AddressHederADataboxBName}>
                                              {address.AdreessData.Name}
                                            </div>
                                            <div className={Mstyles.AddressHederADataboxBData}>
                                              <span>{address.AdreessData.Email}</span>
                                            </div>
                                            <div className={Mstyles.AddressHederADataboxBData}>
                                              <span>{address.AdreessData.Mobile}</span>
                                            </div>
                                            <div className={Mstyles.AddressHederADataboxBData}>
                                              <span>{address.AdreessData.Address}, {address.AdreessData.City},{address.AdreessData.State},{address.AdreessData.PinCode} , Landmark : {address.AdreessData.Landmark}</span>
                                            </div>
                                          </div>
                                        </div>

                                      </div>

                                      <div className={Mstyles.AddressHederB}>
                                        {selectedAddress !== address &&
                                          <Button
                                            onClick={() => handleAddressSelect(address)}
                                            size="small"
                                            variant="outlined"
                                            color='success'
                                            fullWidth
                                            endIcon={<FiChevronRight />}

                                          >
                                            Deliver here
                                          </Button>
                                        }

                                      </div>
                                    </div>
                                  </div>
                                ))}

                              </div>

                            }


                          </div>


                        </div>


                      </div>
                      <div className={Mstyles.BagFlexBoxB}>
                        <div style={{ minHeight: '20px' }}></div>
                        <div>
                          <span style={{ fontWeight: 600 }}>Order summary</span>
                        </div>
                        <div className={Mstyles.CartSummybox}>
                          <div className={Mstyles.CartSummyboxA}>
                            <div className={Mstyles.CartSummyboxListBoxItem}>
                              <div className={Mstyles.CartSummyboxListBoxItemA}>
                                <span>Total Item in bag</span>
                              </div>
                              <div className={Mstyles.CartSummyboxListBoxItemB}>
                                <span className={Mstyles.amttext}>{Contextdata.ItemsinCart}</span>
                              </div>
                            </div>
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
                                <span className={Mstyles.amttextSub}>₹ {Contextdata.Grandtotal}</span>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div style={{ minHeight: '20px' }}></div>
                        {FinalAddressText !== '' &&

                          <div className={Mstyles.FinalAddressText}>
                            <div className={Mstyles.LottieLocation}>
                              <Lottie options={defaultOptions}
                                width={100}
                                height={100}
                                isStopped={false}
                                isPaused={false} />
                            </div>
                            <div>
                              <div>
                                <span style={{ fontWeight: 500 }}>Order will be delivered to : </span>
                              </div>
                              <span style={{ fontWeight: 700 }}>{FinalAddressText}</span>
                              <div>
                                <span className={Mstyles.DeliveryTime}>Expected delivery Time : {Contextdata.DeliveryTime}</span>
                              </div>
                            </div>
                          </div>

                        }

                        <div>

                          <div style={{ minHeight: '20px' }}></div>
                          <div>
                            <span style={{ fontWeight: 600 }}>Payment Method</span>
                          </div>
                          <div className={Mstyles.PaymentBoxItem} id='PaymentBox'>
                            <div className={Mstyles.PaymentBoxItemA}>

                              <div className={Mstyles.PaymentBoxItemBImg}>
                                <Image
                                  src={`/cod.png`}
                                  alt="image"
                                  layout="responsive"
                                  placeholder='blur'
                                  width={50}
                                  height={50}
                                  quality={100}
                                  blurDataURL={blurredImageData}

                                />
                              </div>
                              <div className={Mstyles.PaymentBoxItemB}>
                                <span>Cash On Delivery</span>
                                <small>pay at your doorstep</small>
                              </div>
                            </div>
                            <div className={Mstyles.PaymentBoxItemB}>
                              <FiCheck size={20} />
                            </div>


                          </div>
                          <div style={{ minHeight: '20px' }}></div>

                          <LoadingButton
                            fullWidth
                            onClick={CretateOrder}
                            endIcon={<FiChevronRight />}
                            loading={LoadingBtn}
                            loadingPosition="end"
                            variant="contained"
                          >
                            <span>{CreateOrderBtnText}</span>
                          </LoadingButton>
                          <div style={{ minHeight: '10px' }}></div>
                          <div className={Mstyles.OnlyDesktopCheckoutBtn}>
                            <div className={Mstyles.totalFinalDiscountBox}>
                              <span>Wow 😍 You saved </span>   <span className={Mstyles.totalFinalDiscount} >₹{Contextdata.FinalDiscount} </span> <span>on this order </span>
                            </div>
                            <div style={{ minHeight: '10px' }}></div>

                          </div>
                        </div>


                      </div>

                    </div>

                  </div>
                }


                <div>

                  <Dialog
                    open={AlertOpen}
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

            {OrderDone &&
              <div className={Mstyles.ContainerMainBoxFull}>
                <div style={{ minHeight: '50px' }}></div>
                <div className={Mstyles.OrderDoneBox}>
                  <div>
                    <Lottie options={defaultOptions2}
                      width={200}
                      height={200}
                      isStopped={false}
                      isPaused={false} />
                  </div>
                  <div style={{ minHeight: '20px' }}></div>
                  <div>
                    <span>Order Placed successfully</span>
                    </div>
                </div>

              </div>

            }

          </div>
        </div>



      }

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="scroll-dialog-title">Add new address</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <form onSubmit={handleSubmit} >
            <div className={Mstyles.InputBoxData}>
              <label>Full Name</label>
              <div style={{ minHeight: '8px' }}></div>
              <input
                required
                placeholder="Name"
                value={Name}
                onInput={e => setName(e.target.value)}

              />
            </div>
            <div className={Mstyles.InputBoxData}>
              <label>Contact Number</label>
              <div style={{ minHeight: '8px' }}></div>
              <input
                required
                placeholder="Mobile"

                value={Mobile}
                onInput={e => setMobile(e.target.value)}

              />
            </div>
            <div className={Mstyles.InputBoxData}>
              <label>Email ddress</label>
              <div style={{ minHeight: '8px' }}></div>
              <input
                required
                placeholder="Email"

                value={Email}
                onInput={e => setEmail(e.target.value)}

              />
            </div>
            <div className={Mstyles.InputBoxData}>
              <label>Complete Address</label>
              <div style={{ minHeight: '8px' }}></div>
              <input
                required
                placeholder="Address"

                value={Address}
                onInput={e => setAddress(e.target.value)}

              />
            </div>
            <div className={Mstyles.InputBoxData}>
              <label>Landmark</label>
              <div style={{ minHeight: '8px' }}></div>
              <input
                required
                placeholder="Landmark"

                value={Landmark}
                onInput={e => setLandmark(e.target.value)}

              />
            </div>
            <div className={Mstyles.InputGroupBoxData}>
              <div className={Mstyles.InputBoxData}>
                <label>PinCode</label>
                <div style={{ minHeight: '8px' }}></div>
                <input
                  required
                  placeholder="PinCode"

                  value={PinCode}
                  type="number"
                  onInput={e => setPinCode(e.target.value)}

                />
              </div>
              <div style={{ minWidth: '8px' }}></div>
              <div className={Mstyles.InputBoxData}>
                <label>City</label>
                <div style={{ minHeight: '8px' }}></div>
                <input
                  required
                  placeholder="City"

                  value={City}
                  onInput={e => setCity(e.target.value)}

                />
              </div>
              <div style={{ minWidth: '8px' }}></div>
              <div className={Mstyles.InputBoxData}>
                <label>State</label>
                <div style={{ minHeight: '8px' }}></div>

                <select name="state" id="state" onInput={e => setStates(e.target.value)}>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>



            <div style={{ minHeight: 25 }}></div>

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
      <div className={Mstyles.OnlyMobile}>
        <div style={{ minHeight: '180px' }}></div>

      </div>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
