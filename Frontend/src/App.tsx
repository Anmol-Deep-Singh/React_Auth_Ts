import { Route,Routes,Link,Navigate} from "react-router-dom"
import Auth from "./pages/Auth"
import Project from "./pages/Project"
import IsLogin from "./util/IsLogin"
const App = () => {
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