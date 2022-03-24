import Image from 'next/image';
import imageHeader from '../../../../../public/assets/home/mobile/imageHeader.jpg'
import imageHeaderTablet from '../../../../../public/assets/home/tablet/imageHeaderTablet.jpg'
import HeroDescription from '../../HeroSection/HeroDescription';

import Header from './Header';

const MobileTabletHeaderHero = () => {
  return (
    <>
      <div className='sm:relative 2XL:hidden'>
          
        {/* Mobile Screen Hero Images */}
          <div className='animate-fadeIn transition md:hidden smLg:animate-fadeIn'>
            <Image src={imageHeader} />            
          </div>
       
        {/* Tablet Screen Hero Images */}
          <div className='animate-fadeIn transition hidden md:block 2XL:hidden '>
            <Image src={imageHeaderTablet} />
          </div>
          
          <Header />
          
          <div className='border-stone-800 bg-stone-200 w-full h-1 mt-0 hidden 2XL:block 2XL:static'>
            
          </div>
          <HeroDescription className='z-20'/>
        </div> 
    </>
  );
}

export default MobileTabletHeaderHero;