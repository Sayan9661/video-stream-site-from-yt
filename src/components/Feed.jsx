import { useState,useEffect } from "react"
import {Box,Stack,Typography} from '@mui/material'
import {Sidebar,Videos} from './'
import { fetchFromAPI } from "../utils/FetchFromAPI"

// const BASE_URL='https://youtube-v31.p.rapidapi.com/'

const Feed = () => {


  //usestate is hook for using state of new we destructure it for data and methos to set it
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

//hook -->renders every time something changes in its dependency list..2nd args
//async function so cant set to a var have to use .then to fetch data
  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  }, [selectedCategory]);




  return (
    <Stack sx={{
      flexDirection: {
        sx: "column",
        md:"row"
      }
    }}>

      {/* this is the sidebar */}
      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px:{sx:0,md:2}
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright"
          variant="body3" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright Sayan Project 2023
        </Typography>
      </Box>


      
      {/* this is the videos section  */}
      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <Typography variant="h4"
          fontWeight="bold" mb={2}
          sx={{ color: 'red' }}
        >
          { selectedCategory}<span style={{ color:'#3EB489'}}> videos </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed