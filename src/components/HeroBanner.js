import React from 'react'
import {Box,Button,Stack,Typography} from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png"
import { Toys } from '@mui/icons-material';
const HeroBanner = () => {
    return (
       <Box sx={{mt:{lg:"212px",xs:"40px "},ml:{sm:"50px"}}} position="relative" p="20px">
           <Typography color="#ff2625" fontWeight="600" fontSize="25px">
             Fitness Sure
           </Typography>
           <Typography fontWeight="700" sx={{fontSize:{lg:"44px",xs:"40px"}}} mb="23px" mt="30px">
               Sweat , Smile &<br/>  Repeat
           </Typography>
           <Typography lineHeight="35px" fontSize="22px" mb={4}>
               Click to explore more exercises
           </Typography>
            <Button variant="contained" color="error" href="/" sx={{backgroundColor:"#ff2526",padding:"15px"}}>
                Explore Exercises
            </Button>
            <Typography fontWeight="800" fontSize="200px" color="#ff2625" sx={{opacity:0.1,display:{lg:"block",xs:"none"}}}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
       </Box>
    )
}

export default HeroBanner
