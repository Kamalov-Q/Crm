/* eslint-disable no-unused-vars */
import SinglePage from "./Components/SinglePage/SinglePage";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";

import { Route, Routes } from "react-router-dom";
import New from "./Pages/New/New";
import { productInputs, userInputs } from "./formSource";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users/">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<SinglePage/>}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<SinglePage/>}/>
            <Route path="new" element={<New inputs={productInputs} title={"Add New User"}/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
