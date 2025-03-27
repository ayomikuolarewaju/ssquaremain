import Link from "next/link"



const Thanks = ()=>{

    return(
        <div className=" bg-white w-full">
            <div  className="bg-[url('../../images/portfolio-bg.png')] flex flex-col  bg-no-repeat bg-cover h-[500px] w-full px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 justify-center text-white gap-3 items-center">

            <h3 className="text-[25px] font-bold text-[#420606]">
                Thanks for contacting us
                
            </h3>
            <Link href="/">
            <span className="text-black font-bold text-[15px] hover:text-[18px] hover:text-[#420606]">Please return to our Home page</span>
            
             </Link>
            </div>
           
        </div>
    )
}



export default Thanks