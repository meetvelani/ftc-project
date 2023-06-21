import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ViewProfile } from "./pages/ViewProfile/ViewProfile";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileViewOptions } from "./components/MobileViewOptions/MobileViewOptions";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import { Shop } from "./pages/Shop/Shop";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div>
                  <h3>Completed pages</h3>
                  <ul>
                    <li>
                      <Link to={"/view-profile"}>View Profile</Link>
                    </li>
                    <li>
                      <Link to={"/edit-profile"}>Edit Profile</Link>
                    </li>
                    <li>
                      <Link to={"/shop"}>Shop</Link>
                    </li>
                  </ul>
                </div>
                <MobileViewOptions />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                <Navbar />
                <SignIn />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Navbar />
                <SignUp />
              </>
            }
          />
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
