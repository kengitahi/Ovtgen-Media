import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player/youtube"

import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setRelatedVideos(data.items))
        // .then(console.log(data))
    }, [id])

    // To prevent an error when UI is rendered before getting data
    if (!videoDetail?.snippet) return (<h2>Loading Video...</h2>)

    // Then destructure videoDetail data to use in the UI
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

    return (
        <Box minHeight="95vh">
            <Stack direction={{ sx: "column", md: "row" }} >
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "86px", paddingInline: "16px", boxSizing: "border-box" }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
                        <Typography variant="h5" paddingBlock={2}>{title}</Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ color: "#fff" }}
                            py={1}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography color="#fff" variant="subtitle1">
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "10px" }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ xs: 5, md: 1 }} justifyContent="center" alignItems="center">
                    {relatedVideos &&
                        <Videos videos={relatedVideos} direction="column" heading />
                    }
                </Box>
            </Stack>

        </Box>
    )
}

export default VideoDetail