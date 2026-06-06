import React from 'react'
import { menLevelTwo } from '../../Data/Category/Level Two/MenLevelTwoo'
import { womenLevelTwo } from '../../Data/Category/Level Two/WomenLevelTwoo'
import { homeKitchenLevelTwo } from '../../Data/Category/Level Two/HomeLevelTwo'
import { electronicsLevelTwo } from '../../Data/Category/Level Two/ElectronicLevelTwo'
import { menLevelThree } from '../../Data/Category/LevelThree/MenLevelThree'
import { womenLevelThree } from '../../Data/Category/LevelThree/WomenLevelThree'
import { electronicsLevelThree } from '../../Data/Category/LevelThree/ElectronicsLevelThree'
import { homeKitchenLevelThree } from '../../Data/Category/LevelThree/Home&KitchenLevelThree'
import { Box } from '@mui/material'

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  home_kitchen: homeKitchenLevelTwo,
  electronics: electronicsLevelTwo

}

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_kitchen: homeKitchenLevelThree
}

const CategorySheet = () => {
  return (
    <Box className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className='flex text-sm flex-wrap'>
        {
          categoryTwo["men"]?.map((item) => <div>
            <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
          </div>)
        }
      </div>
    </Box>
  )
}

export default CategorySheet