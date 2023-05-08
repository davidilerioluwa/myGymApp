import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
    
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizontalScrollbar = ({data,bodyPart,setBodyPart,type,x}) => {


  const ExerciseCards=()=>{
    
    return(
      data.slice(0,3).map((exercise,index)=>{
        return( <ExerciseCard key={index} exercise={exercise}/>)
      })
    )
  }
  const BodyPartCards=()=>{
    return(
      data.map((item,index)=>(
        <Box
         key={index}
         itemID={item}
         title={item}
         m="0 40px"
         >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box> 
      ))
    )
  }
  if(type==="similarExercises"||type==="sameEquipment"){
    return (
      <div className="flex flex-row gap-[10px] flex-wrap items-center justify-center w-full p-4">
        {type==="similarExercises"||type==="sameEquipment"?<ExerciseCards/>:<BodyPartCards/>}
        
      </div>
    )
  }else{
    return(
      <div className="flex flex-row gap-[10px] overflow-x-auto overflow-y-hidden whitespace-nowrap p-4">
        {type==="similarExercises"||type==="sameEquipment"?<ExerciseCards/>:<BodyPartCards/>}
        
      </div>
    )
  }
  
}

export default HorizontalScrollbar
