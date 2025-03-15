// import React from 'react';

// const Banner = () => {
//     return (
//         <div className='container px-20'>
//             <div className="carousel w-full mt-12">
//             {banners.map((banner, index) => (
//                 <div
//                     key={index}
//                     id={`slide${index + 1}`} 
//                     className="carousel-item relative w-full h-[90vh] rounded-xl"
//                     style={{
//                         backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
//                         backgroundSize: "cover",
                      
//                         backgroundRepeat: "no-repeat",
                       
//                     }}
//                 >
//                     <div className="absolute inset-0 flex flex-col items-start justify-start text-white my-24 ">
//                         <h2 className="text-3xl font-bold">{banner.title}</h2>
//                         <p className="mt-2">{banner.description}</p>
//                     </div>

//                     <div className="absolute flex -translate-y-1/2 transform justify-between">
//                         <a href={banner.prev} className="btn btn-circle">❮</a>
//                         <a href={banner.next} className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </div>
//     );
// };

// const banners = [
//     {
//         title: "Affordable Price For Car Servicing",
//         description: "There are many variations of passages available, but the majority have suffered alteration in some form",
//         next: "#slide2",
//         prev: "#slide4",
//     },
//     {
//         title: "Expert Mechanics Ready to Serve You",
//         description: "Our team of expert mechanics provides quality service with professional expertise.",
//         next: "#slide3",
//         prev: "#slide1",
//     },
//     {
//         title: "High-Quality Parts & Accessories",
//         description: "We use only high-quality parts to ensure the longevity of your vehicle.",
//         next: "#slide4",
//         prev: "#slide2",
//     },
//     {
//         title: "Fast & Reliable Car Servicing",
//         description: "Quick and efficient servicing to get you back on the road in no time.",
//         next: "#slide1",
//         prev: "#slide3",
//     },
// ];

// export default Banner;


import Image from "next/image";
import img1 from "../../../public/assets/images/banner/1.jpg"
import img2 from '../../../public/assets/images/banner/2.jpg';
import img3 from '../../../public/assets/images/banner/3.jpg';
import img4 from '../../../public/assets/images/banner/4.jpg';
import img5 from '../../../public/assets/images/banner/5.jpg';
import img6 from '../../../public/assets/images/banner/6.jpg';


const Banner = () => {

  return (
    <div className="container px-20 mt-12">
        <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        
       
       <Image className="h-full" alt="banner" src={img1} />
      
        <div className="absolute flex items-center h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-[#FFFFFF] space-y-7 w-1/2 pl-12 '>
            <h2 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h2>
            <p>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-active bg-[#FF3811] text-[#FFFFFF] mr-5">Discover More</button>
            <button className="btn btn-outline text-[#FFFFFF]">Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
         
      <Image className="h-full" alt="banner" src={img2} />
         <div className="absolute flex items-center h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-[#FFFFFF] space-y-7 w-1/2 pl-12 '>
            <h2 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h2>
            <p>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-active bg-[#FF3811] text-[#FFFFFF] mr-5">Discover More</button>
            <button className="btn btn-outline text-[#FFFFFF]">Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
          
       <Image className="h-full" alt="banner" src={img3} />
         <div className="absolute flex items-center h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-[#FFFFFF] space-y-7 w-1/2 pl-12 '>
            <h2 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h2>
            <p>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-active bg-[#FF3811] text-[#FFFFFF] mr-5">Discover More</button>
            <button className="btn btn-outline text-[#FFFFFF]">Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
          
       <Image className="h-full" alt="banner" src={img4} />
         <div className="absolute flex items-center h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-[#FFFFFF] space-y-7 w-1/2 pl-12 '>
            <h2 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h2>
            <p>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-active bg-[#FF3811] text-[#FFFFFF] mr-5">Discover More</button>
            <button className="btn btn-outline text-[#FFFFFF]">Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
