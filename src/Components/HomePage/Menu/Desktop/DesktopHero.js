import Image from 'next/image'
import imageHeroDesktop from '../../../../../public/assets/home/desktop/imageHeroDesktop.jpg'
import HeroDescription from '../../HeroSection/HeroDescription';
import imageHeaderTablet from '../../../../../public/assets/home/tablet/imageHeaderTablet.jpg'


const DesktopHero = () => {
  return (
    <>      
      <div className='hidden 2XL:block animate-fadeIn transition 2XL:mt-10  '>
        <div className='relative  overflow-hidden rounded-2xl'>
          <Image 
              src={imageHeroDesktop}
            objectFit='cover' layout='' />
          <HeroDescription />
        </div>
      </div>
    </>
  );
}

export default DesktopHero;