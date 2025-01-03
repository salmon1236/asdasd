// App.jsx
import { useState } from "react";
import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";

import MainPg from "./pages/MainPg";
import AnimalPg from "./pages/AnimalPg";
import HistoryPg from "./pages/HistoryPg";
import EnvironmentPg from "./pages/EnvironmentPg";
import SciencePg from "./pages/SciencePg";
import TravelPg from "./pages/TravelPg";
import NotFoundPg from "./pages/NotFoundPg";

function App() {
  const [openResMenu, setOpenResMenu] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderCp openResMenu={openResMenu} setOpenResMenu={setOpenResMenu} />
        {/* <header></header> */}

        <main>
          <Routes>
            <Route
              path="/"
              element={<MainPg setOpenResMenu={setOpenResMenu} />}
            />
            <Route
              path="/animal"
              element={<AnimalPg setOpenResMenu={setOpenResMenu} />}
            />
            <Route
              path="/history"
              element={<HistoryPg setOpenResMenu={setOpenResMenu} />}
            />
            <Route
              path="/environment"
              element={<EnvironmentPg setOpenResMenu={setOpenResMenu} />}
            />
            <Route
              path="/science"
              element={<SciencePg setOpenResMenu={setOpenResMenu} />}
            />
            <Route
              path="/travel"
              element={<TravelPg setOpenResMenu={setOpenResMenu} />}
            />
            <Route
              path="*"
              element={<NotFoundPg setOpenResMenu={setOpenResMenu} />}
            />
          </Routes>
        </main>
        <FooterCp />
      </BrowserRouter>
    </div>
  );
}

export default App;
