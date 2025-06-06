import { StrictMode } from 'react'
import { ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutRoot from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Layout from './Layout.jsx'
import Github from './Components/Github/Github.jsx'

// import Github, { githubinfoLoader }    // upr wala method "gitinfoLoader" comment out kr ke hi ye lika h yha 




const router = createBrowserRouter( [
      {
        path: "/", 
        element: <LayoutRoot /> ,
        children: [
          {
            path: "" ,
            element: <Home /> 
          }, 
          {
            path: "About",
            element:  <About />
          }, 
          {
            path: "Contact",
            element:  <Contact />
          },
          {
            path: "User/:userid",      //user k bd slash k andr jo bhi aaye , uska syntax hota h / k bd : k bd jo b value do Very imp hota h. note down kr skte h////   then , render krwa do component jo b liya h mne user component liya h so , whi krwaya//
            element: <User />
          },
        

           {

            // loader={githubinfoLoader} 

            path: "Github",
            element: <Github />
          }
        ]
      }    
])


/////ALTERNATE WAY ALSO FOR CREATING ROUTE ////////

    // const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route path="/" element={ <Layout />}>
    //         <Route path="" element={<Home />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="contact" element={<Contact />} />
    //     </Route> 
    //   )
    // )

    
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} /> 

  </StrictMode>,
)




//  above path: "/"  here, slash / is TOP LEVEL ELEMENT iske andr hi to hoge - About us / contact us  i.e "NESTING"