import Image from "next/image";
import pic from "/public/Icon (1).svg";
import pic1 from "/public/Icon (2).svg";
import pic2 from "/public/Icon.svg"



function Footer(){
    return(
        <main className="flex flex-col justify-center items-center border-t-2 border-black space-y-10 p-10 md:mb-0 md:flex md:flex-row md:justify-between md:items-center md:border-t-2 md:border-black md:space-x-28 md:p-5">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row font-manrope text-5xl">
                    Ms<p className="text-[#1677FF]">Shop</p>
                </div>
                
                <div className="text-center font-semibold pt-5 text-[#898989]">
                    MsShop is an online store dealing with all product<br/>
                    MsShop provide cheap, high quality, products to<br/>
                    customers.
                </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center md:flex md:flex-col md:items-center ">
            <div className="flex flex-row font-manrope text-xl text-[#898989] md:flex md:flex-row md:font-manrope md:text-3xl md:text-[#898989]">
                Why choose Ms<p className="text-[#1677FF]">Shop</p> ?
            </div>

            <div className="flex flex-row items-center space-x-10">
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
            </div>

            
            <div className="flex flex-col justify-center items-center text-[#898989] md:flex md:flex-col md:justify-center md:items-center">
                <div className="font-bold text-2xl">Contact Us :</div>
                <div>- Algeria</div>
                <div>- Batna,Batna</div>
                <div>- Support@MsShop.com</div>
                <div>- +213654389244</div>
            </div>
        </main>
    )
}


export default Footer;