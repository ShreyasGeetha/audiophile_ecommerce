
import DesktopHeader from './Menu/Desktop/DesktopHeader';
import DesktopHero from './Menu/Desktop/DesktopHero';
import MobileTabletHeaderHero from './Menu/PhoneTablet/MobileTabletHeaderHero';


import ProductDisplay from './Product Display/ProductDisplay';
import ZX9Display from './Product Display/ZX9Display';


function HomePage() {
  return (
    <>
      <div className='bg-pureBlack'>
        <div className=' max-w-3xl w-full h-full 
            md:max-w-8xl 2XL:mx-auto 2XL:-z-30'>
        
          <MobileTabletHeaderHero />          
          <DesktopHeader />
          <DesktopHero />
        </div>
      </div>
      
      {/* product display */}
      <ProductDisplay />
      <ZX9Display />
    </>
  );
}

export default HomePage;