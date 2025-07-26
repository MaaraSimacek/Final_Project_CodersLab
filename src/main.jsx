import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router'

import { Home } from "./Home/Home.jsx"
import { Movies } from "./Movies/Movies.jsx"
import { Faq } from "./FAQ/Faq.jsx"
import { Contacts } from "./Contacts/Contacts.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<App />}>
        <Route index element={<Home />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='faq' element={<Faq />}/>
        <Route path='contacts' element={<Contacts />}/>
       </Route>
      </Routes>    
    </BrowserRouter>
  </StrictMode>
)
