import { MenuIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <div className=' absolute top-8 border-b-1 border-stone-800 w-full h-14 z-10'>
        <div className=' text-white flex justify-between mx-6 
        md:mx-10
         '>
        
        {/* Menu */}
        <MenuIcon className='w-5 h-7 stroke-3 2XL:hidden' />

        <Logo/>

        <ShoppingCartIcon className='w-6 h-7 stroke-2' />
      </div> 

      </div>
    </>
  );
}

export default Header;