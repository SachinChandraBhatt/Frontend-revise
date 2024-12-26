// import './App.css'
// import Header from './Components/Header/Header'
// import Layout from './Layout'
// import About from './Pages/About'
// import Hero from './Pages/Hero'
// import Contact from './Pages/Contact'
// import Projects from './Pages/Projects'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Button from '@shadcn_ui'; // Default import
import { Stack } from "@mui/material"
import SignIn from "./Components/SignIn"

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout />}>
  //       <Route path='' element={<Hero />} />
  //       <Route path='about' element={<About />} />
  //       <Route path='contact' element={<Contact />} />
  //       <Route path='projects' element={<Projects />} />
  //       {/* <Route path='user/:userid' element={<User />} /> */}
  //       {/* <Route 
  //       loader={githubInfoLoader}
  //       path='github' 
  //       element={<Github />}
  //        /> */}
  //     </Route>
  //   )
  // )

  return (
    <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
      <SignIn />    
      {/* <RouterProvider router={router} /> */}
    </Stack>
  )
}

export default App
