import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>

      <Grid container spacing={7} >

        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar className='text-white sx={{width:56,heigth:56,bgcolor"#9155FD}}'>
              J
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 9 }}>
          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg'>
                Jaydeep
              </p>
              <p className='opacity-70'>
                2025-10-15
              </p>
            </div>
          </div>

          <Rating
            readOnly
            value={4.5}
            precision={.5}
          />
          <p>valur for money product,great product</p>

          <div>
            <img className='w-24 h-24 object-cover'
              src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjkTN65Vf9dSCZNKG06m-4TsuTeutwGlq6bV6l80_eJlh8TNcQjiqvFA0PKPZrx3zPjW5QKjNZX4gcSjBjP1rm7SW5DUxY-7Xm7dQzmuO6X41etUBcuIkMcDYZAwVGV_uoA7yHEoZP&usqp=CAc '
              alt="" />
          </div>

        </Grid>



      </Grid>

      <IconButton >
        <Delete sx={{color:red[700]}}/>
      </IconButton>

    </div>
  )
}

export default ReviewCard