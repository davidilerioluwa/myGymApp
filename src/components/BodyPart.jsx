import React, { useEffect, useState } from 'react'
import {Stack,Typography} from "@mui/material"
import Icon from "../assets/icons/gym.png"
const BodyPart = ({item,setBodyPart,bodyPart}) => {

  
  return (
    <Stack
    style={item===bodyPart?{ border:"2px red solid"}:{}}
    onClick={()=>{
        setBodyPart(item)
        window.scrollTo({top:1800,left:100,behavior:"smooth"})
    }}
    className={`cursor-pointer bodyPart-card flex bg-white w-[200px] h-[200px] items-center justify-center`}
    >
        <img src={Icon} className='w-[40px] '/>
        <p className='font-bold mt-[9px]'>{item}</p>
    </Stack>
  )
}

export default BodyPart