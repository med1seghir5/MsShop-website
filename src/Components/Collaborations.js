import Image from 'next/image';
import Apple from '/public/Vector (2).svg';
import Playstation from '/public/playstation 1.svg';
import Dell from '/public/dell 1.svg';
import Google from '/public/google (1) 1.svg';


function Collaborations(){
    return(
        <main className="flex flex-col justify-center mt-28 mb-28 sm:flex sm:flex-col sm:justify-center sm:mt-28">
            <div className="text-center font-manrope text-3xl">
                We Collaborate With +10 Top <br/>
                Brands
            </div>

            <div className="flex flex-col justify-center items-center space-y-10 p-10 sm:flex sm:flex-row sm:justify-center sm:space-x-28">
                <Image src={Apple} alt='Apple logo' />
                <Image src={Playstation} alt='Apple logo' />
                <Image src={Dell} alt='Apple logo' />
                <Image src={Google} alt='Apple logo' />
            </div>
        </main>
    );
}

export default Collaborations;