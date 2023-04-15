// import { AppBar, Toolbar,Box ,styled, Typography, InputBase, Badge, Avatar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import {styled} from '@mui/material';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';


import { Mail , Pets } from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';




import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({theme}) => ({

    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",


}));

const Icons = styled(Box)(({theme}) => ({

    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex",
    }
}));


const UserBox = styled(Box)(({theme}) => ({

    display:"flex",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
}));

const Navbar = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    let open = Boolean(anchorEl);


    const handleClick = (event)=>{
        if(open ===false)
        setAnchorEl(event.currentTarget);
        else
        setAnchorEl(null);
    }

return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
            
            <Pets sx={{display:{xs:"block", sm:"none"}}}/>

            <Search>
            <InputBase placeholder="search..." />
            </Search>

            <Icons>
            <Badge badgeContent={4} color="error">
                <Mail/>
            </Badge>

            <Badge badgeContent={2} color="error">
                <NotificationsIcon />
            </Badge>

            <Avatar sx={{width:30 ,height:30, cursor:"pointer"}}
            src=""
            onClick={(event) =>handleClick(event)}  />

            </Icons>

            <UserBox onClick={(event) =>handleClick(event)}>
            <Avatar sx={{width:30 ,height:30 ,cursor:'pointer' }} src="" />

            <Typography variant="span">John</Typography>

            </UserBox>

        </StyledToolbar>
        <Menu
        id="account-menu"
        anchorEl={(anchorEl)}
        open={open}
        onClose={(event) =>handleClick(event)}

        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 6,
            ml: -0.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <MenuItem  onClick={(event) =>handleClick(event)}>
          <Avatar/> Profile
        </MenuItem>
        <MenuItem onClick={(event) =>handleClick(event)} >
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={(event) =>handleClick(event)}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        </Menu>


    
    </AppBar>
)
}

export default Navbar;
