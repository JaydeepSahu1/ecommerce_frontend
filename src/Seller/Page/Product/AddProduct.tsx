import React, { useState } from 'react'
import { menLevelTwo } from '../../../Data/Category/LevelTwo/MenLevelTwo'
import { womenLevelTwo } from '../../../Data/Category/LevelTwo/WomenLevelTwo'
// import { electronicsLevelTwo } from '../../../Data/Category/LevelTwo/ElectronicsLevelTwo'
import { menLevelThree } from '../../../Data/Category/LevelThree/MenLevelThree'
import { womenLevelThree } from '../../../Data/Category/LevelThree/WomenLevelThree'
import { electronicsLevelThree } from '../../../Data/Category/LevelThree/ElectronicsLevelThree'
import { useFormik } from 'formik'
import { uploadToCloudinary } from '../../../Util/uploadtocloudinary'
import { CircularProgress, Grid, IconButton } from '@mui/material'
import { AddPhotoAlternate } from '@mui/icons-material'
import { homeKitchenLevelTwo } from '../../../Data/Category/LevelTwo/HomeLevelTwo'
import { electronicsLevelTwo } from '../../../Data/Category/LevelTwo/ElectronicLevelTwo'
import { homeKitchenLevelThree } from '../../../Data/Category/LevelThree/Home&KitchenLevelThree'

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: homeKitchenLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
}

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: homeKitchenLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
}

const AddProductForm = () => {
  const [uploadImage, setUploadingImage] = useState(false);

  const [snackbarOpen, setOpenSnackbar] = useState(false);

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
      console.log(values)
    },
  })

  const handleImagesChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await uploadToCloudinary(file);

    formik.setFieldValue("images",[...formik.values.images,image]);
    setUploadingImage(false);
  }


  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages)
  }

  const childCategory =(category:any,parentCateoryId:any)=>
  {
    return category.filter((child:any)=>{
      // 
      return child.parentCategoryId == parentCategoryId;
    })
  }



return (
  <div>
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
      <Grid container spacing={2}>
        <Grid item xs={12} className="flex flex-wrap gap-5">
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleImagesChange}
          />

          <label className="relative" htmlFor="fileInput">
            <span className="w-24 h-24 cursor-pointer flex items-center justify-center
              p-3 border rounded-md border-gray-400">
              <AddPhotoAlternate className="text-gray-700" />
            </span>
            {uploadImage && (
              <div className="absolute left-0 right-0 bottom-0 w-24 h-24 flex justify-center items-center">
                <CircularProgress />
              </div>
            )}
          </label>

          <div className="flex flex-wrap gap-2">
            {formik.values.images.map((img, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={image}
                  alt={`ProductImage ${index + 1}`}
                  className="w-24 h-24 object-cover"
                  key={index}
                />
                <IconButton
                  onClick={()=>handleRemoveImage(index)}
                  className=''
                  size='small'
                  color='error'
                  sx={{position : 'absolute',
                    top:0,
                    right:0,

                  }}
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </form>
  </div>
)
}

export default AddProductForm
