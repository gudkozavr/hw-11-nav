import styles from "../styles/Fact.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Fact() {
  const [fact, setFact] = useState(null);
  const facts = useSelector((state) => state.facts.data);
  const { factId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    getFactById(factId);
  }, [fact, factId]);
  function getFactById(factId) {
    const result = facts.find((fact) => fact.id === factId);
    setFact(result);
  }

  return (
    <>
      {fact && (
        <div className={styles.container}>
          <h1>Fact: {factId}</h1>
          <p>{fact.context}</p>
          <p>текущий путь : {location.pathname}</p>
          <button onClick={() => navigate("/facts")}>back</button>
        </div>
      )}
    </>
  );
}
