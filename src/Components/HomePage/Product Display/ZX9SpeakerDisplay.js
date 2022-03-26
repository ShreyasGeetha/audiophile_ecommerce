import Image from 'next/image';
import BlackButton from '../../Buttons/BlackButton'
import patternCircles from '../../../../public/assets/home/desktop/patternCircles.svg'

const ZX9SpeakerDisplay = ({ zx9 }) => {
  console.log('hello',zx9)
  return (
    // 2XL make it grid
    <div className='mx-6 mt-24 bg-brown flex flex-col items-center content-center relative z-10'>
      {/* image */}
      <div className='mx-10 my-14 z-30'>
        <Image src={zx9} width={172} height={207 } className=''/>
      </div>

      <div className='absolute z-20 '>
        <Image src='/assets/home/desktop/patternCircles.svg' width={600} height={600}  />
      </div>


      <div className=' flex flex-col  items-center content- text-center mx-6 font-Manrope mb-14
      md:mx-52'>

        {/* Title */}
        <div className='font-bold text-white text-36 my-3 uppercase text-center mx-4'>
          ZX9 speaker
        </div>
       
        {/* description - flex*/}
        <div className='text-white font-medium text-15 opacity-75'>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </div>

        {/* button */}
        <BlackButton />
      </div>

    </div>
  );
}

export default ZX9SpeakerDisplay;