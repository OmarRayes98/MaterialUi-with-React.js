import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from "@mui/material/Box";
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Post from './Post';

const Feed = () => {
    return (
        <Box  flex={4}  p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>


        </Box>
    )
    }
    
    export default Feed;
    