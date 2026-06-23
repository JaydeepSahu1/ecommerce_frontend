import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Button, colors, Divider } from '@mui/material';
import { Add, AddShoppingCart, FavoriteBorder, Favorite, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Reviews/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../State/Customer/ProductSlice';


export const ProductDetails = () => {

  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch()
  const { productId } = useParams();
  const { product } = useAppSelector(store => store)
  const[activeImage,setActiveImage] = useState(0)

  useEffect(() => {
  if (productId) {
    // cast to any to satisfy thunk parameter typing
    dispatch(fetchProductById(productId as any));
  }
}, [productId]);

const handleActiveImage=(value:number)=>()=>{
  setActiveImage(value)
}

  return (
    <div className='px-5 lg:px-20 pt-10'>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

        <section className='flex flex-col lg:flex-row gap-5'>

          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
            {product.product?.images.map((item,index) => <img onClick={handleActiveImage(index)}
            className='lg:w-full w-[50px] cursor-pointer rounded-md'
              src={item}
              alt='' />)}


          </div>

          <div className='w-full lg:w-[85%]'>
            <img className='w-full rounded-md'
              src= {product.product?.images[activeImage]}
              alt='' />

          </div>

        </section>

        <section>
          <h1 className='font-bold text-lg text-primary-color'>
            RAM Clothing
          </h1>
          <p className='text-gray-500 font-semibold'>
            Men Blue T-Shirt
          </p>
          <div className='flex justify-between items-center py-2 border w-[180px] px-3 mt-5'>
            <div className='flex gap-1 items-center'>
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />

            </div>
            <Divider orientation='vertical' flexItem />
            <span>234 Ratings</span>
          </div>

          <div>
            <div className='price flex items-center gap-3 mt-5 text-2xl'>

              <span className='font-semibold text-gray-800'>
                ₹ 400
              </span>
              <span className='line-through text-gray-400'>
                mrp ₹ 999
              </span>
              <span className='text-primary-color font-semibold'>
                60% Off
              </span>
            </div>

            <p className='text-sm'>
              Inclusive of all taxes. Free Shipping above 1500.
            </p>
          </div>

          <div className='mt-7 space-y-3'>

            <div className='flex items-center gap-4'>
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>

            <div className='flex items-center gap-4'>
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back gaurantee</p>
            </div>

            <div className='flex items-center gap-4'>
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Return</p>
            </div>

            <div className='flex items-center gap-4'>
              <Wallet sx={{ color: teal[500] }} />
              <p>Cash on Delivery Avilable</p>
            </div>

          </div>

          <div className='mt-7 space-y-2'>

            <h1>Quantity</h1>

            <div className='flex items-center gap-2 w-[140px] justify-between'>

              <Button disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>
              <span>
                {quantity}
              </span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>

          </div>

          <div className='mt-12 flex items-center gap-5 '>

            <Button
              fullWidth
              variant='contained'
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}>
              Add to Cart
            </Button>

            <Button
              fullWidth
              variant='outlined'
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}>
              Add to WishList
            </Button>
          </div>

          <div className='mt-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio tempore, ullam fuga qui sed ratione debitis, asperiores adipisci quasi consequatur reprehenderit provident et odio magni itaque accusantium, earum ab. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero nam, officiis veniam consequuntur eius quaerat maxime sequi cupiditate earum odio dolorem, sed similique. Saepe modi laudantium necessitatibus, vero labore placeat.</p>
          </div>

          <div className='mt-12 space-y-5'>
            <ReviewCard />
            <Divider />
          </div>

        </section>

      </div>


      <div className='mt-20'>
        <h1 className='text-lg font-bold flex justify-center'>
          Similar Products
        </h1>
        <div className='pt-5'>
          <SimilarProduct />
        </div>
      </div>

    </div >
  )
}
