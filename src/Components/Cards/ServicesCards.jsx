import Image from "next/image";
// import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServicesCards = ({ service }) => {
  const { _id, title, img, price } = service || {};
  return (
   <div className="">
     <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2">
          <Image width={100}  height={60} className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"  src={img} alt={title}/>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#444444]">{title}</h3>

          <div className=" grid grid-cols-2 ">
            <p className="leading-snug font-semibold  text-[#FF3811]">
              Price : ${price}
            </p>
         
            <p><FaArrowRight className="text-[#FF3811] text-end" /></p>
          
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ServicesCards;
