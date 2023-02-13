import "./App.css";
import { BrowserRouter as Router, Routes, Route, redirect} from "react-router-dom";
import AuthPage from "./assets/components/auth/AuthPage";
import Overview from "./assets/components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/auth/*" element={<AuthPage />} />
          <Route exact path="/dashboard" element={<Overview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
