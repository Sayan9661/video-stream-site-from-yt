import { useState,useEffect } from "react"
import {Box,Typography} from '@mui/material'
import {Videos} from './'
import { fetchFromAPI } from "../utils/FetchFromAPI"
import { useParams } from "react-router-dom"
// const BASE_URL='https://youtube-v31.p.rapidapi.com/'

const SearchFeed = () => {

  const { searchTerm } = useParams();
  console.log({ searchTerm });
  //usestate is hook for using state of new we destructure it for data and methos to set it
  const [videos, setVideos] = useState([]);

//hook -->renders every time something changes in its dependency list..2nd args
//async function so cant set to a var have to use .then to fetch data
  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  }, [searchTerm]);


  return (
      // {/* this is the videos section  */}
      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <Typography variant="h4"
          fontWeight="bold" mb={2}
          sx={{ color: 'red' }}
        >
        Search Results for<span style={{ color: '#3EB489' }}> { searchTerm}</span> videos.
        </Typography>
        <Videos videos={videos} />
      </Box>
  )
}

export default SearchFeed;