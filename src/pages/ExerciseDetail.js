import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail"
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercise from "../components/SimilarExercise";
import { fetchData, options ,youtubeOptions} from "../utils/fetchData"

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [videoData, setVideoData] = useState([]); 
    const [targetMuscleExercise, setTargetMuscle] = useState([]);
    const [equipmentExercise, setEquipmentExercise] = useState([]);
    const {id}=useParams(); 
    useEffect(()=>{
            const fetchExerciseData=async ()=>{
                const exerciseDbUrl= "https://exercisedb.p.rapidapi.com";
                const youtubeSearchUrl="https://youtube-search-and-download.p.rapidapi.com";

                const particularExerciseData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,options);
                setExerciseDetail(particularExerciseData);

                const exerciseVideoData =await fetchData(`${youtubeSearchUrl}/search?query=${particularExerciseData.name}`,youtubeOptions);
                setVideoData(exerciseVideoData.contents);

                const targetMuscleExerciseData=await fetchData(`${exerciseDbUrl}/exercises/target/${particularExerciseData.target}`,options);
                setTargetMuscle(targetMuscleExerciseData);
                console.log(targetMuscleExercise);

                const equipmentExerciseData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${particularExerciseData.equipment}`,options);
                setEquipmentExercise(equipmentExerciseData);
            }

            fetchExerciseData();
    },[id])
    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideo exerciseVideo={videoData} name={exerciseDetail.name}/>
            <SimilarExercise targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise}/>
        </Box>
    )
}

export default ExerciseDetail
