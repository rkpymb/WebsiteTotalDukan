import { MediaFilesUrl, MediaFilesFolder } from '/Data/config'
import { FiShare2, FiXCircle } from "react-icons/fi";
import React, { useState, useEffect, useContext } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import {
    Typography,
    Box,
    Card,
    Container,
    Button,
    styled
} from '@mui/material';
import Mstyles from '/Styles/home.module.css'
import { ShareSocial } from 'react-share-social'
const Sharebtn = () => {
    const [ShowShare, setShowShare] = useState(false);
    const [Shareurl, setShareurl] = useState();

    useEffect(() => {
        setShareurl(window.location.href)
    }, []);


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const style = {
        root: {
            background: 'transparent',


        },
       
      
    };

    return (
        <div>
            <Button
                fullWidth
                onClick={() => setShowShare(true)}
                size="small"
                variant="outlined"
                startIcon={<FiShare2 fontSize="small" />}
            >
                Share
            </Button>
            {ShowShare &&
                <div className={Mstyles.ShareBox}>
                    <div className={Mstyles.ShareBoxHeader}>
                        <div className={Mstyles.ShareBoxHeaderA}>
                            <h3>Share Product</h3>
                        </div>
                        <div className={Mstyles.ShareBoxHeaderB}>
                            <IconButton aria-label="cart" onClick={() => setShowShare(false)}>
                                <StyledBadge color="secondary" >
                                    <FiXCircle />
                                </StyledBadge>
                            </IconButton>
                        </div>
                    </div>
                    <div>
                        <ShareSocial
                            style={style}
                            url={Shareurl}
                            socialTypes={['whatsapp', 'facebook', 'twitter','telegram']}
                        />
                    </div>
                </div>
            }


        </div>
    )
}

export default Sharebtn
