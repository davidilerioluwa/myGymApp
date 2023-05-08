import { Button, Stack } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom"

const ExerciseCard = ({exercise}) => {
  return (
    <Link 
        to={`/exercise/${exercise.id}`} 
        className='exercise-card w-[250px] flex flex-col bg-white p-2 items-center text-center'>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction="row">
            <Button sx={{
                ml:"21px",
                color:"#fff",
                background:"#ffa9a9",
                fontSize:"14px",
                borderRadius:"20px",
                textTransform:"capitalize"
            }}>{exercise.bodyPart}</Button>
             <Button sx={{
                ml:"21px",
                color:"#fff",
                background:"#fcc757",
                fontSize:"14px",
                borderRadius:"20px",
                textTransform:"capitalize"
            }}>{exercise.target}</Button>
        </Stack>
        <p className='font-bold mt-[5px]'>{exercise.name.toUpperCase()}</p>
     </Link>
  )
}

export default ExerciseCard