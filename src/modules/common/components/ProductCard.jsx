import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function ProductCard({id, title, price, imageUrl, rating }) {
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Link to={`/products/${id}`}>
                {/* Image */}
                <CardMedia sx={{ height: 140 }} image={imageUrl} title={title} component="img"/>
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    {/* Title */}
                    <Typography gutterBottom variant="h6" component="div" sx={{ flexGrow: 1 }} >
                        {title}
                    </Typography>
                    <Box>
                        <Typography gutterBottom variant="h5" component="div">
                            ${price}
                        </Typography>
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button size="small" variant="contained">
                    Add to Cart
                    </Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Link>
        </Card>
    );
}