import Image from 'next/image';
import Msshop from '/public/MsShop.svg';

function Navbar() {
  return (
    <main className='flex flex-col p-3 sm:p-4 sm:flex-row sm:items-center sm:justify-between sm:ml-16'>
      <div className='flex justify-center items-center'>
        <Image src={Msshop} alt='Logo' className='w-40 sm:w-36'/>
      </div>

      <div className='flex flex-col space-y-2 hidden sm:flex-row sm:block sm:justify-center sm:items-center sm:space-y-0 sm:space-x-10 sm:font-manrope'>
        <button>Products</button>
        <button>Sold</button>
        <button>Home</button>
        <button>Categories</button>
        <button>About</button>
      </div>

      <div className='flex flex-row space-x-10 justify-center items-center hidden sm:flex-row sm:block sm:space-x-5'>
        <button>Login</button>
        <button className='bg-[#1677FF] rounded-lg w-32 sm:w-20 h-7 text-[#ffff] hover:shadow-gray-600 shadow-md'>
          Register
        </button>
      </div>
    </main>
  );
}
export default Navbar;
