import "./App.css";
import AdminPage from "./pages/AdminPage";
import ChannelPage from "./pages/Channel";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramsPage from "./pages/Programs";
import DashBoardPage from "./pages/DashBoard";
import ViewChannel from "./pages/ViewChannel";
import ViewProgram from "./pages/ViewProgram";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="" element={<DashBoardPage />} />
          <Route path="channels" element={<ChannelPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="channels/:id" element={<ViewChannel />} />
          <Route path="programs/:id" element={<ViewProgram />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
