import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import DayJS from 'react-dayjs';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"
import { htmlEntities } from "../utils/htmlEntities.js"
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: "100vw", sm: 358, md: 320 }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: { xs: "100vw", sm: 358, md: 320 }, height: { xs: "320px", md: 180 } }}
                />
            </Link>
            <CardContent
                sx={{ height: 106, backgroundColor: "#1e1e1e", }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                        {htmlEntities(snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60))}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray" id="video_title">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px;" }} />
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray" id="video_title">
                        Posted On <DayJS format="DD, MMM YYYY">{snippet?.publishedAt}</DayJS>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard