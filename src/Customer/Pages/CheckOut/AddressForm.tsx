import { Box, Button, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const AddressFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().required("Mobile is required").matches(/^[6-9]\d{9}$/,"Invalid Mobile No."),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode:Yup.string().required("PinCode is required").matches(/^[1-9][0-9]{5}$/,"Invalid Pin Code")
})

const AddressForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            address: '',
            city: '',
            pincode: '',
            state: ''
        },
        validationSchema: AddressFormSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <div>
            <Box sx={{ max: "auto" }}>

                <p className='text-xl font-bold text-center pb-5'>Contact Details</p>

                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                name='name'
                                label='Name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />

                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                fullWidth
                                name='mobile'
                                label='mobile'
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                helperText={formik.touched.mobile && formik.errors.mobile}
                            />

                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                name='address'
                                label='address'
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />

                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                fullWidth
                                name='city'
                                label='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />

                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                fullWidth
                                name='pincode'
                                label='pincode'
                                value={formik.values.pincode}
                                onChange={formik.handleChange}
                                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                                helperText={formik.touched.pincode && formik.errors.pincode}
                            />

                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                fullWidth
                                name='state'
                                label='state'
                                value={formik.values.state}
                                onChange={formik.handleChange}
                                error={formik.touched.state && Boolean(formik.errors.state)}
                                helperText={formik.touched.state && formik.errors.state}
                            />

                        </Grid>

                        <Grid size={{xs:12}}>
                            <Button fullWidth type="submit" variant='contained' sx={{py:"14px"}}>
                                Save Address
                            </Button>
                        </Grid>


                    </Grid>

                </form>

            </Box>

        </div>
    )
}

export default AddressForm