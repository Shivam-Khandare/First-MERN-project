import { Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.200", "black")}>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/create' element={<CreatePage/>}/>
        </Routes>
    </Box>
  )
}
