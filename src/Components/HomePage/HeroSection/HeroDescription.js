import DarkBrownButton from '../../Buttons/DarkBrownButton'

const HeroDescription = () => {
  return (
    <>
      <div className='absolute left-6 right-6 top-48 bottom-28 text-center font-Manrope text-white flex flex-col items-center content-center animate-heroDescriptionAnimate transition duration-500
      
      smLg:left-1/7 smLg:right-1/7 smLg:top-40 smLg:bottom-1/3
      
      sms:top-1/2

      smXL:left-1/5 smXL:right-1/5 smXL:top-1/2 smXL:bottom-1/3
      
      smXXL:left-1/5 smXXL:right-1/5 smXXL:top-1/3 smXXL:bottom-1/3
      
      md:left-1/4 md:right-1/4 md:top-1/4 md:bottom-1/4
      
      2XL:left-0 2XL:h-fit 2XL:w-96 2XL:items-start 2XL:content-start 2XL:text-left 2XL:top-1/5 2XL:bottom-1/4 2XL:ml-10'>
        
        <div className='opacity-50 text-14 font-normal 
              smXXL:text-18 2XL:text-14'>
          NEW PRODUCT
        </div>
        <div className='text-36 font-bold uppercase mt-4 mb-6
          smXXL:text-46 smXXL:my-5
          md:text-56 md:my-6 2XL:my-6 2XL:text-56'>
          XX99 Mark II Headphones
        </div>
        <div className='text-15 opacity-75 font-medium tracking-normal mx-4 2XL:mx-0 2XL:mr-10'>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </div>
        <DarkBrownButton />

      </div>
      
    </>
  );
}

export default HeroDescription;