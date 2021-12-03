import './App.css';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import HomeLogin from "./components/HomeLogin";
import HomeRegistration from "./components/HomeRegistration";
import HomeLogout from "./components/HomeLogout";
import HomeGiveBack from "./components/HomeGiveBack";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/HomeLogin" exact element={<HomeLogin />}/>
            <Route path="/HomeRegistration" element={<HomeRegistration />} />
            <Route path="/HomeLogout" element={<HomeLogout />} />
            <Route path="/HomeGiveBack" element={<HomeGiveBack />} />
        </Routes>
    </>

  );
}

export default App;
