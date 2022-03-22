import { ShoppingCartIcon } from "@heroicons/react/outline";
import Line from "./Line";
import Logo from "./Logo";

const DesktopHeader = () => {
  return (
    <>
      <div className='hidden 2XL:flex 2XL:justify-between  2XL:pt-eight 2XL:mb-9 '>
        <div className='text-white'>
          <Logo />
        </div>
        <div className='text-white flex justify-between font-Manrope font-bold text-113 uppercase'>
          <div className='mx-9'>Home</div>
          <div className='mx-9'>Headphones</div>
          <div className='mx-9'>speakers</div>
          <div className='mx-9'>earphones</div>
        </div>
        <ShoppingCartIcon className='w-6 h-7 stroke-1 text-white' />          
      </div>
      <Line />
    </>
  );
}

export default DesktopHeader;