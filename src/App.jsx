import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import InitUser from "../src/components/InitUser";
import Home from "./pages/Home";
import Instruction from "./pages/Instruction";
import Loader from "./pages/Loader";
import Layout from "./pages/Layout";

function App() {
  return (
    <RecoilRoot>
      <InitUser />
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/play" element={<Loader />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
