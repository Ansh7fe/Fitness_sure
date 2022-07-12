import React from 'react'
import {Box,Stack,Typography} from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from './Loader';
const SimilarExercise = ({targetMuscleExercise,equipmentExercise}) => {
    return (
       <Box sx={{mt:{lg:"100px",xs:"0"}}}>
       <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
        <Stack direction="row" sx={{p:'2',position:"relative",mb:'20px'}}>
            {targetMuscleExercise.length?<HorizontalScrollBar data={targetMuscleExercise.slice(0,15)}/> : <Loader/>}
        </Stack>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
        <Stack direction="row" sx={{p:'2',position:"relative"}}>
            {equipmentExercise.length?<HorizontalScrollBar data={equipmentExercise.slice(0,15)}/> : <Loader/>}
        </Stack>
       </Box>
    )
}

export default SimilarExercise
