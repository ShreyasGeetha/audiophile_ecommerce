
import DesktopHeader from './Menu/Desktop/DesktopHeader';
import DesktopHero from './Menu/Desktop/DesktopHero';
import MobileTabletHeaderHero from './Menu/PhoneTablet/MobileTabletHeaderHero';

import xx99M1_Mobile from '../../../public/assets/product-xx99-mark-one-headphones/mobile/xx99M1_Mobile.jpg'
import xx99M1_Desktop from '../../../public/assets/product-xx99-mark-one-headphones/desktop/xx91M1_Desktop.jpg'
import xx99M1_Tablet from '../../../public/assets/product-xx99-mark-one-headphones/tablet/xx91M1_Tablet.jpg'
import ProductDisplay from './Product Display/ProductDisplay';


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
    </>
  );
}

export default HomePage;