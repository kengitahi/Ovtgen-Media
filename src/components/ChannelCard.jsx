import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100vw", md: 320 },
                height: 326,
                margin: "auto",
                marginTop
            }}
        >
            {/* Where the link gets its params depends on the structure of data we get from fetchfromAPI,
            in Feed.jsx in the first case and ChannelDetail.jsx in the second */}
            <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#fff"
                    }}
                >
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: "50%",
                            height: 180,
                            width: 180,
                            mb: 2,
                            border: "1px solid #e3e3e3"
                        }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px;" }} />
                    </Typography>

                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography variant="h6" style={{ fontSize: 14, color: "gray" }}>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box >
    )
}

export default ChannelCard