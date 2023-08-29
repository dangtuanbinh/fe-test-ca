import { Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routers";
import Layout from "./components/layout";
import "./index.css";

function App() {
  return (
    <div className="app-wrapper" style={{height: "100vh"}}>
    <Routes>
      <Route path="/" element={<Layout />}>
        {PrivateRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="auth">
        {PublicRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
    </Routes>
  </div>
  );
}

export default App;
