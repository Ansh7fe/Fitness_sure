import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar"
import {fetchData,options} from "../utils/fetchData"
const SearchExercises = ({setExercise,bodyPart,setBodyPart}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [bodyParts,setBodyParts]=useState([]);
    useEffect(() => {
        const fetchExerciseData=async()=>{
        const bodyPartData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);
        setBodyParts(['all',...bodyPartData]);
        }

        fetchExerciseData();
    }, [])
    const handleSearch= async()=>{
        if(searchTerm){
            const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',options)
            const searchExercise=exerciseData.filter((exercise)=> exercise.name.toLowerCase().includes(searchTerm)||exercise.target.toLowerCase().includes(searchTerm)||exercise.bodyPart.toLowerCase().includes(searchTerm)||exercise.equipment.toLowerCase().includes(searchTerm));
            setSearchTerm('');
            setExercise(searchExercise);
        }

    }
    
    return (
        <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
                <Typography fontWeight="700" sx={{fontSize:{lg:"44px",xs:"30px"}}} mb="45px" textAlign="center">
                    Awesome Exerciese You <br/> Should Know
                </Typography>
                <Box position="relative" mb="72px">
                    <TextField 
                    sx={{input:{fontWeight:"500",border:"none", borderRadius:"5px"},width:{lg:"800px",xs:"350px"},backgroundColor:"#fff",borderRadius:"40px"}} 
                    height="76px" 
                    value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())} 
                    placeholder="Search Exercise"
                     type="text"/>
                    <Button className="search-btn" 
                     sx={{backgroundColor:"#ff2526",color:"#fff",textTransform:"none",width:{lg:"170px",xs:"80px"},fontSize:{lg:"20px",xs:"14px"},
                    height:"56px",position:"absolute",right:"0"}}
                    onClick={handleSearch}>Search </Button>
                </Box>
                <Box sx={{position:"relative",width:"100%",padding:"20px"}}>
                    <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
                </Box>
        </Stack>
    )
}

export default SearchExercises

