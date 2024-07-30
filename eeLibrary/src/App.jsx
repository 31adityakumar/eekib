import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Messages from "./components/Messages/Messages";
import Material from "./Pages/Material/Material";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} key="route-home-screen" />
          <Route exact path="/material" element={<Material />} key="route-home-screen" />
          <Route exact path="/messages" element={<Messages/>} key="route-home-screen" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
