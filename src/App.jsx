/* eslint-disable no-unused-vars */
import Home from "./Pages/Home/Home"
import List from "./Pages/List/List"

import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
