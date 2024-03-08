import Image from "next/image";
import pic from "/public/Icon (1).svg";
import pic1 from "/public/Icon (2).svg";
import pic2 from "/public/Icon.svg"


function Faq(){
    return(
        <main className="flex flex-col items-center mb-28">
            <div className="flex flex-row font-manrope text-5xl text-[#898989]">
                Why choose Ms<p className="text-[#1677FF]">Shop</p> ?
            </div>

            <div className="flex flex-row items-center space-x-10 p-4">
                <div className="flex flex-col items-center font-manrope text-[#898989]">
                  <Image src={pic1} alt="logo" />
                  Free Delivery         
                </div>

                <div className="flex flex-col items-center font-manrope text-[#898989]">
                  <Image src={pic} alt="logo" />
                  Trasted platforme         
                </div>

                <div className="flex flex-col items-center font-manrope text-[#898989]">
                  <Image src={pic2} alt="logo" />
                  Here For You        
                </div>
            </div>
        </main>
    );
}

export default Faq;