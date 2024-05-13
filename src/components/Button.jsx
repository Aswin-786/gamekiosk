import React from 'react'
import button1 from '../assets/group_3_x2.svg';
import { Link } from "react-router-dom";

export const Button = ({title,targetHeader}) => {
  return (
    <button className=' w-[175px] h-[91px] cursor-pointer ' style={{ backgroundImage: `url(${button1})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat:'no-repeat' }}>
        <Link to={`/${targetHeader}`}>
            <span className=''>{title}</span>
        </Link>
    </button>
  )
}
