import Image from 'next/image';
import Back from '/src/Components/Softwar.jpg'
import Back2 from '/src/Components/Laptops.jpg'
import Back3 from '/src/Components/Phones.jpg'
import Back4 from '/src/Components/Consoles.jpg'
import Back5 from '/src/Components/Monitors.jpg'
import Link from 'next/link';




function Categories(){
    return(
        <main className="flex flex-col mt-20 mb-28 space-y-5 sm:flex sm:flex-col sm:mt-28 sm:mb-36">
            <div className="text-3xl text-center font-semibold md:text-start md:ml-10">
                - Browse Categories of <br />
                The Store :
            </div>

            <div className="flex flex-col justify-center items-center space-y-10 sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-x-16 sm:space-y-0">

                <div>
                <div className='text-white font-bold text-5xl absolute ml-14 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-24 md:mt-28'>Laptops</div>
                
                <Link href="/laptop">
                    <Image src={Back2} alt='logo' className='shadow-drop-1-center rounded-2xl w-72 shadow-lg shadow-slate-500 md:w-96' id='pic1' />
                </Link>
                </div>

                <div>
                <div className='text-white font-bold text-5xl absolute ml-14 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-24 md:mt-28'>Phones</div>
                <Link href="/phones">
                    <Image src={Back3} alt='logo' className='shadow-drop-1-center rounded-2xl w-72 shadow-lg shadow-slate-500 md:w-96' id='pic1'/>
                </Link>
                </div>

                <div>
                <div className='text-white font-bold text-5xl absolute ml-7 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-24 md:mt-28'>Softwares</div>
                <Link href="/softwares">
                    <Image src={Back} alt='logo' className='shadow-drop-1-center rounded-2xl w-72 shadow-lg shadow-slate-500 md:w-96' id='pic1'/>
                </Link>
                </div>
                
            </div>


            <div className="flex flex-col justify-center items-center space-y-10 sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-x-16 sm:space-y-5">
                <div>
                <div className='text-white font-bold text-5xl absolute ml-8 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-24 md:mt-28'>Consoles</div>
                
                <Link href="/consoles">
                    <Image src={Back4} alt='logo' className='shadow-drop-1-center rounded-2xl w-72 shadow-lg shadow-slate-500 md:w-96' id='pic1' />
                </Link>
                </div>

                <div>
                <div className='text-white font-bold text-5xl absolute ml-12 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-24 md:mt-28'>Monitors</div>
                <Link href="/monitors">
                    <Image src={Back5} alt='logo' className='shadow-drop-1-center rounded-2xl w-72 shadow-lg shadow-slate-500 md:w-96' id='pic1'/>
                </Link>
                </div>
            </div>
        </main>
    );
}

export default Categories;