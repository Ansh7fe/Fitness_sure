import React from 'react';
import {Box,Stack,Typography} from "@mui/material";
import Loader from "./Loader"
const ExerciseVideo = ({name,exerciseVideo}) => {
    if(!exerciseVideo.length) return <Loader />;

    return (
        <Box sx={{marginTop:{lg:"100px",xs:"20px"}}} p="20px">
        <Typography 
        textTransform="capitalize" 
        variant="h3"
        fontWeight="bold"
         mb="30px">
            Watch <span style={{color:"#ff2625"}}>{name}</span> exercise videos
        </Typography>
        <Stack 
        justifyContent="center" 
        flexWrap="wrap"
        alignItems="center"
        sx={{
            flexDirection:{lg:"row"},
            gap:{lg:"110px",xs:0}
        }}>
            {exerciseVideo?.slice(0,3).map((item,index)=>(
                <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
                key={index}
                className="exercise-video"
                target="_blank"
                rel="noreferrer">
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} height="240px"/>
                    <Box>
                        <Typography  variant="h5" color="#000">
                            {item.video.title}
                        </Typography>
                        <Typography variant="h6" color="#000">
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            )
            )}
        </Stack>
        </Box>
    )
}

export default ExerciseVideo
