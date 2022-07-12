import React from 'react';
import {Stack,Typography,Box} from "@mui/material";
import GymImage from "../assets/icons/gym.png";

const BodyPart = ({item,setBodyPart,bodyPart}) => {
    return (
        <Stack className="bodyPart-card" alignItems="center" justifyContent="center" type="button"
    sx={bodyPart === item ? {
         borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }} onClick={
        ()=>{setBodyPart(item);
             window.scrollTo({top:1800,left:100,behavior:"smooth"})
    }} 
        >
                <img src={GymImage} alt="dumbell"  style={{width:"40px",height:"40px"}}/>
                <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
                    {item}
                </Typography>
        </Stack>
    )
}

export default BodyPart
