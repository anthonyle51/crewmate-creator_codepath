import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import CreateCrewmate from './components/createCrewmate'
import CrewmateGallery from './components/crewmateGallery'
import DetailView from './components/detailView'
import EditCrewmate from './components/editCrewmate'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route index={true} path="/" element={<App />}/>
      <Route index={false} path="/create-crewmate" element={<CreateCrewmate />}/>
      <Route index={false} path="/crewmate-gallery" element={<CrewmateGallery />}/>
      <Route index={false} path="/crewmate-detailview/:id/:name" element={<DetailView />}/>
      <Route index={false} path="/edit-crewmate/:id/:name" element={<EditCrewmate />}/>
    </Routes>
  </BrowserRouter>
)
