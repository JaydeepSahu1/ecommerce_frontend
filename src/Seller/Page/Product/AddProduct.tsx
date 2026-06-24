import React, { useState } from 'react';
import { menLevelTwo } from '../../../Data/Category/LevelTwo/MenLevelTwo';
import { womenLevelTwo } from '../../../Data/Category/LevelTwo/WomenLevelTwo';
import { menLevelThree } from '../../../Data/Category/LevelThree/MenLevelThree';
import { womenLevelThree } from '../../../Data/Category/LevelThree/WomenLevelThree';
import { electronicsLevelThree } from '../../../Data/Category/LevelThree/ElectronicsLevelThree';
import { useFormik } from 'formik';
import { uploadToCloudinary } from '../../../Util/uploadtocloudinary';
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { homeKitchenLevelTwo } from '../../../Data/Category/LevelTwo/HomeLevelTwo';
import { electronicsLevelTwo } from '../../../Data/Category/LevelTwo/ElectronicLevelTwo';
import { homeKitchenLevelThree } from '../../../Data/Category/LevelThree/Home&KitchenLevelThree';
import Grid from '@mui/material/Grid';
import { colors } from '../../../Data/Filter/color';
import { mainCategory } from '../../../Data/Category/maincatergory';
import { useAppDispatch } from '../../../State/Store';
import { createProduct } from '../../../State/Seller/sellerProductSlice';

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: homeKitchenLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: homeKitchenLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
};

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const AddProductForm = () => {
  const [uploadImage, setUploadingImage] = useState(false);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      mrpPrice: '',
      sellingPrice: '',
      quantity: '',
      color: '',
      images: [] as string[],
      category: '',
      category2: '',
      category3: '',
      sizes: '',
    },
    onSubmit: (values) => {
      console.log('Submitting product:', values);
      dispatch(
        createProduct({
          request: values,
          jwt: localStorage.getItem('jwt'),
        })
      );
    },
  });

  const handleImagesChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);

    try {
      const imageUrl = await uploadToCloudinary(file);

      console.log('Cloudinary image URL:', imageUrl);

      if (!imageUrl) {
        console.error('No image URL returned from Cloudinary');
        return;
      }

      formik.setFieldValue('images', [...formik.values.images, imageUrl]);
    } catch (error) {
      console.error('Image upload failed:', error);
    } finally {
      setUploadingImage(false);
      event.target.value = '';
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid container spacing={2}>
          {/* Image Upload */}
          <Grid size={{ xs: 12 }} className="flex flex-wrap gap-5">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleImagesChange}
            />

            <label className="relative" htmlFor="fileInput">
              <span
                className="w-24 h-24 cursor-pointer flex items-center justify-center
                p-3 border rounded-md border-gray-400"
              >
                <AddPhotoAlternate className="text-gray-700" />
              </span>

              {uploadImage && (
                <div className="absolute left-0 right-0 bottom-0 w-24 h-24 flex justify-center items-center bg-white/70 rounded-md">
                  <CircularProgress size={28} />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-md border"
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: '#f5f5f5' },
                    }}
                  >
                    <Close sx={{ fontSize: '1rem' }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>

          {/* Title */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>

          {/* Description */}
          <Grid size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description &&
                Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid>

          {/* MRP Price */}
          <Grid size={{ xs: 12, md: 3, lg: 4 }}>
            <TextField
              fullWidth
              id="mrp_price"
              name="mrpPrice"
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid>

          {/* Selling Price */}
          <Grid size={{ xs: 12, md: 3, lg: 4 }}>
            <TextField
              fullWidth
              id="selling_price"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice && formik.errors.sellingPrice
              }
              required
            />
          </Grid>

          {/* Quantity */}
          <Grid size={{ xs: 12, md: 3, lg: 4 }}>
            <TextField
              fullWidth
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
              required
            />
          </Grid>

          {/* Color */}
          <Grid size={{ xs: 12, md: 3, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {colors.map((color, index) => (
                  <MenuItem key={index} value={color.name}>
                    <div className="flex gap-3 items-center">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className={`h-5 w-5 rounded-full ${
                          color.name === 'White' ? 'border' : ''
                        }`}
                      />
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Sizes */}
          <Grid size={{ xs: 12, md: 3, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                name="sizes"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                label="Sizes"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.sizes && formik.errors.sizes && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Main Category */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Main Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                label="Main Category"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue('category2', '');
                  formik.setFieldValue('category3', '');
                }}
              >
                {mainCategory.map((item) => (
                  <MenuItem key={item.categoryId} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Category 2 */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={
                formik.touched.category2 && Boolean(formik.errors.category2)
              }
              disabled={!formik.values.category}
              required
            >
              <InputLabel id="category2-label">Category 2</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue('category3', '');
                }}
                label="Category 2"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {categoryTwo[
                  formik.values.category as keyof typeof categoryTwo
                ]?.map((item) => (
                  <MenuItem key={item.categoryId} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>

              {formik.touched.category2 && formik.errors.category2 && (
                <FormHelperText>{formik.errors.category2}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Category 3 */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={
                formik.touched.category3 && Boolean(formik.errors.category3)
              }
              disabled={!formik.values.category2}
              required
            >
              <InputLabel id="category3-label">Category 3</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Category 3"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {categoryThree[
                  formik.values.category as keyof typeof categoryThree
                ]
                  ?.filter(
                    (child) =>
                      String(child.parentCategoryId) ===
                      String(formik.values.category2)
                  )
                  .map((item) => (
                    <MenuItem key={item.categoryId} value={item.categoryId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>

              {formik.touched.category3 && formik.errors.category3 && (
                <FormHelperText>{formik.errors.category3}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Submit */}
          <Grid size={{ xs: 12 }}>
            <Button
              sx={{ p: '14px' }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disabled={formik.isSubmitting || uploadImage}
            >
              {formik.isSubmitting || uploadImage ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'Add Product'
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProductForm;