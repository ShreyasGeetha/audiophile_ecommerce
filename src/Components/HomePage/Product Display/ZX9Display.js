import zx9_m from '../../../../public/assets/home/mobile/zx9_m.png'
import zx9_d from '../../../../public/assets/home/desktop/zx9_d.png'
import Image from 'next/image'
import BlackButton from '../../Buttons/BlackButton'
import PatternCircles from '../../../../public/assets/home/desktop/PatternCircles.svg'


const ZX9Display = () => {
  return (
    <div className='mt-20 rounded-lg relative  max-w-8xl mx-auto'>
      <div className='mx-6 bg-brown rounded-lg 2XL:max-w-6xl 2XL:mx-auto 2XL:flex 2XL:animate-fadeIn'>

        <div className='border-brown border-4 mx-6 rounded-md bg-brown 2XL:hidden'>
        </div>
     
        <div className='2XL:flex 2XL:mx-auto'>

          {/* Speaker Image */}
          <div className='flex  items-center content-center flex-col mt-14 2XL:block 2XL:ml-28 2XL:mt-24 '>
            
            <div className='md:hidden'>
              <Image src={zx9_m} width={172} height={ 207} />
            </div>
            
            <div className='hidden md:block 2XL:hidden'>
              <Image src={zx9_m} width={197} height={ 237} />
            </div>
            
            <div className='hidden 2XL:block'>
              <Image src={zx9_d} width={410} height={ 493} />
            </div>
          </div>
        
          {/* Speaker Description */}
          <div className=' flex flex-col  items-center content- text-center mx-6 font-Manrope mb-14
          smLg:mx-16
          smXL:mx-24
          sms:mx-32
          smXXL:mx-36
          md:mx-52 z-30 md:mt-16
          2XL:mt-32 2XL:mr-24 2XL:w-80  2XL:items-start'>

          
            <div className='font-bold text-white text-36 mt-8 mb-6 uppercase text-center mx-4
            smLg:text-46
            sms:text-5xl
              md:text-56 2XL:text-left 2XL:mx-0 2XL:mt-0'>
                ZX9 speaker
            </div>
            
          
            <div className='text-white font-medium text-15 opacity-75 2XL:text-left'>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </div>

            
            <BlackButton />
        </div> 
      </div>
      
      </div>

      {/* <div className='-mt-10 border-1 '>
        
      </div> */}


      
    </div>
  );
}

export default ZX9Display;