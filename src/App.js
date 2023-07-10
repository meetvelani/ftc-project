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
import { AdvanceSearch } from "./pages/AdvanceSearch/AdvanceSearch";
import { ProtectedRoute, PublicRoute } from "./ProtectRoutes";
import { useStateValue } from "./StateProvider";
import { Spinner } from "./components/Spinner/Spinner";

function App() {
  const [{ isLoading }] = useStateValue();
  return (
    <div className="main">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Toaster position="top-center" reverseOrder={false} />
        {isLoading && <Spinner />}
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
                <PublicRoute>
                  <Navbar />
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRoute>
                  <Navbar />
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="/view-profile"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <ViewProfile />
                  <MobileViewOptions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <EditProfile />
                  <MobileViewOptions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shop"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Shop />
                  <MobileViewOptions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messaging"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Messaging />
                  <MobileViewOptions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Chat />
                  <MobileViewOptions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Notifications />
                  <MobileViewOptions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/advance-search"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <AdvanceSearch />
                  <MobileViewOptions />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Worker>
    </div>
  );
}

export default App;
