import Basic from "./components/Basic.jsx";
import Objek from "./components/Objek.jsx";
import Typedata from "./components/Typedata.jsx";

function App() {
  return (
    <main style={styles.container}>
      <section style={styles.section}>
        <Basic />
      </section>

      <hr style={styles.divider} />

      <section style={styles.section}>
        <Typedata />
      </section>

      <hr style={styles.divider} />

      <section style={styles.section}>
        <Objek />
      </section>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 20,
    fontFamily: "sans-serif",
  },
  section: {
    marginBottom: 40,
  },
  divider: {
    margin: "30px 0",
    border: 0,
    height: 1,
    backgroundColor: "#ddd",
  },
};

export default App;
