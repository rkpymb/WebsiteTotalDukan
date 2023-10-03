import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {

        axios.post(`${process.env.API_URL}Products/Productsbycatid`, { token: process.env.MYKEY, catid :req.body.catid}).then((response) => {
           
            res.status(200).json({ ReqD: response.data })

        });

    } else {
        res.status(200).json({ ReqS: 'invalid entry' });
    }
}