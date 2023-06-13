import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Demo } from "./pages/Demo/Demo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
