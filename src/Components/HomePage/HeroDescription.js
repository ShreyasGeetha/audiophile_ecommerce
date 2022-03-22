import DarkBrownButton from "../Buttons/DarkBrownButton";

const HeroDescription = () => {
  return (
    <>
      <div className='absolute left-6 right-6 top-48 bottom-28 text-center font-Manrope text-white flex flex-col items-center content-center animate-heroDescriptionAnimate
      smLg:left-1/7 smLg:right-1/7 smLg:top-1/3 smLg:bottom-1/3
      smXL:left-1/5 smXL:right-1/5 smXL:top-1/3 smXL:bottom-1/3
      smXXL:left-1/5 smXXL:right-1/5 smXXL:top-1/3 smXXL:bottom-1/3
      md:left-1/4 md:right-1/4 md:top-1/4 md:bottom-1/4
      2xl:relative'>
        
        <div className='opacity-50 text-14 font-normal 
              smXXL:text-18'>
          NEW PRODUCT
        </div>
        <div className='text-36 font-bold uppercase mt-4 mb-6
          smXXL:text-46 smXXL:my-5
          md:text-56 md:my-6'>
          XX99 Mark II Headphones
        </div>
        <div className='text-15 opacity-75 font-medium tracking-normal mx-4'>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </div>
        <DarkBrownButton />

      </div>
      
    </>
  );
}

export default HeroDescription;