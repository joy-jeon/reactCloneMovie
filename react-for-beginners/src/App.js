import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <div className={styles.title}>welcome back!</div>
      <Button text={"hello"} />
    </div>
  );
}

export default App;
