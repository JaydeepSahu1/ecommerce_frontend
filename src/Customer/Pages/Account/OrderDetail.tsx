import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper'
import { Payments } from '@mui/icons-material'

const OrderDetail = () => {

    const navigate = useNavigate()

    return (
        <Box className='space-y-5'>

            <section className='flex flex-col gap-5 justify-center items-center'>
                <img className='w-[100px]'
                    src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjkTN65Vf9dSCZNKG06m-4TsuTeutwGlq6bV6l80_eJlh8TNcQjiqvFA0PKPZrx3zPjW5QKjNZX4gcSjBjP1rm7SW5DUxY-7Xm7dQzmuO6X41etUBcuIkMcDYZAwVGV_uoA7yHEoZP&usqp=CAc '
                    alt='' />
                <div className='text-sm space-y-1 text-center'>
                    <h1 className='font-bold'>Ram Clothing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro placeat architecto excepturi, quisquam harum modi fuga dignissimos obcaecati sequi?</p>
                    <p><strong>Size : </strong>Large</p>
                </div>
                <div>
                    <Button onClick={() => navigate(`/review/${5}/create`)}>
                        Write a Review
                    </Button>
                </div>
            </section>

            <section className='=border p-5'>
                <OrderStepper orderStatus={"SHIPPED"}/>
            </section>

            <div className='border p-5'>
                <h1 className='font-bold pb-3'>
                    Delivery Address
                </h1>
                <div className='text-sm space-y-2'>
                    <div className='flex gap-5 font-medium'>
                        <p>{"RAM COTHING"}</p>
                        <Divider flexItem orientation='vertical'/>
                        <p>{7489896389}</p>
                    </div>

                    <p> Adress Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
            </div>

            <div className='border space-y-4'>
                
                <div className='flex justify-between text-sm pt-5 px-5'>
                    <div className='space-y-1'>
                        <p className='font-bold'>Total Price</p>
                        <p>You saved <span className='text-green-500 font-medium text-xs'>
                            rs.400</span> on this order.</p>
                    </div>

                    <p className='font-medium'>
                        rs.999
                    </p>
                </div>

                <div className='px-5'>
                    <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
                        <Payments/>
                        <p>Pay on Delivery</p>
                    </div>

                </div>

                <Divider/>

                <div className='px-5 pb-5'>
                    <p className='text-xs'><strong>Sold By : </strong>Ram Clothing</p>
                </div>

                <div className='p-10'>
                    <Button 
                    disabled={false}
                    // onclick={handleCancelOrder}
                    color='error' sx={{py:"0.7rem"}} className='' variant='outlined' fullWidth
                    >
                        { false ? "Order canceled":"Cancel Order"}
                    </Button>
                </div>
    
            </div>

        </Box>
    )
}

export default OrderDetail