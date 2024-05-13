import { useState, useEffect } from 'react';

const Loader = () => {
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {    
    const interval = setInterval(() => {
      setCountdown(prevCountdown =>{
        if(prevCountdown == 0) {
         return prevCountdown = 3;
        } else {
          return (prevCountdown - 1)
        }
         
        
        });
      
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-5'>
    <h1 className='text-center text-7xl'>Game Starting in...</h1>
    <div className=' relative bg-[#123638] opacity-[66%] rounded-full'>
    <div className="loader"> 
   
    </div>
    <h2 className="title absolute top-10 left-20"> {countdown}</h2>
    </div>
    </div>
   
    </>
    
  )
}

export default Loader