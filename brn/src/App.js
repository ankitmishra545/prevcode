import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import AccountLayout from "./components/users/AccountLayout";
import DSU from "./components/DSU";
import CreateRequest from "./components/more/CreateRequest";
import ApplyLeave from "./components/more/ApplyLeave";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<AccountLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="DailyStatusUpdate" element={<DSU />} />
          <Route path="Tasks" element={<Tasks />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="NewRequest" element={<CreateRequest />} />
          <Route path="NewLeave" element={<ApplyLeave />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
