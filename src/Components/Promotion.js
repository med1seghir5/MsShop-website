import Image from 'next/image';
import picture from "/public/Dell.jpg";
import picture1 from "/public/Frame 4.svg";
import picture2 from "/public/Device 13PM.svg";



function Promotion(){
    return(
        <main className="flex flex-col p-4 mb-36">
            <div className=" mb-10 text-3xl text-center font-semibold md:mb-0 md:text-start md:ml-10">
            - Our promotions this <br/> Month :
            </div>
                
            <div className='flex flex-col justify-between space-y-10 md:flex md:flex-row md:justify-between'>
                <div className='flex flex-col justify-center items-center text-black font-bold'>
                    <button><Image src={picture} alt='logo' className='shadow-drop-1-center rounded-2xl w-80 md:w-96'/></button>
                    <p>Dell_laptop</p>
                    <s className='text-[#E03E3E]'>50000 DA</s>
                    <i className='text-[#61f55c]'>40000 DA</i>
                </div>

                <div className='flex flex-col justify-center items-center text-black font-bold'>
                    <button><Image src={picture1} alt='logo' className='shadow-drop-1-center rounded-2xl w-80 md:w-96'/></button>
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