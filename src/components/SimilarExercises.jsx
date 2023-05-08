import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import HorizontalScrollbar from "./HorizontalScrollbar"
import ExerciseCard from './ExerciseCard'
import Loader from "./Loader"

const SimilarExercises = ({targetMuscleExerciseData,equipmentExerciseData}) => {

  return (
    <Box sx={{
      mt:{lg:"100px",xs:"0"}
    }}>
      <Typography variant="h3">Exercise that target the same muscle group</Typography>
      <Stack direction="row" sx={{
        p:"2",
        position:"relative"
      }}>

        {targetMuscleExerciseData.length?<HorizontalScrollbar data={targetMuscleExerciseData} type="similarExercises"/>:<Loader/>}
          
  
      </Stack>

        <Typography variant="h3">Exercise that use the same equipment</Typography>
        <Stack direction="row" sx={{
          p:"2",
          position:"relative"
        }}>
 
          {equipmentExerciseData.length?<HorizontalScrollbar data={equipmentExerciseData} type="sameEquipment" x="eq"/>:<Loader/>}
            
          
            
        </Stack>
    </Box>
  )
}

export default SimilarExercises