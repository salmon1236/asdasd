import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";

import MainPg from "./components/page/MainPg";
import AnimalPg from "./components/page/AnimalPg"
import EnvironmentPg from "./components/page/EnvironmentPg";
import SciencePg from "./components/page/SciencePg";
import TravelPg from "./components/page/TravelPg";
import HistoryPg from "./components/page/HistoryPg";
import NotFoundPg from "./components/page/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderCp />
        <main>
          <Routes>
            <Route path="/" element={<MainPg />}></Route>
            <Route path="/animal" element={<AnimalPg />}></Route>
            <Route path="/history" element={<HistoryPg />}></Route>
            <Route path="/environment" element={<EnvironmentPg />}></Route>
            <Route path="/science" element={<SciencePg />}></Route>
            <Route path="/travel" element={<TravelPg />}></Route>
            <Route path="*" element={<NotFoundPg />}></Route>
          </Routes>
        </main>
        <FooterCp />
      </BrowserRouter>
    </div>
  );
}

export default App;
