import React from 'react';
import card from '../assets/image.png';
import SubtractImage from '../assets/Subtract.svg';
import VectorImage from '../assets/Vector.svg';
import { Button } from '../components/Button';

const Instruction = () => {
  return (
    <div className='flex items-center justify-center relative flex-wrap'>
      <div className="image-container relative w-[70%] flex items-center justify-center">
        <img className="subtract-image" src={SubtractImage} alt="Subtract" />
        <img className="vector-image" src={VectorImage} alt="Vector" />      
        <div className='absolute flex flex-col w-[80%] h-[80%] z-30 '>
          <div className="">
            <h3 className='passion-one text-5xl py-3 tracking-widest'>INSTRUCTIONS</h3>
            <p className='font-light text-lg leading-loose text-justify py-5'>Exhilarating and action-packed gaming experience that combines strategic thinking, quick reflexes, and a quest for treasure. Players find themselves in a dynamic and challenging environment where they must navigate through a series of laser-filled obstacles, complete various tasks, and strive to uncover the ultimate treasure.</p>
          </div>
          <div className="flex justify-between py-10 w-[70%]">
            <Button title={"Go Back"} targetHeader={""} />
            <Button title={"Start Game"} targetHeader={"play"} />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
