import React from 'react'
import {Link} from "react-router-dom";
import {Button,Stack,Typography} from "@mui/material"
const ExerciseCard = ({ex}) => {
    return (
       <Link className="exercise-card" to={`/exercise/${ex.id}`}>
           <img src={ex.gifUrl} alt={ex.name} loading="lazy"/>
           <Stack direction="row">
               <Button sx={{ml:"21px",color:"#fff",background:"#ffa9a9",fontSize:"11px",textTransform:"captalize",borderRadius:"15px"}}>
                {ex.bodyPart}
               </Button>
               <Button sx={{ml:"21px",color:"#fff",background:"#fcc757",fontSize:"11px",textTransform:"captalize",borderRadius:"15px"}}>
                {ex.target}
               </Button>
           </Stack>
           <Typography textTransform="capitalize" ml="21px" mt="11px" pb="10px" color="#000" fontSize="22px" fontWeight="bold">
               {ex.name}
           </Typography>
          
       </Link>
    )
}

export default ExerciseCard
