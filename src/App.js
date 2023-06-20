import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ViewProfile } from "./pages/ViewProfile/ViewProfile";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileViewOptions } from "./components/MobileViewOptions/MobileViewOptions";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import { Shop } from "./pages/Shop/Shop";

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
          <Route
            path="/edit-profile"
            element={
              <>
                <Navbar />
                <EditProfile />
                <MobileViewOptions />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Navbar />
                <Shop />
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
