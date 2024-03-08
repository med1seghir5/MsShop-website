import Image from 'next/image';
import Back4 from '/public/Image.svg';
import Add from '/public/Button.svg';




function FirstPage2(){
    return(
        <main className="mt-16 mb-60 space-y-20 md:mt-28 md:mb-60 md:space-y-24">
            <div className="text-center space-y-4">
                <div className='text-6xl'>Find the best</div>
                <div className='text-5xl text-[#1677FF]'>Laptop</div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-20 md:flex md:flex-row md:justify-center md:items-center md:space-x-16 md:space-y-0">

                <div className='flex flex-col space-y-2'>
                
                <button>
                    <Image src={Back4} alt='logo' className='rounded-2xl w-96 shadow-lg shadow-slate-500'/>
                </button>
                    <div className='text-black font-bold text-center'>Macbook Pro 16</div>
                    <div className='text-gray-500 font-bold text-center'>Silver - M1</div>
                    <div className='text-black font-bold text-center'>150000 DA</div>
                    <button className='flex justify-center'><Image src={Add} alt='Add icon' /></button>
                </div>


                <div className='flex flex-col space-y-2'>
                
                <button>
                    <Image src={Back4} alt='logo' className='rounded-2xl w-96 shadow-lg shadow-slate-500' />
                </button>
                    <div className='text-black font-bold text-center'>Macbook Pro 16</div>
                    <div className='text-gray-500 font-bold text-center'>Silver - M1</div>
                    <div className='text-black font-bold text-center'>150000 DA</div>
                    <button className='flex justify-center'><Image src={Add} alt='Add icon' /></button>
                </div>
                <div className='flex flex-col space-y-2'>
                
                <button>
                    <Image src={Back4} alt='logo' className='rounded-2xl w-96 shadow-lg shadow-slate-500' />
                </button>
                    <div className='text-black font-bold text-center'>Macbook Pro 16</div>
                    <div className='text-gray-500 font-bold text-center'>Silver - M1</div>
                    <div className='text-black font-bold text-center'>150000 DA</div>
                    <button className='flex justify-center'><Image src={Add} alt='Add icon' /></button>
                </div>
                
            </div>
        </main>
    );
}

export default FirstPage2;