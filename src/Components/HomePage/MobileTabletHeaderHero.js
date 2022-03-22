import Image from 'next/image';
import imageHeader from '../../../public/assets/home/mobile/imageHeader.jpg'
import imageHeaderTablet from '../../../public/assets/home/tablet/imageHeaderTablet.jpg'

import Header from './Header';
import HeroDescription from './HeroDescription';

const MobileTabletHeaderHero = () => {
  return (
    <>
      <div className='sm:relative 2XL:hidden'>
          <div className='animate-fadeIn transition md:hidden -z-10'>
            <Image src={imageHeader} />
            
          </div>
          <div className='animate-fadeIn transition hidden md:block 2XL:hidden -z-10'>
            <Image src={imageHeaderTablet} />
          </div>
          
          <Header />
          <div className='border-stone-800 bg-stone-200 w-full h-1 mt-0 2XL:static'>
            
          </div>
          <HeroDescription className='z-20'/>
        </div> 
    </>
  );
}

export default MobileTabletHeaderHero;