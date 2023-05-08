import React,{useEffect,useState} from 'react'
import { Pagination,Box,Typography,Stack } from '@mui/material'

import { fetchData,fetchOptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({setExercises,bodyPart,exercises}) => {

const [currentPage,setCurrentPage]=useState(1) 
const exercisesPerPage=9; 
const paginate=(e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1600,behaviour:"smooth"})
}

useEffect(()=>{
  const searchExercises=async()=>{
    const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/',fetchOptions)
    if (bodyPart==="all"){
      setExercises(exerciseData)
    }else{
      const filteredExercises=exerciseData.filter((exercise)=>exercise.bodyPart.toLowerCase()===bodyPart)
      setExercises(filteredExercises)
    }
  }
  searchExercises()
},[bodyPart])

const indexOfLastExercise=currentPage*exercisesPerPage;
const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage
const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  return (
    <Box id="exercises"
      sx={{
        mt:{lg:"110px"}
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
         sx={{
          gap:{lg:"110px",xs:"50px"}
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise,index)=>{
          return(
              <ExerciseCard
              key={index}
              exercise={exercise}
              />
          )
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length>9 && (
              <Pagination
                color="standard"
                shake="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length/exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises