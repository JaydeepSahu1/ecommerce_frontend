import React from 'react'
import "../Product/Productcard.css";


const SimilarProductCard = () => {
  return (
    <div className='group px-4 relative'>

        <div className='card'
        >
        
            <img
              className='card-media object-top'
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCQAIKA8y4k9k_JpJ6lGQR5DCIgGFj8evztPbz4bbDSRqGwl_LFA3r1OFS81vf7yjy36cA9F7kugmVzUkAVYYhe0mcwpAc1o9yv2pWTSLtZJssicUmQgfGraKuy4AmBbp9RWs5rx03&usqp=CAc"
              alt=""
            
            />              

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
  )
}

export default SimilarProductCard