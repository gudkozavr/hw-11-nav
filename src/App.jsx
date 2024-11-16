import styles from "./styles/App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Facts from "./components/Facts";
import Fact from "./components/Fact";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFacts } from "./redux/slices/factSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFacts());
  }, [dispatch]);
  return (
    <div className={styles.app}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/facts">Facts</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/facts/:factId" element={<Fact />} />
      </Routes>
    </div>
  );
}
export default App;
