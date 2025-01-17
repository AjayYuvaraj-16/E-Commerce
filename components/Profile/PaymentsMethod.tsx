'use client';
import React from 'react'
import { pxToRem } from '@/utils/remPxConverter';
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
const PaymentsMethod = () => {


    const PaymentButton = styled(Button)({
        paddingLeft: pxToRem(48),
        paddingRight: pxToRem(48),
        paddingTop: pxToRem(12),
        paddingBottom: pxToRem(12),
        borderRadius: 6,
    });

    
  return (
    <div>
      
    </div>
  )
}

export default PaymentsMethod
