import React,{useState} from 'react';
import {Box} from "@mui/material"
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercise, setExercise] = useState([]);
    return (
       <Box>
           <HeroBanner />
           <SearchExercises setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart} />
           <Exercises setExercise={setExercise} bodyPart={bodyPart} exercise={exercise}/>
       </Box>
    )
}

export default Home
 