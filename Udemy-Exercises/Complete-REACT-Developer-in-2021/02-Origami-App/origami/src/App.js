import styles from './app.module.css';
import Aside from './components/aside';
import Header from './components/header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
      </div>
    </div>
  );
}

export default App;
