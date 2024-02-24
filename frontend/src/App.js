import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState, useLayoutEffect } from "react";


const App = () => {
  const pageSize = 6;
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const prefersNotSet = window.matchMedia(
    "(prefers-color-scheme: no-preference)"
  ).matches;
  useLayoutEffect(() => {
    if (prefersDark) {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    }
    if (prefersLight) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    if (prefersNotSet) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar 
        toggleMode={toggleMode}
        mode={mode}
         />
        <LoadingBar color="#0dcaf0" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                category="general"
                toggleMode={toggleMode} mode={mode}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                category="business"
                toggleMode={toggleMode} mode={mode}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                category="entertainment"
                toggleMode={toggleMode} mode={mode}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                category="health"
                toggleMode={toggleMode} mode={mode}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                category="science"
                toggleMode={toggleMode} mode={mode}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                category="sports"
                toggleMode={toggleMode} mode={mode}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                category="technology"
                toggleMode={toggleMode} mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;

// braisepascal287 apiKey = b13cf098acc045cd94d5e8e0a6cc3e62
// xahahov157@backva.com => pwd = Blaise@287 => 44d3d8aa3c094266b8c7995b531c9cec
