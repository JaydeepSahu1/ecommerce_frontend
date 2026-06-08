import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { colors } from '../../../Data/Filter/color'
import { price } from '../../../Data/Filter/price';
import { teal } from '@mui/material/colors';
import { discount } from '../../../Data/Filter/discounts';
import { useSearchParams } from 'react-router-dom';

const FilterSection = () => {

  const [expendColor, setExpendColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorTogle = () => {
    setExpendColor(!expendColor);
  };

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    }
    else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log("clearAllFilters", searchParams)
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams)
  }

  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className='flex items-center justify-between h-[40px] px-9 lg:border-t'>
        <p className='text-lg font-semibold'>
          Filters
        </p>
        <Button onClick={clearAllFilters} size='small' className='text-teal-600 cursor-pointer font-semibold'>
          Cleat All
        </Button>

      </div>

      <Divider />

      <div className='px-9 space-y-6'>
        
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "teal[500]",
                pb: "14px"

              }}
              className='text-2xl font-semibold ' id='color'
              >
              Colour
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue=""
              name="color"
              onChange={updateFilterParams}
            >
              {colors.slice(0, expendColor ? colors.length : 5).map((item) =>
                <FormControlLabel value={item.hex} control={<Radio />}
                  label={<div className='flex items-center gap-3'>
                    <p>{item.name}</p>
                    <p style={{ background: item.hex }}
                      className={`h-5 w-5 rounded-full ${item.name === "White" ? "border" : ""}`} >
                    </p>
                  </div>
                  } />

              )}
            </RadioGroup>
          </FormControl>

          <div>
            <Button
              onClick={handleColorTogle}
              className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center'>
              {expendColor ? "hide" : `+${colors.length - 5} more`}
            </Button>
          </div>

        </section>

        <Divider />

        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                color: teal[600],
              }}
              className='text-2xl font-semibold'
              id="price"
            >
              Price
            </FormLabel>

            <RadioGroup
              name='price'
              onChange={updateFilterParams}
              aria-labelledby='price'
              defaultValue=""
            >
              {price.map((item, index) =>
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              )}
            </RadioGroup>

          </FormControl>

        </section>

        <Divider />

        <section>
          <FormControl>
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  pb: "14px",
                  color: teal[600],
                }}
                className='text-2xl font-semibold'
                id="brand"
              >
                Discount
              </FormLabel>

              <RadioGroup
                name="discount"
                onChange={updateFilterParams}
                aria-labelledby='brand'
                defaultValue=""
              >
                {
                  discount.map((item, index) => (
                    <FormControlLabel
                      key={item.name}
                      value={item.value}
                      control={<Radio size="small" />}
                      label={item.name}
                    />
                  ))
                }
              </RadioGroup>
            </FormControl>
          </FormControl>
        </section>

        <Divider />

      </div>

    </div>
  )
}

export default FilterSection