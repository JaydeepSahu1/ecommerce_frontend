import React, { useEffect, useMemo, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from '@mui/icons-material';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Reviews/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../State/Customer/ProductSlice';

export const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const dispatch = useAppDispatch();

  const { product, loading, error } = useAppSelector((store) => store.product);

  const { productid } = useParams();

useEffect(() => {
  if (productid) {
    console.log("Fetching product with id:", productid);
    dispatch(fetchProductById(productid));
  }
}, [dispatch, productid]);

  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
  }, [product]);

  const images = useMemo(() => {
    if (!product?.images || !Array.isArray(product.images)) return [];
    return product.images.filter(Boolean);
  }, [product]);

  const activeImageSrc =
    images.length > 0 ? images[Math.min(activeImage, images.length - 1)] : '';

  const handleActiveImage = (value: number) => () => {
    setActiveImage(value);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) {
    return <p className="px-5 lg:px-20 pt-10">Loading product details...</p>;
  }

  if (error) {
    return (
      <p className="px-5 lg:px-20 pt-10 text-red-500">
        Error loading product: {error}
      </p>
    );
  }

  if (!product) {
    return (
      <p className="px-5 lg:px-20 pt-10 text-gray-500">
        Product details not found.
      </p>
    );
  }

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Images */}
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {images.length > 0 ? (
              images.map((img, index) => (
                <img
                  key={index}
                  onClick={handleActiveImage(index)}
                  className={`lg:w-full w-[60px] h-[60px] object-cover cursor-pointer rounded-md border ${
                    activeImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  src={img}
                  alt={`${product?.title || 'Product'}-${index}`}
                />
              ))
            ) : (
              <div className="text-sm text-gray-400">No images</div>
            )}
          </div>

          <div className="w-full lg:w-[85%]">
            {activeImageSrc ? (
              <img
                className="w-full max-h-[500px] object-contain rounded-md border"
                src={activeImageSrc}
                alt={product?.title || 'Product'}
              />
            ) : (
              <div className="w-full h-[350px] rounded-md border flex items-center justify-center text-gray-400">
                No product image available
              </div>
            )}
          </div>
        </section>

        {/* Details */}
        <section>
          <h1 className="font-bold text-lg text-primary-color">
            {product?.seller?.businessDetails?.businessName || 'Seller'}
          </h1>

          <p className="text-gray-700 font-semibold text-xl mt-1">
            {product?.title || 'Product Title'}
          </p>

          {/* Ratings */}
          <div className="flex justify-between items-center py-2 border w-[190px] px-3 mt-5 rounded-md">
            <div className="flex gap-1 items-center">
              <span>{product?.numRating ?? 0}</span>
              <StarIcon sx={{ color: teal[500], fontSize: '17px' }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>{product?.numRating ?? 0} Ratings</span>
          </div>

          {/* Price */}
          <div className="mt-5">
            <div className="price flex items-center gap-3 text-2xl flex-wrap">
              <span className="font-semibold text-gray-800">
                ₹ {product?.sellingPrice ?? 0}
              </span>

              {product?.mrpPrice && (
                <span className="line-through text-gray-400">
                  ₹ {product.mrpPrice}
                </span>
              )}

              {product?.discountPercentage ? (
                <span className="text-primary-color font-semibold">
                  {product.discountPercentage}% Off
                </span>
              ) : null}
            </div>

            <p className="text-sm text-gray-600 mt-1">
              Inclusive of all taxes. Free Shipping above 1500.
            </p>
          </div>

          {/* Guarantees */}
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Return</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Cash on Delivery Available</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7 space-y-2">
            <h1 className="font-medium">Quantity</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between border rounded-md px-2 py-1">
              <Button disabled={quantity === 1} onClick={handleDecrease}>
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={handleIncrease}>
                <Add />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: '1rem' }}
            >
              Add to Cart
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: '1rem' }}
            >
              Add to WishList
            </Button>
          </div>

          {/* Description */}
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-gray-700">
              {product?.description || 'No description available.'}
            </p>
          </div>

          {/* Reviews */}
          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>

      {/* Similar Products */}
      <div className="mt-20">
        <h1 className="text-lg font-bold flex justify-center">Similar Products</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};