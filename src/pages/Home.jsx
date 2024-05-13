import React from 'react'
import card from '../assets/image.png';
import SubtractImage from '../assets/Subtract.svg';
import VectorImage from '../assets/Vector.svg';
import { Button } from '../components/Button';

const Home = () => {
  return (
    <div className='flex items-center justify-center relative flex-wrap'>
    <div className="absolute z-40 left-[2%] ">
      <img className='w-[65%] ' src={card} alt="" />
    </div>
    <div className="image-container relative w-[70%] flex items-center justify-center">
      <img className="subtract-image" src={SubtractImage} alt="Subtract" />
      <img className="vector-image" src={VectorImage} alt="Vector" />
      
      <div className='absolute flex flex-col   w-[85%] h-[85%]  z-30  p-10'>
        <div className="">
          <h3 className='passion-one text-5xl py-3 tracking-widest'>LASERTAG</h3>
          <p className=' font-light text-lg leading-loose text-justify '>   Exhilarating and action-packed gaming experience that combines strategic thinking
            , quick reflexes, and a quest for treasure. Players find themselves in a dynamic and challenging 
            environment where they must navigate through a series of laser-filled obstacles, complete various tasks, 
            and strive to uncover the ultimate treasure.</p>
        </div>
        <div className="flex flex-col py-5 text-xl">
    <div className="flex justify-start py-2">
        <div className="w-[45%]">
        <h5>Duration</h5>
        </div>
        <h5>9 to 15 mins</h5>
    </div>
    <div className="flex justify-start py-2">
        <div className="w-[45%]">
        <h5>Maximum players</h5>
        </div>
        <h5>12 players</h5>
    </div>
</div>

        <div className=" flex items-center justify-between w-[70%]">
         <Button title={"How to Play"} targetHeader={"instruction"} />
         <Button title={"Start Game"} targetHeader={"play"}/>          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home