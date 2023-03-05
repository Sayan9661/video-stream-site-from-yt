import React from 'react'
import { Stack,Box } from '@mui/material';
import {VideoCard,ChannelCard} from './';

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'loading the videos'

  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item,idx) => (
        <Box key={idx}>
        {/* either a yt channel card or video card is rendered */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>

      ))
       }
    </Stack>
  )
}

export default Videos