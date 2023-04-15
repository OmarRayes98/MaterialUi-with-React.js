import styled from "@emotion/styled";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import { Avatar, Button, ButtonGroup, Fab , TextField, Tooltip, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Stack } from "@mui/system";
import { useState } from "react";



const StyleModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

});

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"

})

const Add = () => {

    const [open , setOpen] = useState(false);
return (
    <>
    <Tooltip onClick={e=> setOpen(true)} title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px )", md: 30} }}>
        <Fab color="primary" aria-label="add">
            <AddIcon/>
        </Fab>

    </Tooltip>

        <StyleModal 
            open={open}
            onClose={e=> setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={300}  borderRadius={5} p={3}>
                <Typography variant="h6" color="gray" textAlign="center">
                    Create post 
                </Typography>
                <UserBox >
                    <Avatar src="https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337__340.jpg"
                    sx={{width:30, height: 30}} alt="" />

                    <Typography fontWeight={500} variant="span" >Omar</Typography>
                
                </UserBox>
                <TextField id ="standard-multiline-static"
                sx={{width:"100%"}}
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"/>

                <Stack direction="row" gap={1} mt ={2} mb={3} >
                    <EmojiEmotions color="primary" />
                    <Image color="secondary" />
                    <VideoCameraBack color="success" />
                    <PersonAdd color="error" />
                    
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}>
                        <DateRange/>
                    </Button>
                </ButtonGroup>
            </Box>
        </StyleModal>
    
    </>
)
}

export default Add
