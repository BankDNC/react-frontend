import "./App.css";
import { Routes, Route} from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import RouteNotFound from "./components/errors/RouteNotFound";
import DashboardPage from "./components/dashboard/DashboardPage";

function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/auth/*" element={<AuthPage />} />
        <Route exact path="/dashboard/*" element={<DashboardPage />} />
        <Route exact path="*" element={<RouteNotFound/>} />
      </Routes>
    </div>
  );
  
}

export default App;
