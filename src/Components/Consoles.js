import Image from 'next/image';
import Back4 from '/public/Xbox one.jpg';
import Back5 from '/public/Nintendo.jpg';
import Back6 from '/src/Components/Consoles.jpg';
import Add from '/public/Button.svg';


function consoles(){
    return(
        <main className="mt-16 mb-60 space-y-20 md:mt-28 md:mb-60 md:space-y-24">
            <div className="text-center space-y-4">
                <div className='text-6xl'>Find the best</div>
                <div className='text-5xl text-[#1677FF]'>Softwares</div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-20 md:flex md:flex-row md:justify-center md:items-center md:space-x-16 md:space-y-0">

                <div className='flex flex-col space-y-3'>
                
                <button>
                    <Image src={Back6} alt='logo' className='rounded-2xl w-72 shadow-lg shadow-slate-500 md:rounded-2xl md:w-80 md:shadow-lg md:shadow-slate-500'/>
                </button>
                    <div className='text-black font-bold text-center'>Sony Playstation5</div>
                    <div className='text-black font-bold text-center'>130000 DA</div>
                    <button className='flex justify-center'><Image src={Add} alt='Add icon' /></button>
                </div>


                <div className='flex flex-col space-y-3'>
                
                <button>
                    <Image src={Back5} alt='logo' className='rounded-2xl w-72 shadow-lg shadow-slate-500 md:rounded-2xl md:w-80 md:shadow-lg md:shadow-slate-500' />
                </button>
                    <div className='text-black font-bold text-center'>Nintendo Switch</div>
                    <div className='text-black font-bold text-center'>70000 DA</div>
                    <button className='flex justify-center'><Image src={Add} alt='Add icon' /></button>
                </div>
                <div className='flex flex-col space-y-3'>
                
                <button>
                    <Image src={Back4} alt='logo' className='rounded-2xl w-72 shadow-lg shadow-slate-500 md:rounded-2xl md:w-80 md:shadow-lg md:shadow-slate-500' />
                </button>
                    <div className='text-black font-bold text-center'>Xbox Serie X</div>
                    <div className='text-black font-bold text-center'>100000 DA</div>
                    <button className='flex justify-center'><Image src={Add} alt='Add icon' /></button>
                </div>
                
            </div>
        </main>
    );
}

export default consoles;