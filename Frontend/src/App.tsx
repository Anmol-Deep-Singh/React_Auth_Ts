import { Route,Routes,Navigate} from "react-router-dom"
import Auth from "./pages/Auth"
import Project from "./pages/Project"
import IsLogin from "./util/IsLogin"
import { useState,useEffect } from "react"
import {Toaster} from 'react-hot-toast';

const App = () => {
  const [theme,Settheme] = useState('theme_purple_light light');
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<Auth />}/>
      <Route path="/:project" element={<IsLogin><Project /></IsLogin>}/>
    </Routes>
    </>
  )
}

export default App