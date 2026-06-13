import { Label } from '@mui/icons-material';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react'
import BecomeSellerFormStep1 from './BecomeSellerFormStep1';
import { useFormik } from 'formik';
import BecomSellerFormStep2 from './BecomSellerFormStep2';
import BecomSellerFormStep3 from './BecomSellerFormStep3';
import BecomSellerFormStep4 from './BecomSellerFormStep4';

const SellerAccountForm = () => {

    const [activeStep, setActiveStep] = useState(0);

    const step = [
        "Tax Details & Mobile",
        "Pickup Address",
        "Bank Details",
        "Supplier Details"
    ];

    const handleStep = (value: number) => {
        (activeStep < step.length || (activeStep > 0 && value == -1)) && setActiveStep(activeStep + value);
        activeStep == (step.length) && handleCreateAccount();
        console.log("active step :" + activeStep)
    };

    const handleCreateAccount = () => {

        console.log("create account")
    };

    const formik = useFormik({
        initialValues: {
            mobile: '',
            otp: '',
            gstin: '',
            pickupAddress: {
                name: "",
                mobile: "",
                pincode: "",
                address: "",
                locality: "",
                city: "",
                state: "",
            },
            bankDetails: {
                accountNumber: "",
                ifscCode: "",
                accountHolderName: ""
            },
            SellerName: "",
            email: "",
            businessDetails: {
                businessName: "",
                businessEmail: "",
                businessMobile: "",
                logo: "",
                banner: "",
                businessAddress: ""
            },
            password: ""

        },
        // validationSchema: FormSchema,
        onSubmit: (values) => {
            console.log(values, "formik submitted");
        },
    })

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>

                {step.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}

            </Stepper>

            <section className='mt-20 space-y-10'>

                <div >
                    {activeStep == 0 ? <BecomeSellerFormStep1 formik={formik} /> :
                        activeStep == 1 ? <BecomSellerFormStep2 formik={formik} /> :
                            activeStep == 2 ? <BecomSellerFormStep3 formik={formik} /> :
                                <BecomSellerFormStep4 formik={formik} />}
                </div>



                <div className='flex items-center justify-between'>

                    <Button
                        onClick={() => handleStep(-1)}
                        variant="contained" disabled={activeStep == 0}>
                        Back
                    </Button>

                    <Button
                        onClick={() => handleStep(1)}
                        variant="contained">
                        {activeStep == (step.length - 1) ?
                            "Create Account" : "Continue"
                        }

                    </Button>

                </div>

            </section>



        </div>
    )
}

export default SellerAccountForm