import { Route,Routes,Navigate} from "react-router-dom"
import Auth from "./pages/Auth"
import Project from "./pages/Project"
import IsLogin from "./util/IsLogin"
import { useState,useEffect } from "react"
const App = () => {
  const [theme,Settheme] = useState('theme_purple_dark dark');
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<Auth />}/>
      <Route path="/:project" element={<IsLogin><Project /></IsLogin>}/>
    </Routes>
    </>
  )
}

export default App