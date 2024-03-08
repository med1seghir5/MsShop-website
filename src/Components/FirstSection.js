import Image from 'next/image';
import Logo from '/public/Vector.svg';


function FirstSection(){
    return(
        <main className="flex flex-col justify-between text-center mt-12 sm:flex sm:flex-row sm:justify-between sm:text-start">
            <div className="space-y-5 sm:ml-16 sm:space-y-5">
                <div className="font-manrope text-4xl sm:font-manrope sm:text-7xl">Best Place to Buy</div>
                <div className="div text-[#1677FF] font-manrope text-5xl sm:text-[#1677FF] sm:font-manrope sm:text-7xl">Everything</div>
                <div>At MsShop, you can shop for all your favorite brands.<br/>Laptops, Phones, Accessories.</div>
                <button className='bg-[#1677FF] rounded-lg w-32 h-9 text-[#ffff]'>Shopping Now</button>
            </div>
            <div className='mr-10 mt-12 sm:mr-12 sm:mt-0'>
                <Image src={Logo} alt='Logo' />
            </div>
        </main>
    );
}

export default FirstSection;