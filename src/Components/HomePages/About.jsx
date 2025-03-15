import person from '../../../public/assets/images/about_us/person.jpg';
import parts from '../../../public/assets/images/about_us/parts.jpg';
import Image from 'next/image';
const About = () => {
  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <Image alt='about'
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <Image
        alt='about'
          src={parts}
          className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2  border-8 border-white  "
        />
        </div>
        <div className='lg:w-1/2 p-4'>
            <h2 className='text-2xl font-bold text-[#FF3811]'>About Us</h2>
          <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
          <p className="mt-4 text-[#737373]"> 
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className=" py-4 text-[#737373]"> 
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;