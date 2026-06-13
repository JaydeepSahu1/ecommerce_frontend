import { TextField } from '@mui/material'
import React from 'react'

const BecomSellerFormStep3 = ({formik}:any) => {
    return (
        <div className='space-y-5'>

            <TextField
                fullWidth
                name='bankDetails.accountNumber'
                label='Account Number'
                value={formik.values.bankDetails.accountNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
                helperText={formik.touched.gstbankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
            />

             <TextField
                fullWidth
                name='bankDetails.ifscCode'
                label='Ifsc Code'
                value={formik.values.bankDetails.ifscCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
                helperText={formik.touched.gstbankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
            />

            <TextField
                fullWidth
                name='bankDetails.accountHolderName'
                label='Account Holder Name'
                value={formik.values.bankDetails.accountHolderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
                helperText={formik.touched.gstbankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
            />


        </div>
    )
}

export default BecomSellerFormStep3