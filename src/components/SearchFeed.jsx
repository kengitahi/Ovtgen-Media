import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Box, Typography } from "@mui/material"

import { fetchFromAPI } from "../utils/fetchFromAPI"

import { Videos } from "./" //We are already in the components folder

const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    // To prevent an error when UI is rendered before getting data
    if (!videos) return (<h2>Loading Search results...</h2>)


    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Search Results For <span style={{ color: "#fc1503" }}> {capitalize(searchTerm)}</span> Videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed