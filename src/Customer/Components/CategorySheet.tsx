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
import { useNavigate } from 'react-router-dom'


const categoryTwo:{[key:string]: any[]}={
  men: menLevelTwo,
  women: womenLevelTwo,
  home_kitchen: homeKitchenLevelTwo,
  electronics: electronicsLevelTwo
}

const categoryThree:{[key:string]: any[]} = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_kitchen: homeKitchenLevelThree
}

const CategorySheet = ({ selectedCategory,setShowSheet}:any) => {


  const childCategory = (category: any[], parentCategoryId: string) => {
    return category.filter((child: any) => child.parentCategoryId === parentCategoryId)
  }

  const navigate=useNavigate();

  return (
    <Box
      sx={{ zIndex: 2 }}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">

        {
          categoryTwo[selectedCategory]?.map((item,index) =>
            <div className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>

                <p className="text-primary-color mb-5 font-semibold">{item.name}</p>
                <ul className="space-y-3">
                  
                  {
                    childCategory(categoryThree[selectedCategory], item.categoryId).map((child) => (
                     
                      <li
                        onClick={()=>navigate("/products/"+item.categoryId)}
                        key={child.categoryId}
                        className="hover:text-primary-color cursor-pointer"
                      >
                        {child.name}
                      </li>
                    ))}
                </ul>
              </div>
        
          )}
      </div>
    </Box>
  )
}

export default CategorySheet
