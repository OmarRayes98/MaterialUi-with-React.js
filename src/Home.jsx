import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

import Stack from "@mui/material/Stack";
import  Add  from "./components/Add";



const Home = ({mode,setMode}) => {
  return (
    <>

<Stack direction="row" spacing={{xs: 0, sm: 2}} justifyContent="space-between">

<Sidebar setMode={setMode} mode ={mode} />
<Feed/>
<Rightbar/>

</Stack>

<Add/>

    </>
  )
}

export default Home

