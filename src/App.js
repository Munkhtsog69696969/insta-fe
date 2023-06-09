import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DataProvider } from "./context/DataProvider";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";


function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
