import styles from "../styles/Facts.module.css";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function Facts() {
  const {
    data: facts,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.facts);

  if (isError) {
    return <p>{message}</p>;
  }
  if (isLoading) {
    return <p>is loading</p>;
  }
  if (isSuccess) {
    return (
      <div className={styles.factsContainer}>
        <h1>Facts</h1>
        <ul>
          {facts &&
            facts.map((fact) => {
              return (
                <li key={fact.id}>
                  <Link className={styles.linkItem} to={`/facts/${fact.id}`}>
                    {fact.fact}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
