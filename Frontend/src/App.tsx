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
      <Route path="/" element={<IsLogin><Project /></IsLogin>} />
      <Route path="/auth" element={<Auth />}/>
    </Routes>
    </>
  )
}

export default App