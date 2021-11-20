import React from 'react';
import {Typography, LinearProgress } from '@mui/material';


const Payment = () => {
    return (
        <div>
            <Typography sx={{textAlign:'center', m:1, mt:2, color:"#900C3F"}} variant="h4" gutterBottom>Payment System Coming Soon!</Typography>
            <LinearProgress />
        </div>
    );
};

export default Payment;