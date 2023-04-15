
// import { Button } from "@mui/material"
// import Container from '@mui/material/Container';
// import { Stack ,Box } from "@mui/material";
import {Box} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./Home"
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [mode, setMode]= useState("light");


  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })

  return (
  
    
        // <Container maxWidth={false} sx={{width:'80%'}}>
        //   Hello
        // </Container>
        
        // <div>
        //   <Button  variant="contained"
        //   sx={{
        //     backgroundColor:"skyblue",
        //     color:"#888",
        //     margin:5,
        //     "&:hover":{
        //       backgroundColor:"lightblue"
        //     },
        //     "&:disabled":{
        //       backgroundColor:"gray",
        //       color:"white"
        //     },

        //   }}>My buuton</Button>
        // </div>
        <BrowserRouter>

        <ThemeProvider theme={darkTheme}>


        <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>

      <Routes>
        <Route
          path="/"
          element={
            <Home setMode={setMode} mode ={mode}/>
          }
        />
      </Routes>
        </Box>

        </ThemeProvider>
        </BrowserRouter>



  )
}

export default App
