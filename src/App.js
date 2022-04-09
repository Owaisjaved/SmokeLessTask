import Home from "./component/Home/Home";
import Location from "./component/Location/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetail from "./component/DetailPage/CardDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
