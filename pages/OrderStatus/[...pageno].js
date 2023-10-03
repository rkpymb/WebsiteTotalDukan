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
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { LuShoppingBag, LuSearch, LuChevronRight, LuArrowLeft } from "react-icons/lu";
import * as animationData from '../../Data/Lottie/animation_lmwmfe78.json'
import Lottie from 'react-lottie'
import CheckloginContext from '../../context/auth/CheckloginContext'
import Link from 'src/components/Link';
import Head from 'next/head';
import { FaRupeeSign } from "react-icons/fa";
import Navbarmain from '../../src/components/Parts/Navbarmain'
import { FiShoppingBag, FiTruck, FiRefreshCcw, FiCheckCircle, FiX, FiThumbsUp, FiArrowRightCircle, FiCoffee, FiBox, FiCheckSquare, FiAlertTriangle } from "react-icons/fi";

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

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

function Overview({ OrderID }) {
    const Contextdata = useContext(CheckloginContext)
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    const router = useRouter()
    const [OrderSList, setOrderSList] = useState([]);
    const [OrderItems, setOrderItems] = useState([]);
    const [PL, setPL] = useState([]);
    const [AddressData, setAddressData] = useState();
    const [OrderData, setOrderData] = useState();
    const [FormattedDateOrder, setFormattedDateOrder] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingOrderSList, setisLoadingOrderSList] = useState(true);

    const [TotalPaidAmount, setTotalPaidAmount] = useState(0);
    const [TotalRefundedAmount, setTotalRefundedAmount] = useState(0);
    const [TotalAmount, setTotalAmount] = useState(0);

    const [TotalDuesAmount, setTotalDuesAmount] = useState(0);
    useEffect(() => {
        // check login
        try {
            if (localStorage.getItem('Token')) {
                const JwtToken = localStorage.getItem('Token');
                const sendUser = { JwtToken: JwtToken, OrderID: OrderID }
                const data = fetch("/api/V3/Users/OrderStatus", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUser)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        setOrderData(parsedUser.ReqData.OrderStatus[0])
                        formatDate(parsedUser.ReqData.OrderStatus[0].date);
                        setOrderItems(parsedUser.ReqData.OrderStatus[0].CartList)
                        setIsLoading(false)
                        setAddressData(parsedUser.ReqData.OrderStatus[0].AddressID.AdreessData)
                        console.log(parsedUser.ReqData.OrderStatus[0].AddressID.AdreessData)
                        OrderStatusList()

                    })
            } else {
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error)

        }
    }, [router.query]);


    const formatDate = (inputDate) => {

        // Parse the input date string into a Date object
        const dateParts = inputDate.split('-'); // Assuming input format is "yyyy-mm-dd"
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1; // Month is 0-based in JavaScript
        const day = parseInt(dateParts[2]);
        const parsedDate = new Date(year, month, day);

        // Format the date into "day month year" format
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = parsedDate.toLocaleDateString(undefined, options);
        setFormattedDateOrder(formattedDate)

    };

    const OrderStatusList = async () => {
        const dataid = '08c5th4rh86ht57h6g';
        const sendUM = { OrderID: OrderID }
        const data = await fetch("/api/V3/List/OrderStatusList", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed.ReqD.OrderStatusList)
                setOrderSList(parsed.ReqD.OrderStatusList)
                setisLoadingOrderSList(false)
                GetOrderPaymentList()
            })
    }


    const GetOrderPaymentList = async () => {
        const dataid = '08c5th4rh86ht57h6g';
        const sendUM = { OrderID: OrderID }
        const data = await fetch("/api/V3/List/OrderPyamentList", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed.ReqD.PL)
                setPL(parsed.ReqD.PL)
                calculateAmt(parsed.ReqD.PL)


            })
    }

    const calculateAmt = async (e) => {
        let paid = 0;
        let refunded = 0;
        let dues = 0;

        e.forEach((payment) => {
            if (payment.type === 'Paid') {
                paid += payment.amt;

            } else if (payment.type === 'Refund') {
                refunded += payment.amt;

            }
        });
        setTotalPaidAmount(paid);
        setTotalRefundedAmount(refunded);
    }

    return (
        <OverviewWrapper>
            <Head>
                <title>Order Status : Toladukan.com</title>
            </Head>
            <Navbarmain />
            <div className={Mstyles.ContainerMainBoxFull}>
                {!isLoading &&
                    <div className={Mstyles.OrderStatusBox}>
                        <div className={Mstyles.OrderStatusBoxA}>
                            <div className={Mstyles.OnlyDesktop}>
                                <div className={Mstyles.MainTitleBoxCart}>
                                    <div className={Mstyles.MainTitleBoxCartA}>
                                        <div className={Mstyles.MainTitleBoxCartAIcon}>

                                            <IconButton aria-label="cart" onClick={() => router.back()}>
                                                <StyledBadge color="secondary" >
                                                    <LuArrowLeft />
                                                </StyledBadge>
                                            </IconButton>
                                        </div>
                                        Order Status :
                                    </div>
                                    <div className={Mstyles.ClearCartBox}>
                                        {OrderData.OrderStatus === 0 &&
                                            <div className={Mstyles.OrderStatusTextItem}>
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiShoppingBag size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }
                                        {OrderData.OrderStatus === 1 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: '#67EEA0', color: 'black' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiThumbsUp size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }

                                        {OrderData.OrderStatus === 2 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: '#605957', color: 'yellow' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiCoffee size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }


                                        {OrderData.OrderStatus === 3 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: '#52BE80', color: 'white' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiTruck size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }

                                        {OrderData.OrderStatus === 4 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: 'green', color: 'white' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiBox size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }
                                        {OrderData.OrderStatus === 5 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: '#F1C40F', color: 'black' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiCheckSquare size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }
                                        {OrderData.OrderStatus === 6 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: '#F1C40F', color: 'black' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiAlertTriangle size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }
                                        {OrderData.OrderStatus === 7 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: 'red', color: 'white' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiAlertTriangle size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }
                                        {OrderData.OrderStatus === 8 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: 'blue', color: 'white' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiRefreshCcw size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }

                                        {OrderData.OrderStatus === 9 &&
                                            <div className={Mstyles.OrderStatusTextItem}
                                                style={{ backgroundColor: 'pink', color: 'black' }}
                                            >
                                                <div className={Mstyles.OrderStatusTextItemIcon}>
                                                    <FiCheckCircle size={15} />
                                                </div>
                                                <div className={Mstyles.OrderStatusTextItemText}>
                                                    <span> {OrderData.OrderStatusText}</span>
                                                </div>
                                            </div>

                                        }




                                    </div>
                                </div>

                            </div>


                            <div className={Mstyles.UserCounterGid}>
                                <div className={Mstyles.UserCounterItem}>
                                    <div className={Mstyles.UserCounterItemA}>
                                        <span>₹{OrderData.FinalItemAmt}</span>
                                        <small>Order Total</small>
                                    </div>
                                    <div className={Mstyles.Counterimage}>
                                        <Image
                                            src={`/ttoalrupee.png`}
                                            alt="image"
                                            layout="responsive"
                                            placeholder='blur'
                                            width={50}
                                            height={50}
                                            quality={100}
                                            blurDataURL={blurredImageData}

                                        />
                                    </div>
                                </div>
                                <div className={Mstyles.UserCounterItem}>
                                    <div className={Mstyles.UserCounterItemA}>
                                        <span>₹{TotalPaidAmount}</span>
                                        <small>Amount Paid</small>
                                    </div>
                                    <div className={Mstyles.Counterimage}>
                                        <Image
                                            src={`/paidrupee.png`}
                                            alt="image"
                                            layout="responsive"
                                            placeholder='blur'
                                            width={50}
                                            height={50}
                                            quality={100}
                                            blurDataURL={blurredImageData}

                                        />
                                    </div>
                                </div>
                                <div className={Mstyles.UserCounterItem}>
                                    <div className={Mstyles.UserCounterItemA}>
                                        <span>₹{OrderData.FinalItemAmt - TotalPaidAmount}</span>
                                        <small>Amount Dues</small>
                                    </div>
                                    <div className={Mstyles.Counterimage}>
                                        <Image
                                            src={`/duerupee.png`}
                                            alt="image"
                                            layout="responsive"
                                            placeholder='blur'
                                            width={50}
                                            height={50}
                                            quality={100}
                                            blurDataURL={blurredImageData}

                                        />
                                    </div>
                                </div>
                                <div className={Mstyles.UserCounterItem}>
                                    <div className={Mstyles.UserCounterItemA}>
                                        <span>₹{TotalRefundedAmount}</span>
                                        <small>Amount Refunded</small>
                                    </div>
                                    <div className={Mstyles.Counterimage}>
                                        <Image
                                            src={`/returnrupee.png`}
                                            alt="image"
                                            layout="responsive"
                                            placeholder='blur'
                                            width={50}
                                            height={50}
                                            quality={100}
                                            blurDataURL={blurredImageData}

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={Mstyles.OrderStatusBoxABox}>
                                <div>


                                    <div className={Mstyles.OrderStatusBoxABoxItemBox}>
                                        <div className={Mstyles.OrderDetailsBox}>
                                            <div className={Mstyles.CartSummyboxA}>
                                                <div>
                                                    <div>
                                                        <span className={Mstyles.amttext}><small>ORDER ID : {OrderData._id}</small></span>
                                                    </div>
                                                    <div style={{ minHeight: '10px' }}></div>
                                                    <div>
                                                        <span className={Mstyles.amttext}>Order on {FormattedDateOrder}<small> ({OrderData.time})</small></span>
                                                    </div>
                                                   
                                                </div>
                                                <div style={{ minHeight: '10px' }}></div>

                                                <div className={Mstyles.CartSummyboxListBoxItem}>
                                                    <div className={Mstyles.CartSummyboxListBoxItemA}>
                                                        <span>Item total</span>
                                                    </div>
                                                    <div className={Mstyles.CartSummyboxListBoxItemB}>
                                                        <span className={Mstyles.amttext}>₹ {OrderData.Mprice}</span>
                                                    </div>
                                                </div>
                                                <div className={Mstyles.CartSummyboxListBoxItem}>
                                                    <div className={Mstyles.CartSummyboxListBoxItemA}>
                                                        <span>Delivery fee</span>

                                                    </div>
                                                    <div className={Mstyles.CartSummyboxListBoxItemB}>
                                                        <span className={Mstyles.amttext}>₹ {OrderData.Deliveryfee}</span>
                                                    </div>
                                                </div>
                                                <div className={Mstyles.CartSummyboxListBoxItem}>
                                                    <div className={Mstyles.CartSummyboxListBoxItemA}>
                                                        <span>Discount</span>

                                                    </div>
                                                    <div className={Mstyles.CartSummyboxListBoxItemB}>
                                                        <span className={Mstyles.amttext}>₹ {OrderData.Discount}</span>
                                                    </div>
                                                </div>
                                                <div style={{ minHeight: '10px' }}></div>
                                                <div className={Mstyles.deviderCart}></div>
                                                <div style={{ minHeight: '10px' }}></div>
                                                <div className={Mstyles.CartSummyboxListBoxItem}>
                                                    <div className={Mstyles.CartSummyboxListBoxItemA}>
                                                        <span>Grand total</span>
                                                        <div><small>Inclusive of all taxes</small></div>

                                                        <div style={{ minHeight: '20px' }}></div>
                                                        <div>
                                                            {OrderData.PayStatus === 0 &&
                                                                <div className={Mstyles.OrderStatusTextItem}
                                                                    style={{ backgroundColor: '#67EEA0', color: 'black' }}
                                                                >
                                                                    <div className={Mstyles.OrderStatusTextItemIcon}>
                                                                        <FaRupeeSign size={20} />
                                                                    </div>
                                                                    <div className={Mstyles.OrderStatusTextItemText}>
                                                                        <span>   {OrderData.PayStatusText}</span>
                                                                    </div>
                                                                </div>

                                                            }
                                                            {OrderData.PayStatus === 1 &&
                                                                <div className={Mstyles.OrderStatusTextItem}
                                                                    style={{ backgroundColor: '#52BE80', color: 'white' }}
                                                                >
                                                                    <div className={Mstyles.OrderStatusTextItemIcon}>
                                                                        <FaRupeeSign size={20} />
                                                                    </div>
                                                                    <div className={Mstyles.OrderStatusTextItemText}>
                                                                        <span>   {OrderData.PayStatusText}</span>
                                                                    </div>
                                                                </div>

                                                            }
                                                            {OrderData.PayStatus === 3 &&
                                                                <div className={Mstyles.OrderStatusTextItem}
                                                                    style={{ backgroundColor: '#F1C40F', color: 'black' }}
                                                                >
                                                                    <div className={Mstyles.OrderStatusTextItemIcon}>
                                                                        <FaRupeeSign size={20} />
                                                                    </div>
                                                                    <div className={Mstyles.OrderStatusTextItemText}>
                                                                        <span>   {OrderData.PayStatusText}</span>
                                                                    </div>
                                                                </div>

                                                            }

                                                            <div style={{ minHeight: '20px' }}></div>
                                                            <div>Payment Method :<span className={Mstyles.DeliveryTime}> {OrderData.PaymentType}</span>  </div>

                                                        </div>
                                                    </div>
                                                    <div className={Mstyles.CartSummyboxListBoxItemB}>
                                                        <span className={Mstyles.amttextSub}>₹ {OrderData.FinalItemAmt}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div style={{ minHeight: '20px' }}></div>
                                <div className={Mstyles.OrderStatusBoxABoxItemBox}>
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

                                                <span className={Mstyles.DeliveryTime}>Delivery Address :</span>
                                            </div>

                                            <div>
                                                <span style={{ fontWeight: 600 }}>Name : {AddressData.Name}</span>
                                            </div>
                                            <div>
                                                <span style={{ fontWeight: 500 }}>Contact Number : {AddressData.Mobile}</span>
                                            </div>
                                            <div>
                                                <span style={{ fontWeight: 500 }}>Address : {AddressData.Address},{AddressData.City},{AddressData.State} {AddressData.PinCode} (Landmark: {AddressData.Landmark})</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div style={{ minHeight: '20px' }}></div>
                                <div>
                                    <div className={Mstyles.MainTitleBoxCartA}>
                                        <div className={Mstyles.MainTitleBoxCartAIcon}>

                                            <IconButton aria-label="cart">
                                                <StyledBadge color="secondary" >
                                                    <FiShoppingBag />
                                                </StyledBadge>
                                            </IconButton>
                                        </div>
                                        Items in this order
                                    </div>
                                    <div style={{ minHeight: '10px' }}></div>
                                    {Object.keys(OrderItems).map((ItemKey, index) => (
                                        <div key={index} className={Mstyles.CartListItem}>
                                            <div className={Mstyles.CartListItemA}>
                                                <Link href={`/`} style={{ textDecoration: 'none' }}>
                                                    <div className={Mstyles.CartListItemAImg}>
                                                        <Image
                                                            src={`/608a.png`}
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
                                                        <span>{OrderItems[ItemKey].name}</span>
                                                    </div>
                                                    <div className={Mstyles.OtherDataBoxCart}>
                                                        <span>unit:  {OrderItems[ItemKey].UnitNumber}{OrderItems[ItemKey].UnitText}</span>
                                                    </div>



                                                    <div className={Mstyles.CartListItemContentPrice}>
                                                        <span>₹{OrderItems[ItemKey].price}</span>  <small><del>₹{OrderItems[ItemKey].mprice}</del></small>  x <small>{OrderItems[ItemKey].qty}</small>
                                                    </div>

                                                </div>

                                            </div>



                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>

                        <div className={Mstyles.OrderStatusBoxB}>
                            <div className={Mstyles.OnlyMobile}>
                                <div>
                                    {OrderData.OrderStatus === 0 &&
                                        <div className={Mstyles.OrderStatusTextItem}>
                                            <div className={Mstyles.OrderStatusTextItemIcon}>
                                                <FiShoppingBag size={15} />
                                            </div>
                                            <div className={Mstyles.OrderStatusTextItemText}>
                                                <span> {OrderData.OrderStatusText}</span>
                                            </div>
                                        </div>

                                    }
                                    {OrderData.OrderStatus === 1 &&
                                        <div className={Mstyles.OrderStatusTextItem}
                                            style={{ backgroundColor: '#67EEA0', color: 'black' }}
                                        >
                                            <div className={Mstyles.OrderStatusTextItemIcon}>
                                                <FiThumbsUp size={15} />
                                            </div>
                                            <div className={Mstyles.OrderStatusTextItemText}>
                                                <span> {OrderData.OrderStatusText}</span>
                                            </div>
                                        </div>

                                    }

                                    {OrderData.OrderStatus === 2 &&
                                        <div className={Mstyles.OrderStatusTextItem}
                                            style={{ backgroundColor: '#605957', color: 'yellow' }}
                                        >
                                            <div className={Mstyles.OrderStatusTextItemIcon}>
                                                <FiTruck size={15} />
                                            </div>
                                            <div className={Mstyles.OrderStatusTextItemText}>
                                                <span> {OrderData.OrderStatusText}</span>
                                            </div>
                                        </div>

                                    }


                                    {OrderData.OrderStatus === 3 &&
                                        <div className={Mstyles.OrderStatusTextItem}
                                            style={{ backgroundColor: '#52BE80', color: 'white' }}
                                        >
                                            <div className={Mstyles.OrderStatusTextItemIcon}>
                                                <FiCheckCircle size={15} />
                                            </div>
                                            <div className={Mstyles.OrderStatusTextItemText}>
                                                <span> {OrderData.OrderStatusText}</span>
                                            </div>
                                        </div>

                                    }

                                    {OrderData.OrderStatus === 4 &&
                                        <div className={Mstyles.OrderStatusTextItem}
                                            style={{ backgroundColor: '#FF0000', color: 'white' }}
                                        >
                                            <div className={Mstyles.OrderStatusTextItemIcon}>
                                                <FiX size={15} />
                                            </div>
                                            <div className={Mstyles.OrderStatusTextItemText}>
                                                <span> {OrderData.OrderStatusText}</span>
                                            </div>
                                        </div>

                                    }
                                    {OrderData.OrderStatus === 5 &&
                                        <div className={Mstyles.OrderStatusTextItem}
                                            style={{ backgroundColor: '#F1C40F', color: 'black' }}
                                        >
                                            <div className={Mstyles.OrderStatusTextItemIcon}>
                                                <FiRefreshCcw size={15} />
                                            </div>
                                            <div className={Mstyles.OrderStatusTextItemText}>
                                                <span> {OrderData.OrderStatusText}</span>
                                            </div>
                                        </div>

                                    }




                                </div>

                            </div>
                            <div className={Mstyles.OnlyMobile}>
                                <div style={{ minHeight: '20px' }}></div>
                            </div>
                            <div className={Mstyles.MainTitleBoxCartA}>
                                <div className={Mstyles.MainTitleBoxCartAIcon}>

                                    <IconButton aria-label="cart">
                                        <StyledBadge color="secondary" >
                                            <FiTruck />
                                        </StyledBadge>
                                    </IconButton>
                                </div>
                                Order Activity
                            </div>
                            <div style={{ minHeight: '20px' }}></div>
                            <div>
                                {!isLoadingOrderSList &&
                                    <div>
                                        {OrderSList.map((item) => {
                                            return <div className={Mstyles.TrakingTimelineItem} key={item._id}>
                                                <div>
                                                    <div>
                                                        <span><FiArrowRightCircle /></span> <span>{item.OrderText}</span>
                                                        <div className={Mstyles.TrakingTimelineItemDate}>
                                                            <small>{item.date}, {item.time}</small>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className={Mstyles.TrakingTimelineItemLine}>

                                                </div>


                                            </div>
                                        }

                                        )}
                                       
                                        <div>
                                            <div style={{ minHeight: '0px' }}></div>
                                            <span className={Mstyles.DeliveryTime}>{OrderData.ExpectedDelivery}</span>
                                        </div>
                                    </div>

                                }
                            </div>
                        </div>
                    </div>
                }
            </div>






        </OverviewWrapper>
    );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};
