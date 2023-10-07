import CheckloginContext from './CheckloginContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CryptoJSKEY } from '../../Data/config'

import CryptoJS from "crypto-js";
const CheckloginStates = (props) => {
    const [Data, setData] = useState({});
    const [IsLogin, setIsLogin] = useState(false);
    const [OpenSerch, setOpenSerch] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [ItemsinCart, setItemsinCart] = useState(0);
    const [ProfileDone, setProfileDone] = useState(0);
    const [cart, setCart] = useState({});

    const [subTotal, setSubTotal] = useState(0);
    const [JwtToken, setJwtToken] = useState(null);
    const [userlog, setUserlog] = useState({ value: null });
    const [userlogData, setUserlogData] = useState();
    const [FinalDiscount, setFinalDiscount] = useState(0);
    const [ExpectedDelivery, setExpectedDelivery] = useState('Expected Delivery 26/09/2023 11:00 AM');
    const [AmtWithoutDiscount, setAmtWithoutDiscount] = useState(0);
    const [Deliveryfee, setDeliveryfee] = useState(1);
    const [DeliveryTime, setDeliveryTime] = useState('30- 40 min');
    const [userlogst, setUserlogst] = useState(false);
    const router = useRouter()

    useEffect(() => {
        console.log('oo')
        if (localStorage.getItem('Token')) {
            setIsLogin(true)
            const JwtTokenx = localStorage.getItem('Token');
            setJwtToken(JwtTokenx)
            const sendUser = { JwtToken: JwtTokenx }

            const data = fetch("/api/V2/auth/Checklogin", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUser)
            }).then((a) => {
                return a.json();
            })
                .then((parsedUser) => {
                    if (parsedUser.ReqS == true) {
                        const NTok = parsedUser.RetD;
                        decryptData(NTok)

                    } else {
                        alert('Something went wrong, Please Login again')
                        setIsLogin(false)
                        localStorage.clear()
                    }

                })
        } else {
            setIsLogin(false)
        }
       
      

    }, [router.query]);
    useEffect(() => {
        // cart
        try {
            if (localStorage.getItem('cart')) {
                setCart(JSON.parse(localStorage.getItem('cart')))
                saveCart(JSON.parse(localStorage.getItem('cart')))
            }
        } catch (error) {
            console.error(error)
            localStorage.clear()
        }



    }, [router.query]);
  

    // cart functions
    const saveCart = (myCart) => {
        localStorage.setItem("cart", JSON.stringify(myCart));
        let subt = 0;
        let keys = Object.keys(myCart);
        for (let i = 0; i < keys.length; i++) {
            subt += myCart[keys[i]].price * myCart[keys[i]].qty;
        }

        let MpriceTotal = 0;
        let keysM = Object.keys(myCart);
        for (let i = 0; i < keysM.length; i++) {
            MpriceTotal += myCart[keysM[i]].mprice * myCart[keysM[i]].qty;
        }
        setAmtWithoutDiscount(MpriceTotal)
        setSubTotal(subt)
        setItemsinCart(keys.length)
    }

    const addtoCart = (itemCode, qty, price, name, itemImg, UnitNumber, UnitText, mprice, item) => {
        let newCart = cart;

        if (itemCode in cart) {
            newCart[itemCode].qty = cart[itemCode].qty + qty
        } else {
            newCart[itemCode] = { proid: itemCode, qty: 1, price, name, itemImg, UnitNumber, UnitText, mprice,itemdata: item }
        }
        setCart(newCart);
        saveCart(newCart);
        // alert(name+' added to cart successfully')
    }

    const clearCart = () => {
        setCart({});
        saveCart({});
        console.log('cart cleared')
    }
    const removeFromCart = (itemCode, qty) => {
        let newCart = cart;
        if (itemCode in cart) {
            newCart[itemCode].qty = cart[itemCode].qty - qty
        }
        if (newCart[itemCode].qty <= 0) {
            delete newCart[itemCode]
        }
        setCart(newCart);
        saveCart(newCart);

        // alert(name+'removed from cart')
    }
    const FInalremoveFromCart = (itemCode, qty) => {
        let newCart = cart;
        delete newCart[itemCode]
        setCart(newCart);
        saveCart(newCart);

       
    }

    const decryptData = (e) => {
        const bytes = CryptoJS.AES.decrypt(e, CryptoJSKEY);
        const dataNew = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(dataNew.isActive)
        setData(dataNew)
        CheckisProfileComplete(dataNew)        
    };
    const CheckisProfileComplete = (UserD) => {
        if (UserD.email == '') {
            setProfileDone(true)
            
        }
    };
    const ChangeCurrentQuestion = (e) => {
        setCurrentQuestion(e)
    };
    const Logout = (e) => {
        let text = "Do you really want to logout ?";
        if (confirm(text) == true) {
            localStorage.clear()
            router.push('/')
        } 
    };


    // cart functions

    return (
        <CheckloginContext.Provider value={{ Data, IsLogin, ProfileDone, currentQuestion, ChangeCurrentQuestion, ItemsinCart, addtoCart, removeFromCart, clearCart, cart, subTotal, setCart, FInalremoveFromCart, setSubTotal, FinalDiscount, setFinalDiscount, Deliveryfee, DeliveryTime, AmtWithoutDiscount, ExpectedDelivery, Logout, JwtToken, setJwtToken }}>
            {props.children}
        </CheckloginContext.Provider>
    )

}
export default CheckloginStates;