import React ,{ useEffect , useState } from 'react';
import { Box , Button , Stack ,TextField , Typography } from '@mui/material';
//import { SearchOffSharp } from '@mui/icons-material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ( { setExercises, bodyPart, setBodyPart}) => {

const [search , setSearch ] =useState('')
const [ bodyParts , setBodyParts ] =useState([])

useEffect(() =>{   

  const fetchExercisesData = async () =>{
    const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

    setBodyParts(['all', ...bodyPartsData]);

  }

   fetchExercisesData();

}, [])




const handleSearch = async () => {
  if (search) {
    const exercisesData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

         const searchedExcersises = exercisesData.filter(
          ( exercise ) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)

         );

              setSearch('');
              setExercises(searchedExcersises);
              window.scrollTo({ top: 1800, behavior: 'smooth' });
             }
}

  return (
   <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
      <Typography color="white" fontWeight={700} sx={{fontSize: {lg: '44px', xs:'30px'}}}
      mb="50px" textAlign="center" >
        Awesome Excercises You <br />
        Should Know

      </Typography>
      <Box position="relative" mb="72px"  >
          <TextField  
          sx={{
            input: {
              fontWeight: '700',
               border:'none',
               borderRadius:'12px'
            },
            width: {lg:'800px', xs:'350px'},
            backgroundColor: '#fff',
             borderRadius: "40px"
          }}
            
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase()) }
            placeholder="Search Excercises"
            type="text"
          />
          <Button className="search-btn"  
          sx={{
            
            bgcolor: '#7EAA92',
            color:'#fff',
            textTransform:'none',
            width :{lg:'175px', xs: '80px' },
            fontSize: {lg:'16px', xs:'12px'},
            height:"56px",
            position:"absolute",
            right:'0',
            px:'50px'

          }}
          onClick={handleSearch}
          >
          Search
          </Button>
      </Box>
      <Box sx={{ position: 'relative' , width: '100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
   </Stack>
  )
}

export default SearchExercises