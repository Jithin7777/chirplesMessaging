import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import People from "./pages/People";
import { useState } from "react";

function App() {
  const [session, setSession] = useState("");
  return (
    <div className="App d-flex bg-body-secondary user-select-none flex-column flex-lg-row min-vh-100 overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Login passSession={setSession} />} />
        <Route path="/Register" element={<Login Register />} />
        <Route path="/Chat" element={<Home session={session} />} />
        <Route path="/Setting" element={<Setting session={session} />} />
        <Route path="/People" element={<People session={session} />} />
      </Routes>
    </div>
  );
}

export default App;