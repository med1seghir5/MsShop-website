import Image from 'next/image';
import picture from "/public/Dell.jpg";
import picture1 from "/public/Frame 4.svg";
import picture2 from "/public/Device 13PM.svg";



function Promotion(){
    return(
        <main className="flex flex-col p-4 mb-36">
            <div className="ml-10 text-3xl font-semibold">
            - Our promotions this <br/> Month :
            </div>
                
            <div className='flex flex-col justify-between space-y-10 md:flex md:flex-row md:justify-between'>
                <div className='flex flex-col justify-center items-center text-black font-bold'>
                    <button><Image src={picture} alt='logo' className='shadow-drop-1-center w-96 rounded-2xl'/></button>
                    <p>Dell_laptop</p>
                    <s className='text-[#E03E3E]'>50000 DA</s>
                    <i className='text-[#61f55c]'>40000 DA</i>
                </div>

                <div className='flex flex-col justify-center items-center text-black font-bold'>
                    <button><Image src={picture1} alt='logo' className='shadow-drop-1-center w-96 rounded-2xl'/></button>
                    <p>PS5 Controler</p>
                    <s className='text-[#E03E3E]'>15400 DA</s>
                    <i className='text-[#61f55c]'>10000 DA</i>
                </div>

                <div className='flex flex-col justify-center items-center text-black font-bold'>
                    <button><Image src={picture2} alt='logo' className='shadow-drop-1-center w-52 rounded-2xl'/></button>
                    <p>IPhone 13</p>
                    <s className='text-[#E03E3E]'>199980 DA</s>
                    <i className='text-[#61f55c]'>180000 DA</i>
                </div>
            </div>
        </main>
    )
}


export default Promotion;