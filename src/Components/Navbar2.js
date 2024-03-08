import Image from 'next/image';
import Msshop from '/public/MsShop.svg';
import Union from '/public/Union.svg';



function Navbar2(){
    return(
        <main className='flex flex-col space-y-5 sm:flex-row sm:items-center sm:justify-between p-4 ml-4 sm:ml-16'>
      <div className='flex justify-center items-center'>
        <Image src={Msshop} alt='Logo' className='w-40 sm:w-36'/>
      </div>

      <div className='flex flex-col space-y-2 sm:flex-row justify-center items-center sm:space-y-0 sm:space-x-10 font-manrope'>
      <label className='flex flex-nowrap space-x-1'>
        <input placeholder='Search for a product' id='text' type='text' className='text-center bg-slate-100 rounded-lg shadow-xl w-72 md:w-96' />
        <button><Image src={Union} alt='Search logo'/></button>
      </label>
      </div>

      <div className='flex flex-row space-x-10 justify-center items-center hidden sm:block sm:flex-row sm:space-x-5'>
        <button>Login</button>
        <button className='bg-[#1677FF] rounded-lg w-32 sm:w-20 h-7 text-[#ffff] hover:shadow-gray-600 shadow-md'>
          Register
        </button>
      </div>
    </main>
    );
}

export default Navbar2;