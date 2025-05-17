import { BrowserRouter } from "react-router-dom";
// Import your routes
import "./App.css";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes /> {/* This renders all your routes */}
    </BrowserRouter>
  );
}

export default App;