import {React,useState} from 'react'
import Card from './Card';
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';
function Testimonial(props) {
    let reviews= props.reviews;
    const [index,setIndex] = useState(0);
    const n = reviews.length;
    function LeftShiftHandler() {
      if(index - 1 < 0)
      {
          setIndex(n - 1);
      }
      else
      {
          setIndex(index - 1);
      }
  }

  function RightShiftHandler() {
    if(index + 1 >= n)
    {
        setIndex(0);
    }
    else
    {
        setIndex(index + 1);
    }
}

function SurpriseHandler() {
   let randomIndex = Math.floor(Math.random() * n);
   setIndex(randomIndex);
}

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card review ={reviews[index]}></Card>
        <div className='flex text-3xl mt-5 gap-3 text-volet-400 font-bold mx-auto'>
                <button className='cursor-pointer hover:text-violet-500' onClick={LeftShiftHandler} ><FiChevronLeft></FiChevronLeft></button>
                <button className='cursor-pointer hover:text-violet-500' onClick={RightShiftHandler} ><FiChevronRight></FiChevronRight></button>
             </div>
             <div>
                <button className='bg-violet-400 mt-2 hover:bg-violet-500 transition-all-duration cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={SurpriseHandler} >Surprise Me</button>
             </div>
    </div>
  )
}

export default Testimonial