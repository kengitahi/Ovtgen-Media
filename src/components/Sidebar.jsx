import { Stack, Typography } from "@mui/material"
import { categories } from "../utils/constants"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { xs: "auto", md: "95%" },
                flexDirection: { md: "column" }
            }}
        >
            {categories.map((category) => (
                <button
                    key={category.name}
                    className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && "#fc1503",
                        color: "#fff",
                    }}
                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? "#fff" : "#fc1503",
                            marginRight: "10px"
                        }}
                    >
                        <category.icon />
                    </span>
                    <span
                        style={{
                            opacity: category.name === selectedCategory ? "1" : "0.8",
                            marginRight: "10px"
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))
            }
            <Typography
                className="copyright"
                variant="body2"
                sx={{ mt: 1.5, color: "#fff" }}
            >
                Copyright 2023 Ovtgen Media
            </Typography>
        </Stack>
    )
}

export default Sidebar