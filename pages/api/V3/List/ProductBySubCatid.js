import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {

        axios.post(`${process.env.API_URL}Products/ProductBySubCatid`, { token: process.env.MYKEY, subcatid: req.body.subcatid }).then((response) => {
           
            res.status(200).json({ ReqD: response.data })

        });

    } else {
        res.status(200).json({ ReqS: 'invalid entry' });
    }
}