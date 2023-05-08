import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from "@mui/material"

import { fetchOptions,fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {


  const [search,setSearch]=useState("")
 
  const [bodyParts,setBodyParts]=useState([])
  

  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',fetchOptions)
      setBodyParts(["all",...bodyPartsData])
    }
    fetchExercisesData();
  },[])

  const handleSearch=async ()=>{
    if(search){
      const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/',fetchOptions)
      const searchedData=exerciseData.filter((exercise)=>{
          return(
            exercise.name.toLowerCase().includes(search)||exercise.bodyPart.toLowerCase().includes(search)||exercise.equipment.toLowerCase().includes(search)||exercise.target.toLowerCase().includes(search)
          )
      })
      setSearch("")
      setExercises(searchedData)
      console.log(searchedData);
    }
}

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize:{lg:"44px",xs:"30px"},
          mb:"50px",
          textAlign:"center"
        }}
      >
        Awesome Exercises you should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input: {fontWeight:"700",border:"none",borderRadius:"4px"},
          width:{lg:"800px",xs:"350px"},
          backgroundColor:"#fff",
          borderRadius:"40px"
        }}
          height="76px"
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLocaleLowerCase())}}
          placeholder='search exercises'
        />
        <Button className='search-btn'
          sx={{
            bgcolor:"#FF2625",
            color:"#fff",
            textTransform:"none",
            width:{lg:"175px",xs:"80px"},
            fontSize:{lg:"20px",xs:"14px"},
            height:"56px",
            position:"absolute",
            right:"0"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>

      </Box>
      <Box sx={{
        position:"relative",
        width:"100%",
        p:"20px"
      }}>
          <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} bodyParts={true}/>
      </Box>
     
    </Stack>
  )
}

export default SearchExercises