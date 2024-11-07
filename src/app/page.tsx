import Image from "next/image";

export default function Home() {
  return (
    <div  className="min-h-screen" >
   <header>
    <div className=" w-[1920] h-[134] bg-[#A29875]">
     <h1 className="text-[75px] w-[439] h-[94] top-[20px] left-[36px] font-normal text-[#FFFFFF] line-height:93.75px">MANZZARI</h1>
    </div>
    </header>

    <div className="flex justify-content" >

      <div >
        <h1 className="  w-[496px] h-[189px]  mt-40 ml-20 font-weight:700 text-[40px] line-height:65.8px;  ">IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>

        <p className=" w-[800px] h-[147px] text-3xl  top-48 ml-20 mt-4 text-[#A29875] font-semibold "
        >An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <button className="w-[288px] h-[58px] p-10px rounded-[10px] bg-[#A29875]  ml-24 text-2xl">Explore Now</button>                 

      </div>
     
      <div>
      <Image  className = "mt-[75px] mr-14" src='/images/picture.svg' alt="pic" width={462} height={647}/>
      
      </div>
     
      </div>
  
   
               
    </div>
    
  );
}

