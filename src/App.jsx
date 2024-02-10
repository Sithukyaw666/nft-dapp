import Install from "./components/Install";
import { Suspense, lazy } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <div className="pt-4 px-4 min-h-screen bg-background">
      <div className="w-full border-t-2 border-x-2 min-h-screen border-primary  ">
        <Suspense fallback={<h1>Loading ..</h1>}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/mint" element={<Home />} />
              <Route path="/install" element={<Install />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
