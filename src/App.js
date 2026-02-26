
import {Routes, Route} from "react-router-dom"
import Reg from "./Reg"
import Home from "./Home"
function App()
{
  return(
    <>
      <h1>Iam App</h1>
      <Routes>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path="/h" element={<Home/>}></Route>
      </Routes>
    </>
  )
}
export default App;