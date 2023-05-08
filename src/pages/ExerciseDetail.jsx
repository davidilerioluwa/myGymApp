import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"

import {fetchOptions,fetchData,youtubeOPtions} from "../utils/fetchData"
import Details from '../components/Details'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
const ExerciseDetail = () => {
  const [exerciseVideos,setExerciseVideos]=useState([])
  const [exerciseDetail,setExerciseDetail]=useState({})
  const [targetMuscleExerciseData,setTargetMuscleData]=useState([])
  const [equipmentExerciseData,setEquipmentExerciseData]=useState([])
  const {id}= useParams();
  useEffect(()=>{
    const getExerciseDetail=async()=>{
      const exerciseDbUrl=`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
      const exerciseData=await fetchData(exerciseDbUrl,fetchOptions)
      setExerciseDetail(exerciseData);

      const youtubeSearchUrl=`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`
      const youtubeData=await fetchData(youtubeSearchUrl,youtubeOPtions)
      setExerciseVideos(youtubeData);

      const targetMuscleExerciseUrl=`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseData.target}`
      const targetMuscleExerciseData= await fetchData(targetMuscleExerciseUrl,fetchOptions)
      setTargetMuscleData(targetMuscleExerciseData);
      const equipmentExerciseUrl=`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseData.equipment}`
      const equipmentExerciseData= await fetchData(equipmentExerciseUrl,fetchOptions)
      setEquipmentExerciseData(equipmentExerciseData);
    } 
    getExerciseDetail()
  },[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExerciseData={targetMuscleExerciseData} equipmentExerciseData={equipmentExerciseData}/>
    </Box>
  )
}

export default ExerciseDetail