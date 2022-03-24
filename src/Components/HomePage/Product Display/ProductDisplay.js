import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/outline';

const ProductDisplay = () => {
  
  const products = {
    items: [      
      {
       productName:'headphones' ,
       mobile: '/assets/product-xx99-mark-one-headphones/mobile/xx99M1_Mobile_shadow.jpg',
       tablet: '/assets/product-xx99-mark-one-headphones/desktop/xx91M1_Desktop_shadow.jpg',
       desktop: '/assets/product-xx99-mark-one-headphones/tablet/xx91M1_Tablet_shadow.jpg'        
      },
      {
       productName:'speakers' ,
       mobile: '/assets/product-xx99-mark-one-headphones/mobile/xx99M1_Mobile_shadow.jpg',
       tablet: '/assets/product-xx99-mark-one-headphones/desktop/xx91M1_Desktop_shadow.jpg',
       desktop: '/assets/product-xx99-mark-one-headphones/tablet/xx91M1_Tablet_shadow.jpg'        
      },
      {
       productName:'earphones' ,
       mobile: '/assets/product-xx99-mark-one-headphones/mobile/xx99M1_Mobile.jpg',
       tablet: '/assets/product-xx99-mark-one-headphones/desktop/xx91M1_Desktop.jpg',
       desktop: '/assets/product-xx99-mark-one-headphones/tablet/xx91M1_Tablet.jpg'        
      },
    ]   
    
   }
  

  return (
    <div>
      <div className='mt-10 mx-6'>
        
        {/* products */}
        {
          products.items.map(product => {
            return (
              <div className='w-full h-36 bg-lightGray flex flex-col mb-16 rounded-lg uppercase relative '>
                <div className='absolute flex flex-col items-center content-center -mt-10 left-1/3 '>
                  <Image src={product.mobile} width={100} height={100} className='pt-10 ' />
                  <span>{product.productName}</span>
                  <span>shop <ChevronRightIcon className='w-5 h-5'/></span>
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