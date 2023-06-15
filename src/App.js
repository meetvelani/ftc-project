import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ViewProfile } from "./pages/ViewProfile/ViewProfile";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileViewOptions } from "./components/MobileViewOptions/MobileViewOptions";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/view-profile"
            element={
              <>
                <Navbar />
                <ViewProfile />
                <MobileViewOptions />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
