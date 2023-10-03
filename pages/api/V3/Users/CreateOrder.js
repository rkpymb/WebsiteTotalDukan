import axios from 'axios';
import CryptoJS from 'crypto-js';
export default function handler(req, res) {
    if (req.method === 'POST') {
        let ReqStatus = false;
        // console.log(req.body.JwtToken)
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${req.body.JwtToken}`,
        };

        axios.post(`${process.env.API_URL}student/CreateOrder`, { token: process.env.MYKEY, Mprice: req.body.Mprice, TotalItemAmt: req.body.TotalItemAmt, FinalItemAmt: req.body.FinalItemAmt, Deliveryfee: req.body.Deliveryfee, Discount: req.body.Discount, Coupon: req.body.Coupon, PaymentType: req.body.PaymentType, Paymentid: req.body.Paymentid, refid: req.body.refid, OrderStatus: req.body.OrderStatus, PayStatus: req.body.PayStatus, OrderStatusText: req.body.OrderStatusText, PayStatusText: req.body.PayStatusText, CartList: req.body.CartList, OrderTitle: req.body.OrderTitle, AddressID: req.body.AddressID, ExpectedDelivery: req.body.ExpectedDelivery }, { headers}).then((response) => {
            console.log(response.data)
            res.status(200).json({ReqData: response.data });
        });

    } else {
        res.status(200).json({ ReqS: ReqStatus });
    }
}