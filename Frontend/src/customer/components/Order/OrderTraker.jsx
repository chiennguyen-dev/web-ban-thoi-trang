import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'

const steps = [
    "Đã đặt hàng",
    "Đã xác nhận đơn hàng", 
    "Đã vận chuyển",
    "Đang giao hàng",
    "Đã giao hàng"
];

const OrderTraker = ({ activeStep }) => {
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>

                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel sx={{color: "#9155FD", fontSize: "44px"}}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default OrderTraker
