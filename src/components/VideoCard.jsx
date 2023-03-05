import React from "react"
import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import {demoThumbnailUrl,demoVideoUrl,demoChannelTitle,demoChannelUrl,demoVideoTitle} from '../utils/constants'


const VideoCard=({video:{id:{videoId},snippet}})=>{

  return (
      <Card sx={{
          width: { xs: '100%', sm: '358px', md: "320px", },
        boxShadow:'none',borderRadius:'0'
      }}>
          
          {/* the image of the video in the card */}
          <Link to={videoId?
              `/video/${videoId}`
              : demoVideoUrl}>
              <CardMedia
                  image={snippet?.thumbnails?.high?.url||demoThumbnailUrl}
                  alt={snippet?.title}
                  sx={{ width: { xs: '100%', sm: '358px',md:'320px'}, height: 180 }}
        />
        </Link>
              <CardContent sx={{
                  backgroundColor: '#333333',
                  height: '106px'
        }} >
          
                  
                {/* description of video */}
              <Link to={videoId ?
              `/video/${videoId}`
                  : demoVideoUrl}>
                  <Typography variant="subtitle1"
                  fontWeight="bold" color="#8B8000">
                      {snippet?.title.slice(0, 70) ||
                      demoVideoTitle.slice(0,70)}
                    </Typography>
                      
                  </Link>
                  
                  {/* channel title in card */}
                  <Link to={snippet?.channelId?
              `/channel/${snippet?.channelId}`
                  : demoChannelUrl}>
                  <Typography variant="subtitle2"
                  fontWeight="bold" color="#3EB489">
                          {snippet?.channelTitle || demoChannelTitle}
                          <CheckCircle sx={{
                              fontSize: 12,
                              color: '#3EB489', ml: '5px'
                          }}/>
                      </Typography>
                      
              </Link>
              </CardContent>
          
    </Card>
  )
}

export default VideoCard