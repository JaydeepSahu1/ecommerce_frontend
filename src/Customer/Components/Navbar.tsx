import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { AddShoppingCart, AvTimer, Favorite, FavoriteBorder, Search, Storefront } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategorySheet from './CategorySheet';
import zIndex from '@mui/material/styles/zIndex';
import { mainCategory } from '../../Data/Category/maincatergory';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategorySheet, setShowCategorySheet] = useState(false);

    const navigate=useNavigate();

    return (
        <>
            <Box className="sticky top-0 left-0 right-0 bg-white "
                sx={{ zIndex: 1000 }}>

                <div className='flex items-center justify-between px-5 lg:px-20 
                    h-[70] border-b'>
                    <div className='flex items-center gap-9'>
                        <div className='flex items-center gap-2'>
                            {!isLarge && <IconButton>
                                <MenuOpenIcon />
                            </IconButton>}
                            <h1 onClick={()=>navigate("/")}
                             className='logo cursor-pointer text-lg md:text-2xl text-primary-color'>
                                Shani Bazzar
                            </h1>
                        </div>

                        <ul className='flex items-center font-medium text-gray-800 '>
                            {mainCategory.map((item) =>
                                <li
                                    onMouseLeave={() => {
                                        setShowCategorySheet(true);
                                        setSelectedCategory(item.categoryId);
                                    }}
                                    className='mainCategory hover:text-primary-color 
                                hover:border-b-2 h-[70px] px-4 border-primary-color
                                flex items-center'>
                                    {item.name}
                                </li>)}

                        </ul>
                    </div>
                    <div className='flex gap-1 lg:gap-6 items-center'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>

                        {
                            true ? <Button 
                            onClick={()=>navigate("/account")}
                            className='flex item-center gap-2'>
                                <Avatar
                                    sx={{ width: 29, height: 29 }}
                                    src='https://img.freepik.com/premium-vector/man-character_665280-46970.jpg' />
                                <h1 className='font-semibold hidden lg:block'>
                                    Jaydeep
                                </h1>
                            </Button> : <Button variant='contained'>Login</Button>
                        }
                        <IconButton>
                            <FavoriteBorder sx={{ fontSize: 29 }} />
                        </IconButton>
                        <IconButton onClick={()=>navigate("/cart")}>
                            <AddShoppingCart className='text-gray-700' sx={{ fontSize: 29 }} />
                        </IconButton>
                        {
                            isLarge && 
                            <Button 
                            onClick={()=>navigate("/become-seller")}
                            startIcon={<Storefront />} variant='outlined'>
                                Become Seller
                            </Button>
                        }
                    </div>
                </div>
                {
                    showCategorySheet && 
                    <div 
                onMouseLeave={()=>setShowCategorySheet(false)}
                onMouseEnter={()=>setShowCategorySheet(true)}
                className='categorySheet absolute top-[4,41rem] left-20 right-20 border'>
                    <CategorySheet selectedCategory={selectedCategory} />
                </div>}
            </Box>
        </>
    )
}

export default Navbar