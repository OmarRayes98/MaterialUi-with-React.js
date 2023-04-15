import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Rightbar = () => {
    return (
        <Box  flex={2} p={2} 
        sx={{ display:{xs:"none" , lg:"block"}}}>

            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={5}>
                    <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                    <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                    <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                    <Avatar alt="Cindy Baker" src="" />
                    <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} my={2}>
                    Latest Posts
                </Typography>

                <ImageList cols={3} rowHeight={100}  gap={5}>
                    <ImageListItem>
                        <img src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" alt="" />
                    </ImageListItem>

                </ImageList>

                <Typography variant="h6" fontWeight={100} my={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%',maxHeight: 300, overflow: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                        />
                    </ListItem>
                    
                </List>
            </Box>
        </Box>
    )
    }
    
    export default Rightbar;
    