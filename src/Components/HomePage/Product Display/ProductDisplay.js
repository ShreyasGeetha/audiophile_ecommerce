import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/outline';

const ProductDisplay = () => {
  
  const products = {
    items: [      
      {
       productName:'headphones' ,
       mobile: '/assets/product-xx99-mark-one-headphones/mobile/xx991M1_M.png',
       tablet: '/assets/product-xx99-mark-one-headphones/desktop/xx91M1_Desktop_shadow.jpg',
       desktop: '/assets/product-xx99-mark-one-headphones/tablet/xx91M1_Tablet_shadow.jpg'        
      },
      {
       productName:'speakers' ,
       mobile: '/assets/product-zx9-speaker/mobile/ZX9_M.png',
       tablet: '/assets/product-zx9-speaker/desktop/xx91M1_Desktop_shadow.jpg',
       desktop: '/assets/product-zx9-speaker/tablet/xx91M1_Tablet_shadow.jpg'        
      },
      {
       productName:'earphones' ,
       mobile: '/assets/product-yx1-earphones/mobile/YX1_M.png',
       tablet: '/assets/product-yx1-earphones/desktop/xx91M1_Desktop.jpg',
       desktop: '/assets/product-yx1-earphones/tablet/xx91M1_Tablet.jpg'        
      },
    ]   
    
   }
  

  return (
    <div>
      <div className='mt-10 mx-6 '>
        
        {/* products */}
        {
          products.items.map(product => {
            return (
              <div className='flex flex-col items-center content-center relative font-Manrope font-bold uppercase text-pureBlack 
              '>
                <div>
                  <Image src={product.mobile} width={132} height={140} />
                </div>

                <div className='shadow-rounded w-14 h-4 mt-16 bg-lightGray rounded-full absolute -z-10'></div>
                
                {/* product name */}
                <div className='text-15v2 mt-1'>
                  <span>{ product.productName}</span>
                </div>

                {/* shop */}
                <div className='flex items-center justify-between mb-5 mt-4'>
                  <span className=' text-13 opacity-50'>shop</span>
                  <ChevronRightIcon className='w-3 h-3 mx-2 text-brown stroke-3' />
                </div>

                {/* background */}
                <div className='w-full h-41 bg-lightGray absolute -z-20 bottom-0 '>
                </div>
                
              </div>                       
            )             
          })
        }
      </div>
    </div>
  );
}

export default ProductDisplay;