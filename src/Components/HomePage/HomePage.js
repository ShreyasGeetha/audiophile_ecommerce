import { ShoppingCartIcon } from '@heroicons/react/outline';
import DesktopHeader from './DesktopHeader';

import MobileTabletHeaderHero from './MobileTabletHeaderHero';
import MobileTabletLayout from './MobileTabletHeaderHero';


function HomePage () {
  return (
    <>
      <div className=' max-w-3xl w-full h-full bg-pureBlack
            md:max-w-8xl 2XL:mx-auto'>
        
        <MobileTabletHeaderHero />  
        
        <DesktopHeader />
        
      </div>
    </>
  );
}

export default HomePage;