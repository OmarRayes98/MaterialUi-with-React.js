import { AccountBox, Groups, Home, Article, Person, Settings, Storefront, ModeNight } from "@mui/icons-material";
import { Switch } from "@mui/material";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from "react-router-dom";

const Sidebar = ({mode, setMode}) => {
    return (
        <Box  sx={{
            flex:1, 
            p:2 , 
            display:{xs:"none" , md:"block"}
            }}>
        <Box position="fixed">
        <List color={"text.primary"}>
        <ListItem component={NavLink} to="/" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
            <ListItemText sx={{color:"text.primary"}} primary="Homepage" />
            </ListItemButton>
        </ListItem>
        <ListItem component={NavLink} to="/" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Article/>
                </ListItemIcon>
            <ListItemText sx={{color:"text.primary"}} primary="Pages" />
            </ListItemButton>
        </ListItem>
        <ListItem component={NavLink} to="/" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Groups/>
                </ListItemIcon>
            <ListItemText sx={{color:"text.primary"}} primary="Groups" />
            </ListItemButton>
        </ListItem>
        <ListItem component={NavLink} to="/" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Storefront/>
                </ListItemIcon>
            <ListItemText sx={{color:"text.primary"}} primary="Marketplace" />
            </ListItemButton>
        </ListItem>
        <ListItem component={NavLink} to="/" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
            <ListItemText sx={{color:"text.primary"}} primary="Friends" />
            </ListItemButton>
        </ListItem>
        <ListItem component={NavLink} to="/" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
            <ListItemText sx={{color:"text.primary"}} primary="Setting" />
            </ListItemButton>
        </ListItem>
        <ListItem component={NavLink} to="/" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <AccountBox/>
                </ListItemIcon>
            <ListItemText sx={{color:"text.primary"}} primary="Profile" />
            </ListItemButton>
        </ListItem>
        <ListItem   disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <ModeNight/>
                </ListItemIcon>
                <Switch onChange={e=> setMode(mode==="light" ? "dark" : "light")} />
            </ListItemButton>
        </ListItem>
        </List>

        </Box>
        </Box>
    )
    }
    
    export default Sidebar;
    