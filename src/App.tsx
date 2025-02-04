import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
function App() {
  return (
    <div className="grid gap-4 grid-cols-[220px_1fr]  p-4 min-h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
