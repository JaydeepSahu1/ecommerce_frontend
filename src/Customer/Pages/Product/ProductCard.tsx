import React, { useEffect, useState } from 'react'
import "./Productcard.css"
import { Button } from '@mui/material'
import { Favorite, ModeComment } from '@mui/icons-material'
import { teal } from '@mui/material/colors'


const images = ["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjkTN65Vf9dSCZNKG06m-4TsuTeutwGlq6bV6l80_eJlh8TNcQjiqvFA0PKPZrx3zPjW5QKjNZX4gcSjBjP1rm7SW5DUxY-7Xm7dQzmuO6X41etUBcuIkMcDYZAwVGV_uoA7yHEoZP&usqp=CAc",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCQAIKA8y4k9k_JpJ6lGQR5DCIgGFj8evztPbz4bbDSRqGwl_LFA3r1OFS81vf7yjy36cA9F7kugmVzUkAVYYhe0mcwpAc1o9yv2pWTSLtZJssicUmQgfGraKuy4AmBbp9RWs5rx03&usqp=CAc"]

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {

    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    }
    else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval)
  }, [isHovered]);

  return (
    <>
      <div className='group px-4 relative'>

        <div className='card'

          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) =>
            <img
              className='card-media object-top'
              src={item}
              alt=""
              style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
            />
          )}

          { isHovered && < div className='indicator flex flex-col items-center space-y-2'>

            <div className='flex gap-3'>
              <Button variant='contained' color='secondary'>
                <Favorite sx={{ color: teal[500] }} />

              </Button>
              <Button variant='contained' color='secondary'>
                <ModeComment sx={{ color: teal[500] }} />

              </Button>

            </div>
          </div>

          }
        </div>
          

        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
          <div className='name '>
            <h1>Nike</h1>
            <p>Blue Shirt</p>
          </div>
          <div className='price flex items-center gap-3'>

            <span className='font-semibold text-gray-800'>
              ₹ 400
            </span>
            <span className='thin-line-through text-gray-400'>
              mrp ₹ 999
            </span>
            <span className='text-primary-color font-semibold'>
              60%
            </span>
          </div>

        </div>
      </div>

    </>
  )
}

export default ProductCard