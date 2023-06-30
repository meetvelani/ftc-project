import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ViewProfile } from "./pages/ViewProfile/ViewProfile";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileViewOptions } from "./components/MobileViewOptions/MobileViewOptions";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import { Shop } from "./pages/Shop/Shop";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Messaging } from "./pages/Messaging/Messaging";
import { Home } from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { Worker } from "@react-pdf-viewer/core";
import { Chat } from "./pages/Chat/Chat";
import { Notifications } from "./pages/Notifications/Notifications";

function App() {
  return (
    <div className="main">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Toaster position="top-center" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
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
            <Route
              path="/messaging"
              element={
                <>
                  <Navbar />
                  <Messaging />
                  <MobileViewOptions />
                </>
              }
            />
            <Route
              path="/chat"
              element={
                <>
                  <Navbar />
                  <Chat />
                  <MobileViewOptions />
                </>
              }
            />
            <Route
              path="/notifications"
              element={
                <>
                  <Navbar />
                  <Notifications />
                  <MobileViewOptions />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Worker>
    </div>
  );
}

export default App;
