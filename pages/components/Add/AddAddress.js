import React, { useState, useEffect, useContext, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Mstyles from '../../../Styles/home.module.css'

import { Toast } from 'primereact/toast';
import { useRouter, useParams } from 'next/router'
import Image from 'next/image';

export default function ScrollDialog() {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [Title, SetTitle] = useState('');
    const [Name, setName] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [Landmark, setLandmark] = useState('');
    const [PinCode, setPinCode] = useState('');
    const [City, setCity] = useState('');
    const [States, setStates] = useState('');
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    const handleSubmit = (e) => {
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
                            router.push('/Checkout')
                            console.log(parsedUser)
                           
                        })
                } 
            } catch (error) {
                console.error(error)

            }
            
        } else {
            alert('All fields are required')
       }

    };

  



    return (
        <div>
            <Button
                onClick={handleClickOpen('paper')}
                size="small"
                variant="outlined"
                startIcon={<AddTwoToneIcon fontSize="small" />}
            >
                Add new
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
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
                            <label>Email Address</label>
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
        </div>
    );
}