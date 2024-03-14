import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  RegisterSuccess,
  LoginPage,
  HomePage,
  ResetPasswordPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/reset-password-success" element={<RegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
