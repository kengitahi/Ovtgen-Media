import { Stack, Box } from "@mui/material"

import { VideoCard, ChannelCard } from "./"

const Videos = ({ videos, direction, heading }) => {
    return (
        <Stack
            flexDirection={direction || "row"}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
            sx={{ overflowX: "auto" }}
            className="dynamic-column"

        >
            {heading &&
                <h2 style={{ margin: 0, padding: 0 }}>Related Videos</h2>
            }
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}

        </Stack>
    )
}

export default Videos